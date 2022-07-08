import React from 'react';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';

export default function CustomizeUpdate(props) {
  const { isLogin, userData } = props.Data;
  console.log('props-<', userData);
  console.log('props.state.items-<', props.state.items);

  const handleSubmit = async () => {
    const formData = {
      state: props.state.items,
      orderID: props.orderID,
    };
    try {
      const response = await axios.post(
        `${API_URL}/customize/UpdateCustomer`,
        formData
      );
      console.log(response.data);
      if (response.data.result.fieldCount === 0) {
        Swal.fire({
          title: '客製化資料更新成功',
          width: 600,
          padding: '3em',
          color: '#716add',
          backdrop: `rgba(0,0,123,0.4)`,
        });
        props.setReRender(!props.reRender);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        className="btn text-muted m-3"
        variant="black"
        onClick={handleSubmit}
      >
        {isLogin ? '更新客製化' : ''}
      </Button>
    </>
  );
}
