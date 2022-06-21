import { useContext, createContext, useState } from 'react';

const CartContext = createContext(null);

// TODO: 計算購物車總價
// TODO: 計算購物車總數量

export const CartProvider = ({ children }) => {
  const [allCartTotalItems, setAllCartTotalItems] = useState(0);
  const [allCartTotal, setAllCartTotal] = useState(0);

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
