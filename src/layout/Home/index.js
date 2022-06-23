import VIDEO from '../../videos/index-heros.webm';
import BIKE from '../../images/bike.svg';
import EVENT from '../../images/event.png';
import LOCATION from '../../images/Location.svg';
import ACTIVTY from '../../images/Acitvity.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import DataAPI from '../Map/DataAPI';

//Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};

export default function Index() {
  useEffect(() => {
    const getIndexData = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getDataValue = await DataAPI();
        const getNewsValue = await axios.get(`${API_URL}/news`);
        const getProductValue = await axios.get(`${API_URL}/product`);
        const getActivitytValue = await axios.get(`${API_URL}/activity`);
      } catch (e) {
        throw new Error(e);
      }
    };
    getIndexData();
  }, []);

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
          <section className="w-60 m-auto mt-5 p-5">
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="row mx-auto">
                <div className="col-4 my-auto">
                  <h1 className="display-6 fw-bold">BIG.NINE 200</h1>
                  <p className="fs-6">
                    鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano
                    Deore 1x10零組件搭配，Suntour避震前叉。
                  </p>
                  <a className="text-danger fw-bold fs-6" href="#/">
                    了解更多商品 &nbsp;&nbsp;&gt;
                  </a>
                </div>
                <div className="card border-0 col-8 my-auto">
                  <img src={BIKE} className="col-8 card-img-top" alt="..." />
                </div>
              </SwiperSlide>
              <SwiperSlide className="row mx-auto">
                <div className="col-4 my-auto">
                  <h1 className="display-6 fw-bold">BIG.NINE 200</h1>
                  <p className="fs-6">
                    鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano
                    Deore 1x10零組件搭配，Suntour避震前叉。
                  </p>
                  <a className="text-danger fw-bold fs-6" href="#/">
                    了解更多商品 &nbsp;&nbsp;&gt;
                  </a>
                </div>
                <div className="card border-0 col-8 my-auto">
                  <img src={BIKE} className="col-8 card-img-top" alt="..." />
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
          <section className="row p-5 overflow-hidden m-0">
            <article className="col-4 my-auto me-5" style={{ width: '25%' }}>
              <h2 className="fw-bold">登山車訓練營</h2>
              <p className="mt-3">
                帶著這些問題，我們一起來審視登山車訓練營。需要考慮周詳登山車訓練營的影響及因應對策。如果此時我們選擇忽略登山車訓練營，那後果可想而知。當前最急迫的事，想必就是釐清疑惑了。這樣看來，對於登山車訓練營，我們不能不去想，卻也不能走火入魔。
              </p>
              <button className="btn btn-danger fs-6 w-50 mt-1">
                更多訓練營
              </button>
            </article>
            <section className="col-6">
              <ul className="d-flex gap-5 list-unstyled">
                <li>
                  <img src={EVENT} alt="" />
                </li>
                <li>
                  <img src={EVENT} alt="" />
                </li>
                <li>
                  <img src={EVENT} alt="" />
                </li>
                <li>
                  <img src={EVENT} alt="" />
                </li>
              </ul>
            </section>
          </section>
          {/* LOCATION */}
          <section className="overflow-hidden">
            <img src={LOCATION} alt="" />
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
