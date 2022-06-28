// 初始化購物車
export const initialState = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  cartTotal: 0,
  totalCheckItems: 0,
  checkedItems: [],
  checkedAll: false,
};

// const item = {
//   id: '',
//   quantity: 0,
//   name: '',
//   price: 0,
//   image:'',
// }

/**
 * addItem only, duplicate item is not allow
 * @param  {} state
 * @param  {} action
 */
const addItem = (state, action) => {
  // 讓增加的商品id跟購物車現有的id比對
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  // 增加的商品數量
  const payloadQuantity = action.payload.quantity;

  // if exist item, add one
  if (existingItemIndex > -1) {
    const item = state.items[existingItemIndex];
    const id = item.id;
    // 確認商品數量有沒有值
    const quantity = payloadQuantity
      ? item.quantity + payloadQuantity
      : item.quantity + 1;

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    };
    // 商品如果已經存在購物車改用update的方式改變商品數量
    return updateItem(state, action);
  }
  return [...state.items, action.payload];
};

const removeItem = (state, action) => {
  // 過濾出購物車內的id跟移除的商品id不一致的陣列
  return state.items.filter((item) => item.id !== action.payload.id);
};

/**
 * upateItem (ex. quantity, color, name, price...)
 * ex. action = {type="UPDATE_ITEM", payload: {id:1, quantity:1, color:'red'}
 * @param  {} state
 * @param  {} action
 */

const updateItem = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingItemIndex > -1) {
    const newState = [...state.items];
    newState[existingItemIndex] = {
      // 展開要改變的商品,傳入新的值進去
      ...newState[existingItemIndex],
      ...action.payload,
    };
    return newState;
  }

  return [...state.items];
};
// 改變物品勾選狀態
const checkItem = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  if (existingItemIndex > -1) {
    const item = state.items[existingItemIndex];
    const id = item.id;
    const checked = !item.checked;
    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, checked },
    };
    return updateItem(state, action);
  }

  return [...state.items];
};
// 改變所有物品勾選狀態
const checkAllItem = (state, action) => {
  // state.checkedAll = false
  const newStateItem = state.items.map((item) => {
    item.checked = !state.checkedAll;
    return item;
  });
  state.checkedAll = !state.checkedAll;
  return [...newStateItem];
};

// 刪除勾選物品
const checkItemRemove = (state, action) => {
  // state.checkedAll = false
  const newStateItem = state.items.filter((item) => item.checked === false);
  state.checkedAll = false;
  return [...newStateItem];
};

// 購物車結帳
const checkoutCart = (state, action) => {
  const newStateItem = state.items.filter((item) => item.checked === false);
  const isEmpty = newStateItem.length === 0;
  const newState = {
    ...state,
    isEmpty,
    items: newStateItem,
    checkedItems: [],
    cartTotal: 0,
    totalCheckItems: 0,
  };
  return newState;
};

const plusItemQuantityOnce = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingItemIndex > -1) {
    //const newState = [...state.items]
    const item = state.items[existingItemIndex];
    const id = item.id;
    const quantity = item.quantity + 1;

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    };

    return updateItem(state, action);
  }

  return [...state.items];
};

const minusItemQuantityOnce = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingItemIndex > -1) {
    const item = state.items[existingItemIndex];
    const id = item.id;
    const quantity = item.quantity > 1 ? item.quantity - 1 : 1;

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    };

    return updateItem(state, action);
  }

  return [...state.items];
};
// 製作 checked items array
const checkedItemsArray = (items) => {
  return items.filter((item) => {
    return item.checked === true;
  });
};

// 計算商品總價
const calculateItemTotals = (items) =>
  items.map((item) => ({
    ...item,
    itemTotal: item.price * item.quantity,
  }));
// 計算商品總數
const calculateTotalItems = (items) => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

// 計算勾選商品購物車總價
const calculateItemsTotal = (items) => {
  items = checkedItemsArray(items);
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};
// 計算勾選商品總數
const calculateTotalCheckedItems = (items) => {
  items = checkedItemsArray(items);
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

// 生成新的購物車狀態
const generateCartState = (state, items) => {
  const isEmpty = items.length === 0;
  const checkedAll = items.every((item) => {
    return item.checked === true;
  });
  console.log(checkedAll);

  return {
    ...initialState,
    ...state,
    // 將 itemTotal 塞入 items 陣列
    items: calculateItemTotals(items),
    totalItems: calculateTotalItems(items),
    checkedItems: checkedItemsArray(items),
    totalCheckItems: calculateTotalCheckedItems(items),
    cartTotal: calculateItemsTotal(items),
    checkedAll,
    isEmpty,
  };
};

// for useReducer init use
export const init = (items) => {
  return generateCartState({}, items);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return generateCartState(state, addItem(state, action));
    case 'REMOVE_ITEM':
      return generateCartState(state, removeItem(state, action));
    case 'UPDATE_ITEM':
      return generateCartState(state, updateItem(state, action));
    case 'PLUS_ONE':
      return generateCartState(state, plusItemQuantityOnce(state, action));
    case 'MINUS_ONE':
      return generateCartState(state, minusItemQuantityOnce(state, action));
    case 'CHECKED_CHANGE':
      return generateCartState(state, checkItem(state, action));
    case 'CHECKED_ALL_CHANGE':
      return generateCartState(state, checkAllItem(state, action));
    case 'CHECKED_ITEM_REMOVE':
      return generateCartState(state, checkItemRemove(state, action));
    case 'CLEAR_CART':
      return initialState;
    case 'CHECKOUT_CART':
      return checkoutCart(state, action);
    default:
      throw new Error('No action specified');
  }
};
