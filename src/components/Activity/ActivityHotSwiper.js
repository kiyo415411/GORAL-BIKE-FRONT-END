import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
import HotCard from '../Cards/HotCard';

export default function ActivityHotSwiper() {
  const [activity, setActivity] = useState([]);
  const [width, setWidth] = useState(window.innerWidth); // 視窗寬度

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
  // 偵測視窗寬度
  useEffect(() => {
    const updateWindowsWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener('resize', updateWindowsWidth);

    return () => window.removeEventListener('resize', updateWindowsWidth);
  }, []);

  return (
    <div className="bg-graybg pt-5 pb-4">
      <h5 className="ps-5 mb-4">活動推薦</h5>
      <Swiper
        slidesPerView={
          width >= 1800
            ? 7
            : width >= 1600
            ? 6
            : width >= 1400
            ? 5
            : width >= 984
            ? 4
            : width >= 823
            ? 3
            : 2
        }
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
