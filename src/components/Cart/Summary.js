import React, { useState } from 'react';
import { BsSquareFill } from 'react-icons/bs';
import { toThousands } from '../../utils/common';
import axios from 'axios';
import { useEffect } from 'react';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';

function Summary(props) {
  const { userData } = useLogin();
  const { cart } = props;
  const { coupon, setCoupon, discountPrice, discountTotal, allCartTotal } =
    cart;
  const [data, setData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/coupon/unused`, {
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

  const handleCouponChange = (e) => {
    if (e.target.value > 0) {
      const newCoupon = data.find(
        (item) => item.coupons_id === parseInt(e.target.value)
      );
      setCoupon(newCoupon);
    } else {
      const newCoupon = {
        coupon_name: '不使用優惠卷',
        coupon_content: '不使用優惠卷',
        coupon_discount: 100,
        coupons_id: 0,
      };
      setCoupon(newCoupon);
    }
  };

  return (
    <>
      <section className="summary row text-end">
        <div className="col-md-12 d-flex justify-content-end mb-3">
          <div className="line"></div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-3 col">總計</div>
          <div className="col-md-3 col">$ {toThousands(allCartTotal)}</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-3 col">折扣金額</div>
          <div className="col-md-3 col">$ {toThousands(discountPrice)}</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end align-items-center mb-md-1 mb-2">
          <div className="col-md-3 col-3">優惠碼</div>
          <div className="col-md-3 col-9">
            <select
              className="form-select"
              value={coupon.coupons_id}
              onChange={handleCouponChange}
            >
              {data.length > 0 && <option value={0}>不使用優惠卷</option>}
              {data.length > 0 ? (
                data.map((item) => {
                  return (
                    <option value={item.coupons_id} key={item.coupons_id}>
                      {item.coupon_name}
                    </option>
                  );
                })
              ) : (
                <option value={0}>目前沒有可用的折價卷</option>
              )}
            </select>
            {coupon.coupons_id > 0 ? (
              <div>{coupon.coupon_content}</div>
            ) : (
              <div className="invisible">空白</div>
            )}
          </div>
        </div>
        <div className="row col-md-12 col-12 fs-4 fw-bold justify-content-end mb-5">
          <div className="col-md-3 col">
            <BsSquareFill className="me-2 text-highlight" />
            應付金額
          </div>
          <div className="col-md-3 col">$ {discountTotal}</div>
        </div>
      </section>
    </>
  );
}

export default Summary;
