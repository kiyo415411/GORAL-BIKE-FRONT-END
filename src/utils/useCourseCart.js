import React, { useReducer, useContext, createContext, useEffect } from 'react';
import { reducer, init } from './cartReducer';
import useLocalStorage from './useLocalstorage';

const CourseCartContext = createContext(null);

// initialState = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
// }

// item = {
//   id: '',
//   name: '',
//   image:'',
//   price: 0,
//   quantity: 0,
//   checked: false,
// }

export const CourseCartProvider = ({
  children,
  initialCartItems = [],
  localStorageKey = 'productCart',
}) => {
  // if localStorage has value with this key then use it to initialCartItems
  let items = initialCartItems;
  // 用localStorage裡 key="productCart" 的值初始化state.items
  if (!items.length) {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(localStorageKey);
      // Parse stored json or if none return initialValue
      items = item ? JSON.parse(item) : [];
    } catch (error) {
      items = [];
      console.log(error);
    }
  }

  // init state
  // 如果 items 有值丟到 reducer 做初始化 state
  // reducer 的第三個參數為惰性初始化
  const [state, dispatch] = useReducer(reducer, items, init);

  // init setValue(localstoage)
  // 這是引用 useLocalStorage 寫好的方法
  const [storedValue, setValue] = useLocalStorage(localStorageKey, items);

  // when state.items change -> change localstorage value
  // 當 state.items 發生變化要改變 localstorage 裡 key="productCart" 的值
  useEffect(() => {
    if (JSON.stringify(state.items) !== storedValue) {
      setValue(state.items);
    }
  }, [state]);

  /**
   * 加入新項目(quantity:1, checked:false)，重覆項目 quantity: quantity + 1
   * @param  {Object} item
   * @returns {void}
   */
  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...item, checked: false },
    });
  };

  /**
   * 給定一id值，將這商品移出陣列中
   * @param {string} id
   * @returns {void}
   */
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        id,
      },
    });
  };

  /**
   * 給定一item物件，依照id尋找後更新其中的屬性值
   * @param {Object} item
   * @returns {void}
   */
  const updateItem = (item) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    });
  };

  /**
   * 清空整個購物車
   * @returns {void}}
   */
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  /**
   * 給定一id值，回傳是否存在於購物車中
   * @param {string} id
   * @returns {boolean}
   */
  const isInCart = (id) => {
    return state.items.some((item) => item.id === id);
  };

  /**
   * 給定一id值，有尋找到商品時，設定quantity: quantity + 1
   * @param {string} id
   * @returns {void}
   */
  const plusOne = (id) => {
    return dispatch({
      type: 'PLUS_ONE',
      payload: {
        id,
      },
    });
  };

  /**
   * 給定一id值，有尋找到商品時，設定checked: !checked
   * @param {string} id
   * @returns {void}
   */
  const checkedChange = (id) => {
    return dispatch({
      type: 'CHECKED_CHANGE',
      payload: {
        id,
      },
    });
  };

  /**
   * 改變購物車的所有商品的 checked 狀態
   * @returns {void}
   */
  const checkedAllChange = () => {
    dispatch({
      type: 'CHECKED_ALL_CHANGE',
    });
  };

  /**
   * 刪除購物車的所有 checked 的商品
   * @returns {void}
   */
  const checkedItemRemove = () => {
    dispatch({
      type: 'CHECKED_ITEM_REMOVE',
    });
  };

  /**
   * 購物車結帳
   * @returns {void}
   */
  const checkoutCart = () => {
    dispatch({
      type: 'CHECKOUT_CART',
    });
  };

  /**
   * 給定一id值，有尋找到商品時，設定quantity: quantity - 1，但 quantity 最小值為1
   * @param {string} id
   * @returns {void}
   */
  const minusOne = (id) => {
    return dispatch({
      type: 'MINUS_ONE',
      payload: {
        id,
      },
    });
  };

  return (
    <CourseCartContext.Provider
      value={{
        cart: state,
        items: state.items,
        checkedItems: state.checkedItems,
        checkedAll: state.checkedAll,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        isInCart,
        plusOne,
        minusOne,
        checkedChange,
        checkedAllChange,
        checkedItemRemove,
        checkoutCart,
      }}
    >
      {children}
    </CourseCartContext.Provider>
  );
};

export const useCourseCart = () => useContext(CourseCartContext);
