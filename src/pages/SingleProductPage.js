import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  PageHero,
} from "../components";

const SingleProductPage = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  const { name, price, description, stock, id: sku, company, images } = product;

  const pageContent = (
    <>
      <PageHero title={name} product />
      <section className="section__product">
        <div className="container ">
          <Link to="/products" className="link link-btn">
            Back to Products
          </Link>
          <div className="product__container grid grid-2--cols u-margin-top-medium">
            <ProductImages images={images} />
            <div className="product__container-content">
              <h2 className="heading-secondary product-name">{name}</h2>
              <span className="product-price ">{formatPrice(price)}</span>
              <p className="paragraph u-margin-bottom-medium">{description}</p>
              <div className="product__info">
                <span>Available: </span>
                <span>{stock > 0 ? "In stock" : "out of stock"}</span>
                <span>SKU: </span>
                <span>{sku}</span>
                <span>Brand: </span>
                <span>{company}</span>
              </div>
              {stock > 0 && <AddToCart product={product} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && pageContent}
    </>
  );
};

export default SingleProductPage;
sasa