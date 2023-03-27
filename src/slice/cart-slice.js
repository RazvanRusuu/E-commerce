import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  const items = localStorage.getItem("item");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, amount, product } = payload;
    },
    removeitem: (state, { payload }) => {},
    toggleItemAmount: (state, { payload }) => {},
    clearCart: (state, { payload }) => {},
  },
});

export const { addToCart, removeItem, toggleItemAmount, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
