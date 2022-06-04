import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Loading from "./Loading";

const ProductList = () => {
  const {
    filtered_products: products,
    grid_view,
    list_view,
    isLoading,
  } = useFilterContext();

  if (products.length === 0) {
    return (
      <>
        {isLoading && (
          <h3 className="heading-tertiary u-center">No product found...</h3>
        )}
      </>
    );
  }
  return (
    <>
      {isLoading && <Loading />}
      {grid_view && <GridView products={products} />}
      {list_view && <ListView products={products} />}
    </>
  );
};

export default ProductList;
