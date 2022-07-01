import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "./actions_context";

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
const CartContext = React.createContext({
  cart: [],
  total_items: 0,
  total_amount: 0,
  addToCart: () => {},
  removeItem: () => {},
  toggleItemAmount: () => {},
  clearCart: () => {},
});

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  };

  const toggleItemAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("item", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {});

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        toggleItemAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
