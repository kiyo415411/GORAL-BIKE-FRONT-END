import TopSection from '../components/TopSection';
import CourseAside from '../components/CourseAside';
import Pagination from '../components/Pagination';
import RowCard from '../components/Cards/RowCard';
import ColCard from '../components/Cards/ColCard';
import TopSort from '../components/TopSort';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../utils/config';

const cardStyle = 'col'; // 切換排版 | row/col

export default function CourseList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let response = await axios.get(`${API_URL}/course/`);
      setData(response.data);
    };
    getData();
  });
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
          like={1}
          title={data[i].course_title}
          price={data[i].course_price}
          time={newDate}
          location={data[i].course_location_id}
          statu={data[i].course_status_id}
          text={data[i].course_content}
        />
      );
    } else {
      courseItems.push(
        <ColCard
          key={i}
          width={20}
          image={require('../images/course/' + data[i].course_pictures)}
          score={5}
          like={1}
          title={data[i].course_title}
          price={data[i].course_price}
          time={newDate}
          location={data[i].course_location_name}
          statu={data[i].course_status_name}
          text={data[i].course_content}
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
            <CourseAside />
          </div>
          {/* -----------------------------右區塊 */}
          <div className="col-auto">
            {/* 排序 */}
            <TopSort />
            {/* 卡片清單 */}
            <div
              className={cardStyle === 'col' ? 'd-flex flex-wrap mt-2' : 'mt-2'}
              style={{ width: '63rem' }}
            >
              {courseItems}
            </div>
            {/* 分頁 */}
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
