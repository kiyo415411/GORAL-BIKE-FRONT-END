import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/bs';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Certification from './Certification';

function LoginModal(props) {
  const [show, setShow] = useState(false);
  const [activeModal, setActiveModal] = useState('登入');

  const handleChangeModal = (modal) => {
    setActiveModal(modal);
  };

  const handleClose = () => {
    setShow(false);
    setActiveModal('登入');
  };

  let modalDialogClass = '';

  switch (activeModal) {
    case '登入':
      modalDialogClass = 'modal-w position-relative';
      break;
    case '註冊':
      modalDialogClass = 'modal-signup-w position-relative';
      break;
    case '忘記密碼':
      modalDialogClass = 'modal-w position-relative';
      break;
    case '重寄認證信':
      modalDialogClass = 'modal-w position-relative';
      break;
    default:
      modalDialogClass = '';
      break;
  }

  const handleShow = () => setShow(true);
  return (
    <>
      <button className="text-muted btn px-0 py-0" onClick={handleShow}>
        <BsPersonCircle />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName={modalDialogClass}
      >
        <button
          className="btn-close position-absolute"
          onClick={handleClose}
        ></button>
        {activeModal === '登入' ? (
          <Login
            handleChangeModal={handleChangeModal}
            handleClose={handleClose}
          ></Login>
        ) : (
          <></>
        )}
        {activeModal === '註冊' ? (
          <SignUp
            handleChangeModal={handleChangeModal}
            handleClose={handleClose}
          ></SignUp>
        ) : (
          <></>
        )}
        {activeModal === '忘記密碼' ? (
          <ForgotPassword
            handleChangeModal={handleChangeModal}
          ></ForgotPassword>
        ) : (
          <></>
        )}
        {activeModal === '重寄認證信' ? (
          <Certification handleChangeModal={handleChangeModal}></Certification>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
}

export default LoginModal;
