import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';

import BikeCard from '../ProductMainPage/BikeCard';
import Pagination from '../ProductMainPage/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function FavoriteProduct({ userData }) {
  const [data, setData] = useState([]); // 主資料
  const [page, setPage] = useState(1); // 當前頁數
  const [lastPage, setLastPage] = useState(1); // 總頁數
  const [sortMethod, setSortMethod] = useState('newSort'); // 排序
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏變動

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/product`, {
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
    courseItems.push(
      <li
        key={data[i].product_id}
        className="col-12 col-md-8 col-lg-12 mx-auto"
      >
        <BikeCard
          bike={data[i].product_images}
          name={data[i].product_name}
          like={data[i].favorite_is}
          price={data[i].product_price}
          text={
            '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。'
          }
          rating={data[i].product_rating}
          id={data[i].product_id}
          favoriteActive={favoriteActive}
          setFavoriteActive={setFavoriteActive}
        />
      </li>
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
            最新商品優先
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSortMethod('oldSort');
            }}
          >
            最舊商品優先
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
              商品頁面
            </Link>
            <p>逛逛，開始進行收藏！</p>
          </div>
          <img src={`${IMAGE_URL}/no-data/green.svg`} alt="" />
        </div>
      )}
    </>
  );
}
