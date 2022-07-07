import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Coupon({ userData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/favorite/coupon`, {
          params: {
            userId: userData.userId,
          },
        });
        setData(response.data.data);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [userData.userId]);

  const courseItems = [];

  data.map((v, i) => {
    const newDate = data[i].coupon_expiry_date.split('T').shift();
    courseItems.push(
      <Row className="text-primary text-center py-4 mx-0 coupon-list" key={i}>
        <Col sm={3} className="fw-bold">
          {data[i].coupon_name}
        </Col>
        <Col sm={4} className="text-start">
          {data[i].coupon_content}
        </Col>
        <Col sm={3}>{newDate}</Col>
        <Col sm={1}>
          {data[i].coupons_is === 0 ? (
            <div className="badge bg-line fs-6 fw-light">已使用</div>
          ) : (
            <div className="badge bg-secondary fs-6 fw-light">未使用</div>
          )}
        </Col>
      </Row>
    );
    return 0;
  });

  return (
    <div className="mb-5">
      <Row className="bg-primary text-white text-center py-2 order-title px-5">
        <Col sm={3}>優惠券名稱</Col>
        <Col sm={4}>使用說明</Col>
        <Col sm={3}>使用期限</Col>
        <Col sm={1}>使用狀態</Col>
      </Row>
      <Row className="bg-white text-primary text-center py-2 order-title px-5">
        {courseItems}
      </Row>
    </div>
  );
}
