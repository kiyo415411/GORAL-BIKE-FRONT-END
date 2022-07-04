import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';
import RowCard from '../Cards/RowCard';

export default function FavoriteActivity({ userData }) {
  const [data, setData] = useState([]); // 主資料
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏有變動的時候會重新渲染
  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/activity`, {
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
  return <>{courseItems}</>;
}
