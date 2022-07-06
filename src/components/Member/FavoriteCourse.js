import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';
import Pagination from '../Pagination';
import RowCard from '../Cards/RowCard';
import ColCard from '../Cards/ColCard';
import FavoriteTopSort from './FavoriteTopSort';

export const CourseValue = createContext();

export default function FavoriteCourse({ userData }) {
  const [data, setData] = useState([]); // 主資料
  const [page, setPage] = useState(1); // 當前頁數
  const [lastPage, setLastPage] = useState(1); // 總頁數
  const [cardStyle, setCardStyle] = useState('row'); // 卡片排列方式
  const [searchWord, setSearchWord] = useState(''); // 關鍵字變動
  const [search, setSearch] = useState(''); // 關鍵字篩選
  const [statu, setStatu] = useState(''); // 狀態篩選
  const [state, setState] = useState([]); // 狀態分類
  const [originPrice, setOriginPrice] = useState(''); // 價錢範圍
  const [price, setPrice] = useState(''); // slider 價錢變動
  const [priceSubmit, setPriceSubmit] = useState(''); // 價錢篩選
  const [originPerson, setOriginPerson] = useState(''); // 人數範圍
  const [person, setPerson] = useState(''); // slider 人數變動
  const [personSubmit, setPersonSubmit] = useState(''); // 人數篩選
  const [categoryLabel, setCategoryLabel] = useState([]); // 難度分類
  const [category, setCategory] = useState([1, 2]); // 課程難度篩選
  const [startDate, setStartDate] = useState(new Date()); // 最早日期
  const [startDateSubmit, setStartDateSubmit] = useState(''); // 最早日期篩選
  const [endDate, setEndDate] = useState(new Date()); // 最晚日期
  const [endDateSubmit, setEndDateSubmit] = useState(''); // 最晚日期篩選
  const [sortMethod, setSortMethod] = useState('newSort'); // 排序
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏變動

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/course`, {
          params: {
            page: page,
            statu: statu,
            priceSubmit: priceSubmit,
            personSubmit: personSubmit,
            category: category,
            sortMethod: sortMethod,
            startDateSubmit: startDateSubmit,
            endDateSubmit: endDateSubmit,
            search: search,
            cardStyle: cardStyle,
            userId: userData.userId,
          },
        });
        setData(response.data.data);
        setLastPage(response.data.pagination.lastPage);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [
    page,
    statu,
    priceSubmit,
    personSubmit,
    category,
    sortMethod,
    startDateSubmit,
    endDateSubmit,
    search,
    cardStyle,
    favoriteActive,
    userData.userId,
  ]);

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/course/`);

        setPrice([
          response.data.priceRange.sqlMinPrice,
          response.data.priceRange.sqlMaxPrice,
        ]);
        setPerson([
          response.data.personRange.sqlMinPerson,
          response.data.personRange.sqlMaxPerson,
        ]);
        setOriginPrice([
          response.data.priceRange.sqlMinPrice,
          response.data.priceRange.sqlMaxPrice,
        ]);
        setOriginPerson([
          response.data.personRange.sqlMinPerson,
          response.data.personRange.sqlMaxPerson,
        ]);
        setState(response.data.stateGroup);
        setCategoryLabel(response.data.categoryGroup);
        setStartDate(response.data.dateRange.finalStartDate);
        setEndDate(response.data.dateRange.finalEndDate);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  const courseItems = [];

  data.map((v, i) => {
    const newDate = data[i].course_date.split('T').shift();
    if (cardStyle === 'row') {
      courseItems.push(
        <RowCard
          key={i}
          courseId={data[i].course_id}
          image={`${IMAGE_URL}/course/${data[i].course_pictures}`}
          score={data[i].course_score}
          like={data[i].favorite_is}
          title={data[i].course_title}
          price={data[i].course_price}
          time={newDate}
          count={data[i].course_enrollment}
          location={data[i].course_location_name}
          statu={data[i].course_status_name}
          text={data[i].course_content_introduction}
          category={data[i].course_category_name}
          venue={data[i].venue_name}
          datailLink={`/course/${data[i].course_id}`}
          setFavoriteActive={setFavoriteActive}
          favoriteActive={favoriteActive}
          favoriteMethod="course"
        />
      );
    } else {
      courseItems.push(
        <ColCard
          key={i}
          courseId={data[i].course_id}
          image={`${IMAGE_URL}/course/${data[i].course_pictures}`}
          like={data[i].favorite_is}
          title={data[i].course_title}
          price={data[i].course_price}
          time={newDate}
          count={data[i].course_enrollment}
          location={data[i].course_location_name}
          statu={data[i].course_status_name}
          text={data[i].course_content_introduction}
          category={data[i].course_category_name}
          venue={data[i].venue_name}
          datailLink={`/course/${data[i].course_id}`}
          setFavoriteActive={setFavoriteActive}
          favoriteActive={favoriteActive}
          favoriteMethod="course"
        />
      );
    }

    return 0;
  });

  const VALUE = {
    statu,
    setStatu,
    priceSubmit,
    setPriceSubmit,
    personSubmit,
    setPersonSubmit,
    category,
    setCategory,
    startDate,
    startDateSubmit,
    setStartDateSubmit,
    endDate,
    endDateSubmit,
    setEndDateSubmit,
    state,
    categoryLabel,
    price,
    setPrice,
    person,
    setPerson,
    setSearch,
    searchWord,
    setSearchWord,
    setPage,
    originPrice,
    originPerson,
  };

  return (
    <>
      <CourseValue.Provider value={VALUE}>
        {data.length > 0 ? (
          <div className={cardStyle === 'col' ? `ms-5 ps-5` : ''}>
            <FavoriteTopSort
              cardStyle={cardStyle}
              setCardStyle={setCardStyle}
              sortMethod={sortMethod}
              setSortMethod={setSortMethod}
              contextValue={CourseValue}
              className={cardStyle === 'col' ? `col-11 pe-5` : ''}
            />
            <div
              className={
                cardStyle === 'col'
                  ? 'd-flex flex-wrap mt-2 gap-3 mx-auto'
                  : 'mt-2 mb-4'
              }
            >
              {courseItems}
            </div>
            <div
              className={
                cardStyle === 'col'
                  ? `d-flex justify-content-center col-11 pe-5`
                  : `d-flex justify-content-center col-12`
              }
            >
              <Pagination page={page} setPage={setPage} lastPage={lastPage} />
            </div>
          </div>
        ) : (
          <>
            <FavoriteTopSort
              cardStyle={cardStyle}
              setCardStyle={setCardStyle}
              sortMethod={sortMethod}
              setSortMethod={setSortMethod}
              contextValue={CourseValue}
            />

            <div
              className="d-flex justify-content-center align-items-center link-content"
              style={{ height: '20rem' }}
            >
              找不到課程，請調整篩選條件。
            </div>
          </>
        )}
      </CourseValue.Provider>
    </>
  );
}
