import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUser } from 'react-icons/fa';

// const recipientInfo = {
//   recipient: '',
//   phone: '',
//   email: '',
//   address: '',
//   note: '',
// }

function OrderDetailInfo(props) {
  const { recipientInfo } = props;

  return (
    <>
      <section className="ps-5 py-5 order-detail-info">
        <Row className="text-primary">
          <Col sm={6}>
            <div className="d-flex align-items-center mb-4">
              <FaUser size="2em" />
              <span className="ms-2 fs-5">收件人資訊</span>
            </div>
            <div className="ps-5">
              <p>收件人姓名</p>
              <p>電話</p>
              <p>EMAIL</p>
              <p>地址</p>
            </div>
          </Col>
          <Col sm={6}>
            <p className="fs-5 mb-4">備註欄</p>
            <p>備註</p>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default OrderDetailInfo;
