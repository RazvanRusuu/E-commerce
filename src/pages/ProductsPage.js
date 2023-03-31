import React, { useEffect } from "react";
import { PageHero } from "../components";
import { useGetAllProductsQuery } from "../slice/api-slice";
import { loadProducts } from "../slice/filters-slice";
import { useDispatch, useSelector } from "react-redux";
import { Filters, Sort, ProductList } from "../components";
import { Loading, Error } from "../components";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const {
    data = {},
    isFetching,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllProductsQuery();
  const { products: allProducts } = data;

  useEffect(() => {
    isSuccess && dispatch(loadProducts(allProducts));
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isSuccess && (
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
      )}
    </>
  );
};

export default ProductsPage;
