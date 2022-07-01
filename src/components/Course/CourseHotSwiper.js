import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
import HotCard from '../Cards/HotCard';

export default function CourseHotSwiper() {
  const [course, setCourse] = useState([]);
  const [width, setWidth] = useState(window.innerWidth); // 視窗寬度

  useEffect(() => {
    const getCourseData = async () => {
      try {
        const AxiosDate = await axios.get(`${API_URL}/course`);
        setCourse(AxiosDate.data.classFullDtaa);
      } catch (e) {
        throw new Error(e);
      }
    };
    getCourseData();
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
      <h5 className="ps-5 mb-4">課程推薦</h5>
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
        {course.map((value, index) => {
          return (
            <SwiperSlide key={index} className="my-auto overflow-hidden">
              <HotCard
                detailLink={`/course/${value.course_id}`}
                image={`${IMAGE_URL}/course/${value.course_pictures}`}
                title={value.course_title}
                price={value.course_price}
                theme="課程"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
