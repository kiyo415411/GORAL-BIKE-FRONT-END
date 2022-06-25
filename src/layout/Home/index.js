import VIDEO from '../../videos/index-heros.webm';
import LOCATION from '../../images/Location.svg';
import ACTIVTY from '../../images/Acitvity.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
import DataAPI from '../Map/DataAPI';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Swiper styles

//Slider
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {
  EffectCreative,
  EffectCoverflow,
  Mousewheel,
  Navigation,
} from 'swiper';

export default function Index() {
  const [api, setApi] = useState([]);
  const [news, setNews] = useState([]);
  const [product, setProduct] = useState([]);
  const [activity, setActivity] = useState([]);
  const [course, setCourse] = useState([]);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    const getIndexData = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getDataValue = await DataAPI();
        const getNewsValue = await axios.get(`${API_URL}/news`);
        const getProductValue = await axios.get(`${API_URL}/product`);
        const getActivityValue = await axios.get(`${API_URL}/activity`);
        const getCourseValue = await axios.get(`${API_URL}/course`);

        setApi(getDataValue);
        setNews(getNewsValue.data.newsResults);
        setProduct(getProductValue.data.data);
        setActivity(getActivityValue.data);
        setCourse(getCourseValue.data.classFullDtaa);
      } catch (e) {
        throw new Error(e);
      }
    };
    getIndexData();
  }, []);

  // 檢查生命週期區域
  useEffect(() => {
    // console.log(api);
    // console.log(news);
    // console.log(product);
    // console.log(activity);
    // console.log(course);
    console.log(nav2);
  }, [nav2]);

  return (
    <>
      <main>
        <div className="container-fluid m-0 p-0">
          {/* HERO */}
          <section
            className="bg-info overflow-hidden position-relative"
            style={{ height: '804px' }}
          >
            <video src={VIDEO} autoPlay={true} loop={true} muted></video>

            <article
              className="position-absolute translate-middle lh-lg text-white"
              style={{
                left: '25%',
                top: '45%',
                width: '620px',
              }}
            >
              <h5 className="fw-bold fs-3">TRAIL</h5>
              <h1 className="fw-bolder display-1">ONE-TWENTY</h1>
              <h5 className="fw-bold fs-4">樂趣</h5>
              <p className="fw-bold fs-6">
                BIG.NINE
                300，車架為採用雙重管壁厚度的鋁合金管材所打造，較為直挺的騎乘幾何。Shimano
                Deore 2x10傳動系統，油壓碟煞，Suntour避震前叉。
              </p>
            </article>
          </section>
          {/* PRODUCT */}
          <section className="w-75 mx-auto py-5">
            <h1 className="w-60 mx-auto mt-4">熱門商品</h1>
            <Swiper
              navigation={true}
              mousewheel={true}
              modules={[EffectCoverflow, Navigation, Mousewheel]}
              className="mySwiper"
              loop={true}
              // asNavFor={nav2}
              // ref={(slider1) => setNav1(slider1)}
            >
              {product.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    <section
                      className="w-75 row d-flex justify-content-center align-items-center m-auto"
                      style={{ height: '30rem' }}
                    >
                      <article
                        className="col-5"
                        style={{ textAlign: 'justify' }}
                      >
                        <h3>{value.product_name}</h3>
                        <p className="mt-4 fs-6">
                          鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano
                          Deore 1x10零組件搭配，Suntour避震前叉。
                        </p>
                        <p className="text-danger fw-bold text-end">查看更多</p>
                      </article>
                      <figure className="col-6 d-block ms-5 my-auto">
                        <img
                          className="img-fluid m-0 p-0"
                          style={{
                            objectFit: 'contain',
                            width: '50rem',
                            height: '30rem',
                          }}
                          src={`${IMAGE_URL}/bikes/${value.product_images}`}
                          alt=""
                        />
                      </figure>
                    </section>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              effect={'coverflow'}
              mousewheel={true}
              slidesPerView={5}
              grabCursor={true}
              navigation={true}
              centeredSlides={true}
              // slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Mousewheel, Navigation]}
              loop={true}
              className="mySwiper"

              // asNavFor={nav1}
              // ref={(slider2) => setNav2(slider2)}
            >
              {product.map((value, index) => {
                return (
                  <SwiperSlide key={index} style={{ height: '8rem' }}>
                    <h6 className="text-center m-5 fs-5">
                      {value.product_name}
                    </h6>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          {/* LOCATION */}
          <section className="overflow-hidden">
            <img src={LOCATION} alt="" />
          </section>
          <section className="row m-5 p-5 justify-content-center align-items-center">
            <article className="col-2 my-auto me-5">
              <h2 className="fw-bold">登山車訓練營</h2>
              <p className="mt-3">
                帶著這些問題，我們一起來審視登山車訓練營。需要考慮周詳登山車訓練營的影響及因應對策。如果此時我們選擇忽略登山車訓練營，那後果可想而知。當前最急迫的事，想必就是釐清疑惑了。這樣看來，對於登山車訓練營，我們不能不去想，卻也不能走火入魔。
              </p>
              <button className="btn btn-danger fs-6 w-50 mt-1">
                更多訓練營
              </button>
            </article>
            <section className="col-9 course">
              <Swiper
                effect={'coverflow'}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  scale: 0.5,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                mousewheel={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                modules={[EffectCoverflow, Mousewheel]}
                className="mySwiper my-auto h-100"
              >
                {course.map((value, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="course_img_block my-auto"
                    >
                      <img
                        className="cover"
                        src={`${IMAGE_URL}/course/${value.course_pictures}`}
                        alt="..."
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </section>
          </section>

          {/* ACTIVTY */}
          <section className="my-5 p-5 overflow-hidden">
            <h1 className="display-6 fw-bolder text-center">
              2022年，你絕不能錯過的登山車活動
            </h1>
            <div className="row flex-nowrap" style={{ marginLeft: '-25%' }}>
              <div className="card border-0 mt-5" style={{ width: '40%' }}>
                <img src={ACTIVTY} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text fs-1 text-center">
                    XTERRA TAIWAN 2022
                  </p>
                </div>
              </div>
              <div className="card border-0 mt-5" style={{ width: '40%' }}>
                <img src={ACTIVTY} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text fs-1 text-center">
                    XTERRA TAIWAN 2022
                  </p>
                </div>
              </div>
              <div className="card border-0 mt-5" style={{ width: '40%' }}>
                <img src={ACTIVTY} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text fs-1 text-center">
                    XTERRA TAIWAN 2022
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* NEWS */}
          <section className="bg-light row row justify-content-around p-5 m-0">
            <article className="col-4 my-5 row gap-2">
              <h4 className="fw-bolder">最新消息</h4>
              <img src={ACTIVTY} className="w-100" alt="" />
              <p className="fw-bold">2022/06/30</p>
              <h6 className="fw-bolder fs-5">
                稱霸La Flèche Wallonne(瓦隆之箭) Dylan
                Teuns(特恩斯)生涯古典賽代表作
              </h6>
              <p>
                稱霸La Flèche Wallonne(瓦隆之箭) Dylan
                Teuns(特恩斯)寫生涯古典賽代力退阿登大賽5屆冠軍、現役世界冠軍、環法冠軍，Teuns技驚四座
              </p>
            </article>
            <aside className="col-5 my-5 row gap-3">
              <div className="row align-items-end border-bottom  pb-3">
                <div className="col-8 ">
                  <p>2022/06/30</p>
                  <h6>稱霸La Flèche Wallonne (瓦隆之箭) Dylan Teuns...</h6>
                </div>
                <div className="col-4">
                  <img src={ACTIVTY} style={{ width: '100%' }} alt="" />
                </div>
              </div>
              <div className="row align-items-end border-bottom  pb-3">
                <div className="col-8 ">
                  <p>2022/06/30</p>
                  <h6>稱霸La Flèche Wallonne (瓦隆之箭) Dylan Teuns...</h6>
                </div>
                <div className="col-4">
                  <img src={ACTIVTY} style={{ width: '100%' }} alt="" />
                </div>
              </div>
              <div className="row align-items-end border-bottom pb-3">
                <div className="col-8 ">
                  <p>2022/06/30</p>
                  <h6>稱霸La Flèche Wallonne (瓦隆之箭) Dylan Teuns...</h6>
                </div>
                <div className="col-4">
                  <img src={ACTIVTY} style={{ width: '100%' }} alt="" />
                </div>
              </div>
              <div className="row align-items-end border-bottom  pb-3">
                <div className="col-8 ">
                  <p>2022/06/30</p>
                  <h6>稱霸La Flèche Wallonne (瓦隆之箭) Dylan Teuns...</h6>
                </div>
                <div className="col-4">
                  <img src={ACTIVTY} style={{ width: '100%' }} alt="" />
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}
