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
  const [downDesc, setDownDesc] = useState([]);
  useEffect(() => {
    const getPage = async () => {
      const response = await axios.get(API_URL + '/product/product_id', {
        params: {
          product_id: props.product_id,
        },
      });
      setBike(response.data.data);
      setBikeImages(response.data.data[0].product_images);
      setDownDesc(
        response.data.data[0].product_detail_description.split('&break')
      );
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

  const BikeIMG = bikeImages.split('.').shift();
  const BikeStart = bikeImages.split('.').pop();

  const [currentColor, setCurrentColor] = useState('');

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
          {downDesc.map((v, i) => {
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
              <BsFillCheckCircleFill size={30} color="grey" />{' '}
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
