import { useContext, createContext, useState, useEffect } from 'react';
import { useProductCart } from './useProductCart';
import { useCourseCart } from './useCourseCart';
import { useActivityCart } from './useActivityCart';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [allCartTotalItems, setAllCartTotalItems] = useState(0);
  const [allCartTotal, setAllCartTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [coupon, setCoupon] = useState({
    coupon_name: '不使用優惠卷',
    coupon_content: '不使用優惠卷',
    coupon_discount: 100,
    coupons_id: 0,
  });
  const [discountPrice, setDiscountPrice] = useState(0);

  const productCart = useProductCart();
  const courseCart = useCourseCart();
  const activityCart = useActivityCart();

  const productTotalItems = productCart.cart.totalItems;
  const courseTotalItems = courseCart.cart.totalItems;
  const activityTotalItems = activityCart.cart.totalItems;
  const productCartTotal = productCart.cart.cartTotal;
  const courseCartTotal = courseCart.cart.cartTotal;
  const activityCartTotal = activityCart.cart.cartTotal;

  useEffect(() => {
    let newDiscountTotal = 0;

    if (Object.keys(coupon).length !== 0 && allCartTotal > 0) {
      let discountPercent = coupon.coupon_discount;
      newDiscountTotal = Math.floor(
        Number(allCartTotal) * (Number(discountPercent) / 100)
      );
      setDiscountTotal(newDiscountTotal);

      const newDiscountPrice = Number(allCartTotal) - newDiscountTotal;
      setDiscountPrice(newDiscountPrice);
    } else {
      setDiscountTotal(0);
      setDiscountPrice(0);
    }
  }, [coupon, allCartTotal]);

  useEffect(() => {
    setAllCartTotal(productCartTotal + courseCartTotal + activityCartTotal);
    setAllCartTotalItems(
      productTotalItems + courseTotalItems + activityTotalItems
    );
  }, [productCart.cart, courseCart.cart, activityCart.cart]);

  const initCart = () => {
    setAllCartTotalItems(0);
    setAllCartTotal(0);
    setCoupon({
      coupon_name: '不使用優惠卷',
      coupon_content: '不使用優惠卷',
      coupon_discount: 100,
      coupons_id: 0,
    });
    setDiscountPrice(0);
    setDiscountTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        allCartTotal,
        allCartTotalItems,
        discountPrice,
        discountTotal,
        coupon,
        setAllCartTotal,
        setAllCartTotalItems,
        setDiscountPrice,
        setDiscountTotal,
        setCoupon,
        initCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
