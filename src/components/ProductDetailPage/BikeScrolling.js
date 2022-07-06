import BikeCardSmall from './BikeCardSmall';
import { useEffect, useState } from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HotCard from '../Cards/HotCard';
import { IMAGE_URL } from '../../utils/config';


// init Swiper:
function BikeScrolling(props) {
  const [bikes, setBikes] = useState(props.bikes);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setBikes(props.bikes);
  }, [props.bikes, bikes]);
  if (bikes.length === 0) return <></>;
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
        {bikes.map((value, index) => {
          return (
            <SwiperSlide key={index} className="my-auto overflow-hidden">
              <HotCard
                detailLink={`/product/detail/${value.product_id}`}
                image={`${IMAGE_URL}/bikes/${value.product_images}`}
                title={value.product_name}
                price={value.product_price}
                theme="課程"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    // <div style={{ background: '#dee2e6' }} className="p-3">
    //   <p>其他相似商品</p>
    //   <ul className="list-unstyled list-group list-group-horizontal overflow-auto course-list-aside">
    //     {bikes.map((item, index) => {
    //       return (
    //         <li key={index} className="me-5 mt-4">
    //           <BikeCardSmall
    //             img={item.product_images}
    //             rating={item.product_rating}
    //             name={item.product_name}
    //             // like={item.Like}
    //             price={item.product_price}
    //             // text={item.Text}
    //           />
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
}

export default BikeScrolling;
