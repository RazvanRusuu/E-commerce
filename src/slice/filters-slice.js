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
    setGridView: (state, { payload }) => {
      state.grid_view = true;
    },
    setListView: (state, { payload }) => {
      state.grid_view = false;
    },
    updateSort: (state, { payload }) => {
      state.sort = payload;
    },
    updateFilters: (state, { payload }) => {},
    clearFilters: (state, { payload }) => {
      state.filters = initialState.filters;
    },
  },
});
