import React from "react";
import Product from "./Product";

const GridView = (props) => {
  const { products } = props;
  return (
    <section className="section__grid-view grid grid-autofill-products">
      {products.map((product) => {
        const { id, name, price, image } = product;
        return (
          <Product
            id={id}
            key={id}
            name={name}
            price={price}
            image={image}
            className="grid__view"
          />
        );
      })}
    </section>
  );
};

export default GridView;
