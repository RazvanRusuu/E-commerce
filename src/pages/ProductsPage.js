import React from "react";
import { PageHero } from "../components";

import { useFilterContext } from "../context/filter_context";
import { Filters, Sort, ProductList } from "../components";

const ProductsPage = () => {
  const { isLoading } = useFilterContext();

  return (
    <>
      <PageHero title="Products" />
      <section className="section__products">
        <div className="container grid grid-2--cols-products">
          <Filters />
          <div className="products-container">
            <Sort />
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
