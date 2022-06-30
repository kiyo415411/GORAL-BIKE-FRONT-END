import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
import HotCard from '../Cards/HotCard';

export default function ActivityHotSwiper() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const getActivityData = async () => {
      try {
        const AxiosDate = await axios.get(`${API_URL}/activity`);
        setActivity(AxiosDate.data.activityFullDtaa);
      } catch (e) {
        throw new Error(e);
      }
    };
    getActivityData();
  }, []);

  return (
    <div className="bg-graybg pt-5 pb-4">
      <h5 className="ps-5 mb-4">活動推薦</h5>
      <Swiper
        slidesPerView={6}
        grabCursor={true}
        spaceBetween={0}
        scrollbar={{
          draggable: true,
          hide: false,
          snapOnRelease: true,
        }}
        loop={true}
        mousewheel={true}
        modules={[Scrollbar, Mousewheel]}
      >
        {activity.map((value, index) => {
          return (
            <SwiperSlide key={index} className="my-auto overflow-hidden">
              <HotCard
                detailLink={`/activity/${value.activity_id}`}
                image={`${IMAGE_URL}/activity/${value.activity_pictures}`}
                title={value.activity_name}
                price={value.activity_fee}
                theme="活動"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
