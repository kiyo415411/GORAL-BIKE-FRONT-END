import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';

import Pagination from '../Pagination';
import RowCard from '../Cards/RowCard';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function FavoriteActivity({ userData }) {
  const [data, setData] = useState([]); // 主資料
  const [page, setPage] = useState(1); // 當前頁數
  const [lastPage, setLastPage] = useState(1); // 總頁數
  const [sortMethod, setSortMethod] = useState('newSort'); // 排序
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏變動

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/activity`, {
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
    const newDate = data[i].activity_date.split('T').shift();

    courseItems.push(
      <RowCard
        key={i}
        courseId={data[i].activity_id}
        image={`${IMAGE_URL}/activity/${data[i].activity_pictures}`}
        score={data[i].activity_score}
        like={data[i].favorite_is}
        title={data[i].activity_name}
        price={data[i].activity_fee}
        time={newDate}
        count={data[i].activity_persons}
        statu={data[i].activity_status_name}
        text={data[i].activity_content_introduction}
        venue={data[i].venue_name}
        datailLink={`/activity/${data[i].activity_id}`}
        setFavoriteActive={setFavoriteActive}
        favoriteActive={favoriteActive}
        favoriteMethod="activity"
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
            最新活動優先
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSortMethod('oldSort');
            }}
          >
            最舊活動優先
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
            <Link to="/activity" className="link-highlight mx-1">
              活動頁面
            </Link>
            <p>逛逛，開始進行收藏！</p>
          </div>
          <img src={`${IMAGE_URL}/no-data/green.svg`} alt="" />
        </div>
      )}
    </>
  );
}
