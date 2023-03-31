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
      const sortFunctions = {
        "price-lowest": (a, b) => a.price - b.price,
        "price-highest": (a, b) => b.price - a.price,
        "name-a": (a, b) => a.name.localeCompare(b.name),
        "name-z": (a, b) => b.name.localeCompare(a.name),
      };

      if (sortFunctions.hasOwnProperty(sort)) {
        state.filtered_products.sort(sortFunctions[sort]);
      }
    },
    filterProducts: (state) => {
      const { price, text, category, company } = state.filters;

      state.filtered_products = state.all_products.filter((product) => {
        return (
          product.name.toLowerCase().startsWith(text) &&
          (category === "all" || product.category === category) &&
          (company === "all" || product.company === company) &&
          product.price <= price
        );
      });
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
      const maxPrice = state.filters.max_price;
      state.filters = {
        ...initialState.filters,
        price: maxPrice,
        max_price: maxPrice,
      };
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
