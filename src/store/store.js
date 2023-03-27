import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cart-slice";
import { shopApi } from "../slice/api-slice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
setupListeners(store.dispatch);
