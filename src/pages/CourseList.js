import TopSection from '../components/TopSection';
import CourseAside from '../components/CourseAside';
import Pagination from '../components/Pagination';
import RowCard from '../components/Cards/RowCard';
import ColCard from '../components/Cards/ColCard';
import TopSort from '../components/TopSort';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../utils/config';
// const cardStyle = 'col';
export default function CourseList() {
  const [data, setData] = useState([]);
  // 目前在第幾頁
  const [page, setPage] = useState(1);
  // 總筆數
  const [lastPage, setLastPage] = useState(1);
  // 卡片排列方式
  const [cardStyle, setCardStyle] = useState('row');
  // 狀態篩選
  const [statu, setStatu] = useState(1);
  // 價錢篩選
  const [priceSubmit, setPriceSubmit] = useState([0, 10000]);
  // 人數篩選
  const [personSubmit, setPersonSubmit] = useState([0, 100]);
  // 課程難度篩選
  const [category, setCategory] = useState([1, 2]);

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/course/`, {
          params: {
            page: page,
            statu: statu,
            priceSubmit: priceSubmit,
            personSubmit: personSubmit,
            category: category,
          },
        });
        setData(response.data.data);
        setLastPage(response.data.pagination.lastPage);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [page, statu, priceSubmit, personSubmit, category]);

  const courseItems = [];

  data.map((v, i) => {
    const newDate = data[i].course_date.split('T').shift();
    if (cardStyle === 'row') {
      courseItems.push(
        <RowCard
          key={i}
          height={15.625}
          image={`${IMAGE_URL}/course/${data[i].course_pictures}`}
          score={5}
          like={false}
          title={data[i].course_title}
          price={data[i].course_price}
          time={newDate}
          count={data[i].course_inventory}
          location={data[i].course_location_name}
          statu={data[i].course_status_name}
          text={data[i].course_content}
          category={data[i].course_category_name}
          venue={data[i].venue_name}
        />
      );
    } else {
      courseItems.push(
        <ColCard
          key={i}
          width={20}
          image={`${IMAGE_URL}/course/${data[i].course_pictures}`}
          like={false}
          title={data[i].course_title}
          price={data[i].course_price}
          time={newDate}
          count={data[i].course_inventory}
          location={data[i].course_location_name}
          statu={data[i].course_status_name}
          text={data[i].course_content}
          category={data[i].course_category_name}
          venue={data[i].venue_name}
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
            />
          </div>
          {/* -----------------------------右區塊 */}
          <div className="col-auto">
            {/* 排序 */}
            <TopSort cardStyle={cardStyle} setCardStyle={setCardStyle} />
            {/* 卡片清單 */}
            <div
              className={cardStyle === 'col' ? 'd-flex flex-wrap mt-2' : 'mt-2'}
              style={{ width: '63rem' }}
            >
              {courseItems}
            </div>
            {/* 分頁 */}
            <div>
              <Pagination page={page} setPage={setPage} lastPage={lastPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
