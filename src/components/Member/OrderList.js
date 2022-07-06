import React from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OrderList() {
  return (
    <>
      <Row className="bg-primary text-white text-center py-2 order-title">
        <Col sm={2}>訂單編號</Col>
        <Col sm={3}>成立時間</Col>
        <Col sm={1}>付款方式</Col>
        <Col sm={1}>付款狀態</Col>
        <Col sm={1}>訂單狀態</Col>
        <Col sm={3}>總價</Col>
        <Col sm={1}>查看</Col>
      </Row>
    </>
  );
}

export default OrderList;
