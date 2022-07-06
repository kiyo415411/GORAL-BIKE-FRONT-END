import React, { useEffect } from 'react';
import { useState } from 'react';
import CheckoutSummary from '../Checkout/CheckoutSummary';
import OrderDetailInfo from './OrderDetailInfo';
import OrderDetailList from './OrderDetailList';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLocation } from 'react-router';

function OrderDetail(props) {
  const location = useLocation();
  const orderId = location.pathname.split('/').pop();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'BIG_NINE_15',
      image: 'BIG_NINE_15.jpg',
      price: 22000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'BIG_NINE_200',
      image: 'BIG_NINE_200.jpg',
      price: 12000,
      quantity: 1,
    },
  ]);
  const [course, setCourse] = useState([
    {
      id: 1,
      name: '墾丁一日遊',
      image: 'Kenting001.jpg',
      price: 22000,
      quantity: 1,
    },
    {
      id: 2,
      name: '墾丁一日遊',
      image: 'Kenting001.jpg',
      price: 12000,
      quantity: 1,
    },
  ]);
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: '台東自由行',
      image: '臺東縣_海瑞鄉_錦屏林道.jpg',
      price: 22000,
      quantity: 1,
    },
    {
      id: 2,
      name: '台東自由行',
      image: '臺東縣_海瑞鄉_錦屏林道.jpg',
      price: 12000,
      quantity: 1,
    },
  ]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get(`${API_URL}/order/${orderId}`, {
  //       withCredentials: true,
  //     });
  //   })();
  // }, []);

  return (
    <>
      <section className="order-detail mb-3">
        <div className="text-white bg-primary py-1 ps-4 mb-3 fs-5 fw-light">
          訂單內容
        </div>
        <div className="d-flex px-3 justify-content-between">
          <div className="d-flex text-primary align-items-center gap-3">
            <h3>訂單編號: 26</h3>
            <span>2022-05-06 01:53</span>
          </div>
          <div className="d-flex gap-3 align-items-start">
            <Badge bg="primary" className="fs-6 py-2 fw-normal">
              線上付款
            </Badge>
            <Badge bg="secondary" className="fs-6 py-2 fw-normal">
              已付款
            </Badge>
            <Badge bg="subcontent" className="fs-6 py-2 fw-normal">
              處理中
            </Badge>
          </div>
        </div>
        <OrderDetailList
          type="商品"
          products={products}
          setProducts={setProducts}
        />
        <OrderDetailList
          type="課程"
          products={course}
          setProducts={setCourse}
        />
        <OrderDetailList
          type="活動"
          products={activities}
          setProducts={setActivities}
        />
        <CheckoutSummary allCartTotal={200000} className="px-5 my-0" />
      </section>
      <OrderDetailInfo />
      <div className="text-end my-4">
        <Link to="/member/order" className="btn btn-primary fs-3 rounded-0">
          返回列表
        </Link>
      </div>
    </>
  );
}

export default OrderDetail;
