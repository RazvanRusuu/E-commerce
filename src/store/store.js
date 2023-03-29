import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cart-slice";
import productsReducer from "../slice/products-slice";
import { shopApi } from "../slice/api-slice";
import filtersReducer from "../slice/filters-slice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filters: filtersReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(shopApi.middleware),
});
setupListeners(store.dispatch);
