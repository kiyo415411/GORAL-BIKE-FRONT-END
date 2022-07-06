import { useState, useEffect } from 'react';
import BikeDetailDescription from './BikeDetailDescription';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import LabelCard from '../Label/LabelCard';
import axios from 'axios';

import { useLogin } from '../../utils/useLogin';

import { API_URL, IMAGE_URL } from '../../utils/config';
function BikeDetailCard(props) {
  const [partsName, setPartsName] = useState([]);
  const [partsIMG, setPartsIMG] = useState([]);
  const [bike, setBike] = useState([]);
  const { userData } = useLogin();
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏有變動的時候會重新渲染
  const [productCheck, setProductCheck] = useState([]);
  const [BikeIMG, setBikeIMG] = useState('');
  const [BikeStart, setBikeStart] = useState([]);
  const [bikeImage, setBikeImage] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [downDesc, setDownDesc] = useState([]);
  useEffect(() => {
    const getPage = async () => {
      const response = await axios.get(API_URL + '/product/product_id', {
        params: {
          product_id: props.product_id,
          userId: userData.userId,
        },
      });

      setBike(response.data.data);
      setBikeImage(response.data.data[0].product_images);
      setBikeIMG(response.data.data[0].product_images.split('.')[0]);
      setBikeStart(
        response.data.data[0].product_images.split('.')[
          response.data.data[0].product_images.split('.').length - 1
        ]
      );
      console.log(response.data.data[0].product_images.split('.'));
      console.log('Bike STart', BikeStart);
      console.log('setBIkeIMG', BikeIMG);
      setDownDesc(
        response.data.data[0].product_detail_description.split('&break')
      );
    };
    getPage();
  }, [props.product_id, favoriteActive, userData.userId]);

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
            favoriteActive={favoriteActive}
            setFavoriteActive={setFavoriteActive}
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

        <div className="row my-5 justify-content-between">
          {productCheck.map((v, i) => {
            return (
              <h3 className="my-4 col-5" key={i}>
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
