import React from "react";
import { FaSistrix } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product) => {
        const { id, name, price, image } = product;
        return (
          <article key={id} className={`product__article ${props.className}`}>
            <figure className="product__figure">
              <img className="product__img" src={image} alt={name} />
              <div className="product__hover">
                <Link className="link product__link" to={`/products/${id}`}>
                  <FaSistrix />
                </Link>
              </div>
            </figure>
            <div className="product__article--content u-center">
              <h4 className="product__name u-margin-bottom-small">{name}</h4>
              <span className="product__price">{formatPrice(price)}</span>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Product;
