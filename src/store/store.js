import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cart-slice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
