import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import BikeCard from '../ProductMainPage/BikeCard';

export default function FavoriteProduct({ userData }) {
  const [data, setData] = useState([]); // 主資料
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏有變動的時候會重新渲染
  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/product`, {
          params: {
            userId: userData.userId,
          },
        });
        setData(response.data.data);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [favoriteActive, userData.userId]);
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
      <ul className="list-unstyled row">{courseItems} </ul>
    </>
  );
}
