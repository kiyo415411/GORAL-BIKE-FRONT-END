import TopSection from '../components/TopSection';
import CourseAside from '../components/CourseAside';
import Pagination from '../components/Pagination';
import RowCard from '../components/Cards/RowCard';
import ColCard from '../components/Cards/ColCard';
import TopSort from '../components/TopSort';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../utils/config';

export default function ActivityList() {
  // ---------------------------------------------- 初始值

  const [data, setData] = useState([]); // 主資料
  const [page, setPage] = useState(1); // 當前頁數
  const [lastPage, setLastPage] = useState(1); // 總頁數
  const [cardStyle, setCardStyle] = useState('row'); // 卡片排列方式
  const [searchWord, setSearchWord] = useState(''); // 關鍵字變動
  const [search, setSearch] = useState(''); // 關鍵字篩選
  const [statu, setStatu] = useState(1); // 狀態篩選
  const [price, setPrice] = useState([0, 10000]); // slider 價錢變動
  const [priceSubmit, setPriceSubmit] = useState([0, 10000]); // 價錢篩選
  const [person, setPerson] = useState([0, 100]); // slider 人數變動
  const [personSubmit, setPersonSubmit] = useState([0, 100]); // 人數篩選
  const [category, setCategory] = useState([1, 2, 3, 4]); // 課程難度篩選
  const [startDate, setStartDate] = useState(new Date()); // 最早日期
  const [startDateSubmit, setStartDateSubmit] = useState(''); // 最早日期篩選
  const [endDate, setEndDate] = useState(new Date()); // 最晚日期
  const [endDateSubmit, setEndDateSubmit] = useState(''); // 最晚日期篩選
  const [sortMethod, setSortMethod] = useState('hotSort'); // 排序

  // ------------------------------------------- 固定值

  const [categoryLabel, setCategoryLabel] = useState([]); // 難度分類
  const [state, setState] = useState([]); // 狀態分類

  // ------------------------------------------- 跟後端要資料
  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/activity/`, {
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
          },
        });
        setData(response.data.data);
        setLastPage(response.data.pagination.lastPage);
        setStartDate(response.data.dateRange.finalStartDate);
        setEndDate(response.data.dateRange.finalEndDate);
        setState(response.data.stateGroup);
        setCategoryLabel(response.data.categoryGroup);
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
  ]);

  const courseItems = [];

  data.map((v, i) => {
    const newDate = data[i].activity_date.split('T').shift();
    if (cardStyle === 'row') {
      courseItems.push(
        <RowCard
          key={i}
          height={15.625}
          courseId={data[i].id}
          image={`${IMAGE_URL}/activity/${data[i].activity_pictures}`}
          score={5}
          like={false}
          title={data[i].activity_name}
          price={data[i].activity_fee}
          time={newDate}
          count={data[i].activity_persons}
          statu={data[i].activity_status_name}
          text={data[i].activity_content}
          venue={data[i].venue_name}
          datailLink={`/activity/${data[i].id}`}
        />
      );
    } else {
      courseItems.push(
        <ColCard
          key={i}
          width={20}
          courseId={data[i].id}
          image={`${IMAGE_URL}/activity/${data[i].activity_pictures}`}
          score={5}
          like={false}
          title={data[i].activity_name}
          price={data[i].activity_fee}
          time={newDate}
          count={data[i].activity_persons}
          statu={data[i].activity_status_name}
          text={data[i].activity_content}
          venue={data[i].venue_name}
          datailLink={`/activity/${data[i].id}`}
        />
      );
    }

    return 0;
  });

  return (
    <>
      <TopSection
        title="課程"
        bg={require('../images/course/CourseBanner.jpg')}
      />
      <div className="container">
        <div className="row gx-5 justify-content-center my-5 flex-nowrap">
          {/* -----------------------------左區塊 */}
          <div className="col-auto">
            {/* 邊攔 */}
            <CourseAside
              statu={statu}
              setStatu={setStatu}
              priceSubmit={priceSubmit}
              setPriceSubmit={setPriceSubmit}
              personSubmit={personSubmit}
              setPersonSubmit={setPersonSubmit}
              category={category}
              setCategory={setCategory}
              startDate={startDate}
              startDateSubmit={startDateSubmit}
              setStartDateSubmit={setStartDateSubmit}
              endDate={endDate}
              endDateSubmit={endDateSubmit}
              setEndDateSubmit={setEndDateSubmit}
              state={state}
              categoryLabel={categoryLabel}
              price={price}
              setPrice={setPrice}
              person={person}
              setPerson={setPerson}
              setSearch={setSearch}
              searchWord={searchWord}
              setSearchWord={setSearchWord}
            />
          </div>
          {/* -----------------------------右區塊 */}
          <div className="col-auto">
            {/* 排序 */}
            <TopSort
              cardStyle={cardStyle}
              setCardStyle={setCardStyle}
              sortMethod={sortMethod}
              setSortMethod={setSortMethod}
            />
            {/* 卡片清單 */}
            {data.length > 0 ? (
              <>
                <div
                  className={
                    cardStyle === 'col' ? 'd-flex flex-wrap mt-2' : 'mt-2 mb-5'
                  }
                  style={{ width: '63rem' }}
                >
                  {courseItems}
                </div>
                <div className="d-flex justify-content-center">
                  <Pagination
                    page={page}
                    setPage={setPage}
                    lastPage={lastPage}
                  />
                </div>
              </>
            ) : (
              <div
                className="row justify-content-center align-items-center text-content"
                style={{ width: '63rem', height: '75%' }}
              >
                找不到課程，請調整篩選條件。
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
