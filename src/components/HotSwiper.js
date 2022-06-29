import axios from 'axios';
import { useState, useEffect } from 'react';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
import { API_URL, IMAGE_URL } from '../../utils/config';
export default function HotSwiper({ title }) {
  const [product, setProduct] = useState([]);
  const [activity, setActivity] = useState([]);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getIndexData = async () => {
      try {
        const getProductValue = await axios.get(`${API_URL}/product`);
        const getActivityValue = await axios.get(`${API_URL}/activity`);
        const getCourseValue = await axios.get(`${API_URL}/course`);

        setProduct(getProductValue.data.data);
        setActivity(getActivityValue.data.activityFullDtaa);
        setCourse(getCourseValue.data.classFullDtaa);
      } catch (e) {
        throw new Error(e);
      }
    };
    getIndexData();
  }, []);

  return (
    <div className="bg-graybg pt-5">
      <h5 className="ps-5 mb-4">{title}</h5>
      <Swiper
        autoplay={true}
        slidesPerView={6}
        speed={300}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20}
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
              <figure className="activity_img_block mx-auto">
                <img
                  src={`${IMAGE_URL}/activity/${value.activity_pictures}`}
                  className="cover"
                  alt="..."
                />
              </figure>
              <div className="card-body">
                <p className="card-text fs-3 text-center">
                  {value.activity_name}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
