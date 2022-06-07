import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h3 className="heading-tertiary u-center u-margin-top-medium">
        No product found...
      </h3>
    );
  }
  return (
    <>
      {grid_view && <GridView products={products} />}
      {!grid_view && <ListView products={products} />}
    </>
  );
};

export default ProductList;
