import { useState, useEffect } from 'react';
import BikeDetailDescription from './BikeDetailDescription';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import LabelCard from '../Label/LabelCard';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
function BikeDetailCard(props) {
  const [partsName, setPartsName] = useState([]);
  const [partsIMG, setPartsIMG] = useState([]);
  const [bike, setBike] = useState([]);
  const [productCheck, setProductCheck] = useState([]);
  useEffect(() => {
    const getPage = async () => {
      const response = await axios.get(API_URL + '/product/product_id', {
        params: {
          product_id: props.product_id,
        },
      });

      setBike(response.data.data);
    };
    getPage();
  }, [props.product_id]);

  useEffect(() => {
    const getParts = async () => {
      const response = await axios.get(API_URL + '/product/product_parts', {
        params: {
          product_id: props.product_id,
        },
      });
      setPartsName(response.data.product_parts_name.split(','));
      setPartsIMG(response.data.product_parts_image.split(','));
    };
    getParts();
  }, [props.product_id]);

  useEffect(() => {
    const getChecks = async () => {
      const response = await axios.get(API_URL + '/product/product_check', {
        params: {
          product_id: props.product_id,
        },
      });
      const result = response.data.product_check_name.split(',');
      setProductCheck(result);
    };
    getChecks();
    console.log('productCheck', productCheck);

    // console.log('adfasdffa', productCheck);
  }, [props.product_id]);

  const [bikeDetail] = useState([
    {
      Name: 'BIG NINE 15',
      ShortDesc:
        '腳踏車改變了我的命運。腳踏車，發生了會如何，不發生又會如何。如果此時我們選擇忽略腳踏車，那後果可想而知。',
      LongDesc:
        'ONE-TWENTY 600，FLOAT LINK浮動連桿避震平台，車體避震行程120mm，配置130mm避震前叉，Shimano優異的傳動系統，林道必備升降座桿，心之所向，無所不馭！ &break 在2019年推出的ONE-TWENTY車體概念後，市場大受歡迎，2020年的ONE-TWENTY 8000，甚至被Enduro Mountainbike雜誌評比為「BEST IN TEST」。到了2022，現代化的中行程林道車款，適用範圍依舊最廣大，在不失太多速度感、足夠輕量的設定之下，能盡情地享受越野騎乘的暢快體驗！美利達將其中再細分兩種屬性，一為更偏向XC越野繞圈賽的RC版本，後行程僅為100mm，搭配120mm前避震，頭管與立管角度稍大，更有利於爬坡；另一為最經典的120mm後避震行程，搭配130mm的避震前叉。組合出多款成車型號，任君挑選！',
      Price: 308000,
      Colors: ['#32CE13', '#E0CF05', '#D3484F', '#6F6669'],
    },
  ]);
  const DownDesc = bikeDetail[0].LongDesc.split('&break');
  if (bike.length === 0) return <></>;
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="">
          <img
            height="538"
            src={`${IMAGE_URL}/bikes/${bike[0].product_images}`}
            alt=""
          />
          <div height="175.71" className="d-flex justify-content-start">
            <img
              height="175.71"
              className="overflow-auto mx-4"
              src={`${IMAGE_URL}/bikes/${bike[0].product_images}`}
              alt=""
            />
            <img
              height="175.71"
              className="overflow-auto mx-4"
              src={`${IMAGE_URL}/bikes/${bike[0].product_images}`}
              alt=""
            />
          </div>
        </div>
        <div>
          <BikeDetailDescription className="mx-5 w-75" bike={bike} />
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

        <div className="row my-5 justify-content-between">
          {productCheck.map((v, i) => {
            return (
              <h3 className="my-4 col-5">
                <BsFillCheckCircleFill size={30} color="grey" /> {v}
              </h3>
            );
          })}
        </div>
      </div>
      <div className="ms-n5">
        <h1>技術</h1>
        <ul className="row">
          {partsName.map((v, i) => {
            return <LabelCard partsName={v} partsIMG={partsIMG[i]} key={i} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default BikeDetailCard;
