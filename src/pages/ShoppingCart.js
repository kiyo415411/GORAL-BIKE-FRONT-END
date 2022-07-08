import React from 'react';
import CartList from '../components/Cart/CartList';
import Summary from '../components/Cart/Summary';
import { useProductCart } from '../utils/useProductCart';
import { useCourseCart } from '../utils/useCourseCart';
import { useActivityCart } from '../utils/useActivityCart';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../utils/useLogin';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/useCart';

// 傳到結帳頁面，結帳頁面只讀取 checkedItems 做呈現
// 結完帳清除 checkItems 陣列，以及 localStorage 裡 checked = true 的產品

function ShoppingCart() {
  const cart = useCart();
  const { allCartTotal } = cart;
  const navigate = useNavigate();
  const productCart = useProductCart();
  const courseCart = useCourseCart();
  const activityCart = useActivityCart();
  const login = useLogin();
  const { isLogin } = login;

  if (
    productCart.cart.isEmpty &&
    courseCart.cart.isEmpty &&
    activityCart.cart.isEmpty
  ) {
    return (
      <>
        <div className="d-flex justify-content-center flex-column align-items-center link-content min-height-100 pt-5">
          <div className="d-flex justify-content-center mt-5">
            <p>你的購物車還是空的，前往</p>
            <Link to="/product" className="link-highlight mx-1">
              商品頁面
            </Link>
            <p>逛逛！</p>
          </div>
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a60759ad1dabe909c46a817ecbf71878.png"
            alt=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mt-nav">
        {/* 商品購物車 */}
        {productCart.cart.isEmpty ? (
          <div></div>
        ) : (
          <CartList productCart={productCart} type="商品" />
        )}
        {/* 課程購物車 */}
        {courseCart.cart.isEmpty ? (
          <div></div>
        ) : (
          <CartList productCart={courseCart} type="課程" />
        )}
        {/* 活動購物車 */}
        {activityCart.cart.isEmpty ? (
          <div></div>
        ) : (
          <CartList productCart={activityCart} type="活動" />
        )}
        {/* 三個購物車加總 */}
        <Summary cart={cart} />
        {/* 按鈕群組 */}
        <section className="d-flex justify-content-end text-end mb-5">
          <div>
            <button
              className="btn btn-outline-primary rounded-0 fs-4 fw-bold me-md-5 me-3"
              onClick={() => {
                navigate('/product');
              }}
            >
              返回購物
            </button>
            <button
              className="btn btn-primary rounded-0 fs-4 fw-bold"
              onClick={() => {
                if (isLogin) {
                  if (allCartTotal === 0) {
                    Swal.fire({
                      icon: 'warning',
                      html: '請勾選結帳商品',
                      confirmButtonText: 'OK',
                      focusConfirm: false,
                      // buttonsStyling: false,
                    });
                  } else {
                    navigate('/shopping-cart/checkout');
                  }
                } else {
                  Swal.fire({
                    icon: 'warning',
                    html: '請先登入帳號',
                    confirmButtonText: 'OK',
                    focusConfirm: false,
                    // buttonsStyling: false,
                  });
                }
              }}
            >
              商品結帳
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShoppingCart;
