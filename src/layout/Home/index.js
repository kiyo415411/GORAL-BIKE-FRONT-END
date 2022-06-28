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
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import { EffectCoverflow, Mousewheel, EffectFade, Scrollbar } from 'swiper';

export default function Index() {
  let getScreenWidth = window.screen.width;

  console.log(getScreenWidth);
  const [screenWidth, setScreenWidth] = useState([]);
  const [api, setApi] = useState([]);
  const [news, setNews] = useState([]);
  const [product, setProduct] = useState([]);
  const [activity, setActivity] = useState([]);
  const [course, setCourse] = useState([]);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

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
    let getScreenWidth = window.screen.width;
    setScreenWidth(getScreenWidth);
  }, [getScreenWidth]);

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

            <article className="position-absolute top-100 start-0 translate-middle-y w-100 h-100 lh-lg text-white mx-5">
              <h5 className="fw-bold fs-3">TRAIL</h5>
              <h1 className="fw-bolder display-1">ONE-TWENTY</h1>
              <h5 className="fw-bold fs-4">樂趣</h5>
              <p
                className="fw-bold fs-6 w-75"
                style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
              >
                BIG.NINE
                300，車架為採用雙重管壁厚度的鋁合金管材所打造，較為直挺的騎乘幾何。Shimano
                Deore 2x10傳動系統，油壓碟煞，Suntour避震前叉。
              </p>
            </article>
          </section>

          {/* NEWS */}
          <section className="bg-light row row justify-content-around p-5 m-0">
            <article className="col-12 col-md-5 my-5">
              <h1 className="border-5 border-start border-secondary mb-3">
                　最新消息
              </h1>
              <main>
                {news.slice(0, 1).map((value, index) => {
                  return (
                    <Link to={`/news/${value.id}`} key={value.id}>
                      <div className="row align-items-end border-bottom pb-3">
                        <div className="col-12 mt-3">
                          <div className="col-6 overflow-hidden mb-2 w-100 h-100">
                            <img
                              className="cover "
                              src={`${IMAGE_URL}/news/${value.name}`}
                              // style={{ width: '100%' }}
                              alt=""
                            />
                          </div>
                          <span className="d-flex mt-3 align-items-center gap-2">
                            <BsSquareFill />
                            <span>{value.date.split('T').shift()}</span>
                          </span>
                        </div>
                        <h3 className="mt-3">{value.title}</h3>
                        <p className="mt-3" style={{ textAlign: 'justify' }}>
                          {value.content}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </main>
            </article>

            <aside className="col-5 my-5 row gap-3 d-none d-md-block">
              <h3 className="border-5 border-start border-secondary mb-3">
                　消息列表
              </h3>
              {news.slice(0, 6).map((value, index) => {
                return (
                  <Link to={`/news/${value.id}`} key={value.id}>
                    <div className="row align-items-end border-bottom  pb-3">
                      <div className="col-8 ">
                        <span className="d-flex align-items-center mb-3 gap-2">
                          <BsSquareFill />
                          <span>{value.date.split('T').shift()}</span>
                        </span>
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
                    className="w-100 row d-flex justify-content-center align-items-center m-md-auto m-0 p-0"
                  >
                    <article
                      className="col-12 col-md-5 order-1 order-md-0"
                      style={{ textAlign: 'justify' }}
                    >
                      <h3>{value.product_name}</h3>
                      <p className="mt-4 fs-6">
                        鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano
                        Deore 1x10零組件搭配，Suntour避震前叉。
                      </p>
                      <p className="text-danger fw-bold text-end">查看更多</p>
                    </article>
                    <figure className="col-12 col-md-6 d-block ms-md-5 my-5 my-md-auto ">
                      <img
                        className="img-fluid m-0 p-0"
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
              slidesToShow={screenWidth > 500 ? 5 : 1}
              autoplay={true}
              autoplaySpeed={3000}
              focusOnSelect={true}
              className="w-75 mx-auto justify-content-center scroll d-flex align-items-center"
            >
              {product.map((value) => {
                return (
                  <p
                    key={value.product_id}
                    className="text-center fs-6 m-md-auto mb-reset"
                  >
                    {value.product_name}
                  </p>
                );
              })}
            </Slider>
          </section>

          {/* LOCATION */}
          <section style={{ height: '50rem' }}>
            <Swiper effect={'fade'} navigation={true} modules={[EffectFade]}>
              {api.map((value, index) => {
                return (
                  <SwiperSlide key={index} className="position-relative">
                    <img
                      className="cover position-absolute top-0 start-0"
                      src={`${IMAGE_URL}/81pic/${value['編號']}.jpg`}
                      alt=""
                    />
                    <section
                      className={`bg-black position-absolute top-50 end-0 translate-middle-y h-60 ${
                        getScreenWidth < 500 ? 'w-100' : 'w-35'
                      } bg-opacity-75`}
                    >
                      <section className="col-12 m-0 text-white p-4 row">
                        <section className="col-12 m-3">
                          <h1 className="m-0 col-md-10  display-5 fw-bolder text-secondary">
                            {value['林道名稱']}
                          </h1>
                          <section className="col-md-10 row mt-5">
                            <span className="col-6 text-white">
                              <span className="">林區：</span>
                              {value['林區']}
                            </span>
                            <span className="col-6 text-white">
                              <span className="">縣市：</span>
                              {value['縣市']}
                            </span>
                          </section>
                          <section className="col-md-10 row mt-3">
                            <span className="col-6 text-white">
                              <span className="">鄉鎮：</span>
                              {value['鄉鎮']}
                            </span>
                            <span className="col-6 text-white">
                              <span className="">村里：</span>
                              {value['村里']}
                            </span>
                          </section>

                          <section className="col-md-10 row mt-5 justify-content-between">
                            <section className="col-md-6 row mt-3">
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="fw-bold">長度</strong>
                                <span className="fw-bold">公里(km)</span>
                              </span>
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="">步行長度</strong>
                                <span>{value['步行長度']}ｋｍ</span>
                              </span>
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="">車行長度</strong>
                                <span>{value['車行長度']}ｋｍ</span>
                              </span>
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="">中斷長度</strong>　　
                                <span>{value['中斷長度']}ｋｍ</span>
                              </span>
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="">總長度</strong>　　
                                <span>{value['總長度']}ｋｍ</span>
                              </span>
                            </section>
                            <section className="col-md-6 row mt-3">
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="fw-bold">鋪面</strong>
                                <span className="fw-bold">
                                  面積(km<sup>2</sup>)
                                </span>
                              </span>
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="">水泥</strong>
                                <span>
                                  {value['A.C鋪面']}ｋｍ<sup>2</sup>
                                </span>
                              </span>
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="">柏油</strong>
                                <span>
                                  {value['P.C鋪面']}ｋｍ<sup>2</sup>
                                </span>
                              </span>
                              <span className="col-12 d-flex justify-content-between">
                                <strong className="">碎石</strong>　　
                                <span>
                                  {value['碎石面或土石鋪面']}ｋｍ
                                  <sup>2</sup>
                                </span>
                              </span>
                            </section>
                          </section>
                          <Link
                            className="mt-5 btn btn-primary"
                            to={`map/mapDetail/${value['林道名稱']}`}
                          >
                            前往詳細頁面
                          </Link>
                        </section>
                      </section>
                    </section>
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
