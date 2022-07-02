import { useState, useEffect } from 'react';
import BikeDetailDescription from './BikeDetailDescription';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import LabelCard from '../Label/LabelCard';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { IMAGE_URL } from '../../utils/config';

function BikeDetailCard(props) {
  const [bike, setBike] = useState([]);
  const [bikeImages, setBikeImages] = useState('');
  useEffect(() => {
    const getPage = async () => {
      const response = await axios.get(API_URL + '/product/product_id', {
        params: {
          product_id: props.product_id,
        },
      });
      setBike(response.data.data);
      setBikeImages(response.data.data[0].product_images);
    };
    getPage();
  }, [props.product_id]);

  const [bikeLabel] = useState([
    'RACELITE 61 ALUMINIUM',
    'X-TAPER HEADTUBE',
    'SMOOTH WELDING',
    'INTERNAL CABLE ROUTING',
    'DOWN TUBE EXIT',
    'K-MOUNT',
    'C-MOUNT',
    'TECHNO FORMING SYSTEM',
    'F-MOUNT',
  ]);
  const [bikeDetail] = useState([
    {
      Name: 'BIG NINE 15',
      ShortDesc:
        '腳踏車改變了我的命運。腳踏車，發生了會如何，不發生又會如何。如果此時我們選擇忽略腳踏車，那後果可想而知。',
      LongDesc:
        'ONE-TWENTY 600，FLOAT LINK浮動連桿避震平台，車體避震行程120mm，配置130mm避震前叉，Shimano優異的傳動系統，林道必備升降座桿，心之所向，無所不馭！ &break 在2019年推出的ONE-TWENTY車體概念後，市場大受歡迎，2020年的ONE-TWENTY 8000，甚至被Enduro Mountainbike雜誌評比為「BEST IN TEST」。到了2022，現代化的中行程林道車款，適用範圍依舊最廣大，在不失太多速度感、足夠輕量的設定之下，能盡情地享受越野騎乘的暢快體驗！美利達將其中再細分兩種屬性，一為更偏向XC越野繞圈賽的RC版本，後行程僅為100mm，搭配120mm前避震，頭管與立管角度稍大，更有利於爬坡；另一為最經典的120mm後避震行程，搭配130mm的避震前叉。組合出多款成車型號，任君挑選！',
      Price: 308000,
      Colors: ['#32CE13', '#E0CF05', '#D3484F', '#6F6669'],
      Parts: [''],
    },
  ]);

  const BikeIMG = bikeImages.split('.').shift();
  const BikeStart = bikeImages.split('.').pop();

  const [currentColor, setCurrentColor] = useState('');
  const DownDesc = bikeDetail[0].LongDesc.split('&break');
  if (bike.length === 0) return <></>;
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="">
          <img
            height="538"
            src={`${IMAGE_URL}/bikes/${BikeIMG}${
              currentColor ? '$' : ''
            }${currentColor}.${BikeStart}`}
            alt=""
          />
        </div>
        <div>
          <BikeDetailDescription
            className="mx-5 w-75"
            bike={bike}
            product_id={props.product_id}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div>
      </div>
      <div className="mt-5">
        <div>
          {DownDesc.map((v, i) => {
            return (
              <p key={i} className="text-content">
                {v}
              </p>
            );
          })}
        </div>

        <div className="d-flex justify-content-start my-5">
          <div className="me-5">
            <h3 className="my-5">
              <BsFillCheckCircleFill size={30} color="grey" />
              採用三種不同管壁厚薄度打造的全鋁合金車體
            </h3>
            <h3 className="my-5">
              <BsFillCheckCircleFill size={30} color="grey" /> 可鎖定前、後避震
            </h3>
            <h3 className="my-5">
              <BsFillCheckCircleFill size={30} color="grey" /> 配備升降座桿
            </h3>
          </div>
          <div className="ms-5">
            <h3 className="my-5">
              <BsFillCheckCircleFill size={30} color="grey" /> FLOAT
              LINK浮動連桿避震平台
            </h3>
            <h3 className="my-5">
              <BsFillCheckCircleFill size={30} color="grey" /> Shimano 1X
              傳動系統
            </h3>
            <h3 className="my-5">
              <BsFillCheckCircleFill size={30} color="grey" /> 29er輪組
            </h3>
          </div>
        </div>
      </div>
      <div className="ms-n5">
        <h1>技術</h1>
        <div className="row">
          {bikeLabel.map((v, i) => {
            return <LabelCard name={v} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BikeDetailCard;
