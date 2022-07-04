import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';
import RowCard from '../Cards/RowCard';

export default function FavoriteCourse({ userData }) {
  const [data, setData] = useState([]); // 主資料
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏有變動的時候會重新渲染

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/course`, {
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
  return <>{courseItems}</>;
}
