import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cart-slice";
import productsReducer from "../slice/products-slice";
import { shopApi } from "../slice/api-slice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
setupListeners(store.dispatch);
