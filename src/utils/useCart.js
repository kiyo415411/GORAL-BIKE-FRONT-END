import { useContext, createContext, useState, useEffect } from 'react';
import { useProductCart } from './useProductCart';
import { useCourseCart } from './useCourseCart';
import { useActivityCart } from './useActivityCart';

const CartContext = createContext(null);

// TODO: 計算購物車總價
// TODO: 計算購物車總數量

export const CartProvider = ({ children }) => {
  const [allCartTotalItems, setAllCartTotalItems] = useState(0);
  const [allCartTotal, setAllCartTotal] = useState(0);

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
    setAllCartTotal(productCartTotal + courseCartTotal + activityCartTotal);
    setAllCartTotalItems(
      productTotalItems + courseTotalItems + activityTotalItems
    );
  }, [productCart.cart, courseCart.cart, activityCart.cart]);

  return (
    <CartContext.Provider
      value={{
        allCartTotalItems,
        allCartTotal,
        setAllCartTotal,
        setAllCartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
