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
import moment from 'moment';

function OrderDetail(props) {
  const location = useLocation();
  const orderId = location.pathname.split('/').pop();

  const [order, setOrder] = useState({
    order_id: 0,
    order_create_time: '',
    order_status: '',
    payment_method_name: '',
    payment_status: '',
    total: 0,
    recipient: '',
    phone: '',
    order_address: '',
    remark: '',
  });
  const [products, setProducts] = useState([]);
  const [course, setCourse] = useState([]);
  const [activities, setActivities] = useState([]);
  const [couponData, setCouponData] = useState({
    id: 0,
    coupon_name: '',
    coupon_content: '',
    coupon_expiry_date: '',
    coupon_discount: 0,
    valid: 0,
  });
  const calculateItemTotals = (items) =>
    items.map((item) => ({
      ...item,
      itemTotal: item.price * item.quantity,
    }));

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${API_URL}/order/detail/${orderId}`, {
        withCredentials: true,
      });
      const orderDetail = response.data.data;
      setOrder(orderDetail[0]);
      const productData = response.data.productData;
      setProducts(calculateItemTotals(productData));
      const courseData = response.data.courseData;
      setCourse(calculateItemTotals(courseData));
      const activityData = response.data.activityData;
      setActivities(calculateItemTotals(activityData));
      const newCouponData = response.data.couponData;
      // console.log(newCouponData);
      setCouponData(newCouponData);
    })();
  }, []);

  const {
    order_id,
    order_create_time,
    order_status,
    payment_method_name,
    payment_status,
    total,
    discount_price,
    discount_total,
    recipient,
    phone,
    order_address,
    remark,
  } = order;

  const orderTime = moment(order_create_time).format('YYYY-MM-DD HH:mm');

  const recipientInfo = {
    recipient: recipient,
    phone: phone,
    address: order_address,
    note: remark,
  };

  return (
    <>
      <section className="order-detail mb-3">
        <div className="text-white bg-primary py-1 ps-4 mb-3 fs-5 fw-light">
          訂單內容
        </div>
        <div className="d-flex px-3 justify-content-between">
          <div className="d-flex text-primary align-items-center gap-3">
            <h3>訂單編號: {order_id}</h3>
            <span>{orderTime}</span>
          </div>
          <div className="d-flex gap-3 align-items-start">
            <Badge bg="primary" className="fs-6 py-2 fw-normal">
              {payment_method_name}
            </Badge>
            <Badge bg="secondary" className="fs-6 py-2 fw-normal">
              {payment_status}
            </Badge>
            <Badge bg="subcontent" className="fs-6 py-2 fw-normal">
              {order_status}
            </Badge>
          </div>
        </div>
        {products !== [] ? (
          <OrderDetailList
            type="商品"
            products={products}
            setProducts={setProducts}
            category="bikes"
          />
        ) : null}
        {course.length !== 0 ? (
          <OrderDetailList
            type="課程"
            products={course}
            setProducts={setCourse}
            category="course"
          />
        ) : null}
        {activities.length !== 0 ? (
          <OrderDetailList
            type="活動"
            products={activities}
            setProducts={setActivities}
            category="activity"
          />
        ) : null}

        <CheckoutSummary
          allCartTotal={total}
          discountTotal={discount_total}
          discountPrice={discount_price}
          coupon={couponData}
          className="px-5 my-0"
        />
      </section>
      <OrderDetailInfo recipientInfo={recipientInfo} />
      <div className="text-end my-4">
        <Link to="/member/order" className="btn btn-primary fs-3 rounded-0">
          返回列表
        </Link>
      </div>
    </>
  );
}

export default OrderDetail;
