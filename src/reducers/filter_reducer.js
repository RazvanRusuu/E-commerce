import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { act } from "react-dom/test-utils";
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
} from "../context/actions_context";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      isLoading: false,
    };
  }

  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }
};

export default filter_reducer;
