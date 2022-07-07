import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';

import Pagination from '../Pagination';
import RowCard from '../Cards/RowCard';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function FavoriteCourse({ userData }) {
  const [data, setData] = useState([]); // 主資料
  const [page, setPage] = useState(1); // 當前頁數
  const [lastPage, setLastPage] = useState(1); // 總頁數
  const [sortMethod, setSortMethod] = useState('newSort'); // 排序
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏變動

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/course`, {
          params: {
            page: page,
            sortMethod: sortMethod,
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
  }, [page, sortMethod, favoriteActive, userData.userId]);

  const courseItems = [];

  data.map((v, i) => {
    const newDate = data[i].course_date.split('T').shift();

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
    return 0;
  });

  return (
    <>
      {/* ------------------------------------------------- Sort 排序 */}
      <Dropdown className="col-12 d-flex justify-content-end mb-2">
        {/* ---------------- Title 表頭 */}
        <Dropdown.Toggle
          variant="white"
          id="dropdown-basic"
          className="link-highlight"
        >
          排序
        </Dropdown.Toggle>
        {/* ---------------- Menu 選單 */}
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setSortMethod('newSort');
            }}
          >
            最新課程優先
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSortMethod('oldSort');
            }}
          >
            最舊課程優先
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSortMethod('cheapSort');
            }}
          >
            價錢由低至高
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSortMethod('expensiveSort');
            }}
          >
            價錢由高至低
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {data.length > 0 ? (
        <>
          {/* ------------------------------- list 列表 */}
          <div className="list-unstyled"> {courseItems}</div>
          {/* ------------------------------------------- pagination 分頁 */}
          <div className="d-flex justify-content-center col-12">
            <Pagination
              page={page}
              setPage={setPage}
              lastPage={lastPage}
              className="mt-4"
            />
          </div>
        </>
      ) : (
        <div
          className="d-grid justify-content-center align-items-center link-content h-auto pt-5"
          // style={{ height: '30rem' }}
        >
          <div className="d-flex justify-content-center mt-5">
            <p>到</p>
            <Link to="/course" className="link-highlight mx-1">
              課程頁面
            </Link>
            <p>逛逛，開始進行收藏！</p>
          </div>
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a60759ad1dabe909c46a817ecbf71878.png"
            alt=""
          />
        </div>
      )}
    </>
  );
}
