import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    openSidebar: (state, { payload }) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state, { payload }) => {
      state.isSidebarOpen = false;
    },
    addFeaturedProduct: (state, { payload }) => {
      // state.featured_products =
    },
  },
});

export const { openSidebar, closeSidebar, addFeaturedProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
