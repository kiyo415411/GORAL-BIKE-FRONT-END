import VIDEO from '../../videos/index-heros.webm';
import LOCATION from '../../images/Location.svg';
import ACTIVTY from '../../images/Acitvity.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
import DataAPI from '../Map/DataAPI';
import { BsSquareFill } from 'react-icons/bs';
// slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//Slider
import Slider from 'react-slick';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import {
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Controller,
  Scrollbar,
} from 'swiper';

export default function Index() {
  const [api, setApi] = useState([]);
  const [news, setNews] = useState([]);
  const [product, setProduct] = useState([]);
  const [activity, setActivity] = useState([]);
  const [course, setCourse] = useState([]);
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  // const productCarousel = useRef(null);
  // const productNameCarousel = useRef(null);

  // const settings = {
  //   focusOnSelect: true,
  //   speed: 2500,
  //   centerMode: true,
  // };

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
        setActivity(getActivityValue.data.activityFullDtaa);
        setCourse(getCourseValue.data.classFullDtaa);
      } catch (e) {
        throw new Error(e);
      }
    };
    getIndexData();
  }, []);

  useEffect(() => {
    console.log(news);
  }, [news]);

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
          {/* NEWS */}
          <section className="bg-light row row justify-content-around p-5 m-0">
            <article className="col-5 my-5">
              <h1 className="border-5 border-start border-secondary mb-3">
                　最新消息
              </h1>
              <main>
                {news.slice(0, 1).map((value, index) => {
                  return (
                    <Link to={`/news/${value.id}`} key={value.id}>
                      <div className="row align-items-end border-bottom  pb-3">
                        <div className="col-12 ">
                          <div
                            className="col-6 overflow-hidden mb-2"
                            style={{ width: '621px', height: '416px' }}
                          >
                            <img
                              className="cover "
                              src={`${IMAGE_URL}/news/${value.name}`}
                              // style={{ width: '100%' }}
                              alt=""
                            />
                          </div>
                          <span className="d-flex align-items-start gap-2">
                            <span className="">
                              <BsSquareFill />
                            </span>
                            <span>{value.date.split('T').shift()}</span>
                          </span>
                        </div>
                        <h3>{value.title}</h3>
                        <p style={{ textAlign: 'justify' }}>{value.content}</p>
                      </div>
                    </Link>
                  );
                })}
              </main>
            </article>

            <aside className="col-5 my-5 row gap-3">
              {news.slice(0, 6).map((value, index) => {
                return (
                  <Link to={`/news/${value.id}`} key={value.id}>
                    <div className="row align-items-end border-bottom  pb-3">
                      <div className="col-8 ">
                        <p>{value.date.split('T').shift()}</p>
                        <h6>{value.title}</h6>
                      </div>
                      <div
                        className="col-4 overflow-hidden"
                        style={{ width: '200px', height: '80px' }}
                      >
                        <img
                          className="cover"
                          src={`${IMAGE_URL}/news/${value.name}`}
                          // style={{ width: '100%' }}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </aside>
          </section>
          {/* PRODUCT */}
          <section className="py-5 my-5">
            {/* <h1 className="w-60 mx-auto mt-4">熱門商品</h1> */}
            <Slider
              asNavFor={secondSwiper}
              ref={(slider1) => setFirstSwiper(slider1)}
              className="mx-5 px-5 center"
            >
              {product.map((value) => {
                return (
                  <section
                    key={value.product_id}
                    className="w-75 row d-flex justify-content-center align-items-center m-auto"
                    style={{ height: '30rem' }}
                  >
                    <article className="col-5" style={{ textAlign: 'justify' }}>
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
                );
              })}
            </Slider>
            <Slider
              asNavFor={firstSwiper}
              centerMode={true}
              ref={(slider2) => setSecondSwiper(slider2)}
              slidesToShow={5}
              autoplay={true}
              autoplaySpeed={3000}
              focusOnSelect={true}
              className="mx-5 px-5 w-75 mx-auto scroll center d-flex align-items-center"
            >
              {product.map((value) => {
                return (
                  <p key={value.product_id} className="text-center fs-6 m-auto">
                    {value.product_name}
                  </p>
                );
              })}
            </Slider>
          </section>
          {/* LOCATION */}
          <section className="overflow-hidden">
            <img src={LOCATION} alt="" />
          </section>
          <section className="row m-5 p-5 justify-content-center align-items-center">
            <article className="col-3 my-auto me-5">
              <h2 className="fw-bold">登山車訓練營</h2>
              <p className="mt-3">
                帶著這些問題，我們一起來審視登山車訓練營。需要考慮周詳登山車訓練營的影響及因應對策。如果此時我們選擇忽略登山車訓練營，那後果可想而知。當前最急迫的事，想必就是釐清疑惑了。這樣看來，對於登山車訓練營，我們不能不去想，卻也不能走火入魔。
              </p>
              <button className="btn btn-danger fs-6 w-50 mt-1">
                更多訓練營
              </button>
            </article>
            <section className="col-8 course">
              <Swiper
                effect={'coverflow'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  scale: 1,
                  depth: 0,
                  modifier: 1,
                  slideShadows: false,
                }}
                spaceBetween={20}
                mousewheel={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
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
          <section className="my-5 py-5 activity">
            <h1 className="display-6 fw-bolder text-center mb-5">
              2022年，你絕不能錯過的登山車活動
            </h1>
            <Swiper
              autoplay={true}
              slidesPerView={3}
              speed={300}
              autoplaySpeed={2000}
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
          </section>
        </div>
      </main>
    </>
  );
}
