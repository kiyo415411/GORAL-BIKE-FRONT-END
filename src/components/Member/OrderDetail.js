import React from 'react';
import { useState } from 'react';
import CheckoutSummary from '../Checkout/CheckoutSummary';
import OrderDetailInfo from './OrderDetailInfo';
import OrderDetailList from './OrderDetailList';
import { Link } from 'react-router-dom';

function OrderDetail(props) {
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

  return (
    <>
      <section className="order-detail mb-3">
        <div className="text-white bg-primary py-1 ps-4 mb-5 fs-5 fw-light">
          訂單內容
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
