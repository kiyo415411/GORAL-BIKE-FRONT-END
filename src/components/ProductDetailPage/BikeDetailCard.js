import { useState, useEffect } from 'react';
import BikeDetailDescription from './BikeDetailDescription';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import LabelCard from '../Label/LabelCard';
import axios from 'axios';
import { useLogin } from '../../utils/useLogin';

import { API_URL, IMAGE_URL } from '../../utils/config';
import useWindowSize from '../hooks/useWindowSize';
function BikeDetailCard(props) {
  const WindowSize = useWindowSize()
  const [partsName, setPartsName] = useState([]);
  const [partsIMG, setPartsIMG] = useState([]);
  const [bike, setBike] = useState([]);
  const { userData } = useLogin();
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏有變動的時候會重新渲染
  const [productCheck, setProductCheck] = useState([]);
  const [BikeIMG, setBikeIMG] = useState('');
  const [BikeStart, setBikeStart] = useState([]);
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
      setBikeIMG(
        response.data.data[0].product_images.split('.')[0].split('$').shift()
      );
      setBikeStart(
        response.data.data[0].product_images.split('.')[
          response.data.data[0].product_images.split('.').length - 1
        ]
      );

      console.log(response.data.data[0].product_images.indexOf('$') !== -1);
      const color =
        response.data.data[0].product_images.indexOf('$') !== -1
          ? response.data.data[0].product_images.split('.')[0].split('$').pop()
          : '';

      setCurrentColor(color);

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
  }, [props.product_id]);
  if (bike.length === 0) return <></>;
  return (
    <div className="container mt-5 mx-0 px-0 mx-md-auto">
      <div className="d-md-flex pt-5 mt-5 mt-md-0 justify-content-md-between">
        <div className="col-md-8" style={{ maxWidth: '528px' }}>
          <img
            className="img-fluid"
            src={`${IMAGE_URL}/bikes/${BikeIMG}${
              currentColor ? '$' : ''
            }${currentColor}.${BikeStart}`}
            alt=""
          />
        </div>

        <BikeDetailDescription
          className={`mx-sm-5 mx-auto ${
            WindowSize < 768 ? 'w-90' : ''
          } col-md-5`}
          bike={bike}
          favoriteActive={favoriteActive}
          setFavoriteActive={setFavoriteActive}
          product_id={props.product_id}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          img={`${BikeIMG}${
            currentColor ? '$' : ''
          }${currentColor}.${BikeStart}`}
        />
      </div>
      <div className="mt-5">
        <div>
          {downDesc.map((v, i) => {
            return (
              <p key={i} className="text-content px-3">
                {v}
              </p>
            );
          })}
        </div>

        <div className="row my-3 justify-content-between px-2 m-0">
          {productCheck.map((v, i) => {
            return (
              <h3 className="my-4 col-12 col-md-5 p-0" key={i}>
                <BsFillCheckCircleFill size={30} color="grey" /> {v}
              </h3>
            );
          })}
        </div>
      </div>
      <div className="ms-md-n5">
        <h1 className="ms-5">技術</h1>
        <ul className="row gap-2 gap-md-5 mx-auto">
          {partsName.map((v, i) => {
            return <LabelCard partsName={v} partsIMG={partsIMG[i]} key={i} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default BikeDetailCard;
