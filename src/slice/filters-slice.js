import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    loadProducts: (state, { payload }) => {
      const products = payload;
      let maxPrice = Math.max(...products?.map((product) => product.price));

      state.all_products = products;
      state.filtered_products = products;
      state.filters.max_price = maxPrice;
      state.filters.price = maxPrice;
    },
    sortProducts: (state) => {
      const { sort } = state;
      switch (sort) {
        case "price-lowest":
          state.filtered_products.sort((a, b) => a.price - b.price);
          break;
        case "price-highest":
          state.filtered_products.sort((a, b) => b.price - a.price);
          break;
        case "name-a":
          state.filtered_products.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-z":
          state.filtered_products.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }
    },
    filterProducts: (state) => {
      const {
        filters: { price, text, category, company },
      } = state;
      let tempProducts = [...state.all_products];
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product?.name?.toLowerCase().startsWith(text)
        );
      }
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }
      if (price >= 0) {
        tempProducts = tempProducts.filter((product) => product.price <= price);
      }

      state.filtered_products = tempProducts;
    },
    setGridView: (state) => {
      state.grid_view = true;
    },
    setListView: (state) => {
      state.grid_view = false;
    },
    updateSort: (state, { payload }) => {
      state.sort = payload;
    },
    updateFilters: (state, { payload }) => {
      const { name, value } = payload;
      state.filters[name] = value;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  loadProducts,
  setGridView,
  setListView,
  updateSort,
  updateFilters,
  clearFilters,
  sortProducts,
  filterProducts,
} = filterSlice.actions;
export default filterSlice.reducer;
