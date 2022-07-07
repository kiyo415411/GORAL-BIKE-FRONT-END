import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUser } from 'react-icons/fa';
import { useLogin } from '../../utils/useLogin';

// const recipientInfo = {
//   recipient: '',
//   phone: '',
//   email: '',
//   address: '',
//   note: '',
// }

function OrderDetailInfo(props) {
  const { recipientInfo } = props;
  const { recipient, phone, address, note } = recipientInfo;
  const { userData } = useLogin();

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
              <p>{recipient}</p>
              <p>{phone}</p>
              <p>{userData.email}</p>
              <p>{address}</p>
            </div>
          </Col>
          <Col sm={6}>
            <p className="fs-5 mb-4">備註欄</p>
            <p>{note}</p>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default OrderDetailInfo;
