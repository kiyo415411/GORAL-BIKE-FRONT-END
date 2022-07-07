import React, { useEffect } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FaEye } from 'react-icons/fa';
import { useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function OrderList(props) {
  const { userData } = props;
  const { userId } = userData;
  const [orderList, setOrderList] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    (async () => {
      const orderListRes = await axios.get(`${API_URL}/order/${userId}`, {
        withCredentials: true,
      });
      const newOrderList = orderListRes.data.data;
      // console.log('orderList', newOrderList);
      setOrderList(newOrderList);
    })();
  }, []);

  const goDetail = (orderId) => {
    history(`/member/order/detail/${orderId}`);
  };

  const Item = (props) => {
    const {
      order_id,
      order_create_time,
      payment_method_name,
      payment_status,
      order_status,
      total,
    } = props;
    const orderTime = moment(order_create_time).format('YYYY-MM-DD HH:mm');
    return (
      <Row className="align-items-center text-center py-4 order-list px-3">
        <Col sm={1}>{order_id}</Col>
        <Col sm={3}>{orderTime}</Col>
        <Col sm={5}>
          <Row className="justify-content-center gap-2">
            <Col sm={3}>
              <Badge bg="primary" className="fs-6 py-2 fw-normal">
                {payment_method_name}
              </Badge>
            </Col>
            <Col sm={3}>
              <Badge bg="secondary" className="fs-6 py-2 fw-normal">
                {payment_status}
              </Badge>
            </Col>
            <Col sm={3}>
              <Badge bg="label" className="fs-6 py-2 fw-normal">
                {order_status}
              </Badge>
            </Col>
          </Row>
        </Col>
        <Col sm={2}>{total}</Col>
        <Col sm={1}>
          <button
            className="btn btn-primary"
            onClick={() => {
              goDetail(order_id);
            }}
          >
            <FaEye></FaEye>
          </button>
        </Col>
      </Row>
    );
  };

  return (
    <>
      {orderList !== [] ? (
        <section>
          <Row className="bg-primary text-white text-center py-2 order-title px-3">
            <Col sm={1}>訂單編號</Col>
            <Col sm={3}>訂單成立時間</Col>
            <Col sm={5}>
              <Row className="justify-content-center gap-2">
                <Col sm={3}>付款方式</Col>
                <Col sm={3}>付款狀態</Col>
                <Col sm={3}>訂單狀態</Col>
              </Row>
            </Col>
            <Col sm={2}>總價</Col>
            <Col sm={1}>查看</Col>
          </Row>
          {orderList.map((v, i) => {
            return (
              <Item
                key={v.order_id}
                order_id={v.order_id}
                order_create_time={v.order_create_time}
                payment_method_name={v.payment_method_name}
                payment_status={v.payment_status}
                order_status={v.order_status}
                total={v.total}
              />
            );
          })}
        </section>
      ) : (
        <section className="text-center order-none text-subcontent">
          <p className="mb-3">
            尚未有訂單紀錄，前往
            <Link to="/products" className="text-highlight mx-1">
              商品頁
            </Link>
            逛逛！
          </p>
        </section>
      )}
    </>
  );
}

export default OrderList;
