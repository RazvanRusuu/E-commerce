import React from "react";
import Product from "./Product";

import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";

const FeaturedProduct = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: products,
  } = useProductsContext();

  return (
    <section className="section__featured">
      <h2 className="heading-secondary heading-secondary--after u-margin-bottom-big u-center ">
        Featured Products
      </h2>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="container section__featured-container grid grid-autofit">
          {products.slice(0, 3).map((product) => {
            const { name, price, image, id } = product;
            return (
              <Product
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                className={"product__featured"}
              />
            );
          })}
        </div>
      )}
      <Link className="link link-btn link-product" to="/products">
        All products
      </Link>
    </section>
  );
};

export default FeaturedProduct;
