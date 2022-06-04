import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { Loading } from "../components";
import {
  LOAD_PRODUCTS,
  LOADING,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERs,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "./actions_context";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  list_view: false,
  isLoading: true,
};

const FilterContext = React.createContext({
  filtered_products: [],
  all_products: [],
  grid_view: true,
  list_view: false,
  isLoading: false,
});

export const FilterProvider = (props) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(11);
    dispatch({ type: LOADING, payload: products });
  }, []);

  useEffect(() => {
    console.log(12);
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
