import React from "react";
import Product from "./Product";
import { useFilterContext } from "../context/filter_context";

const GridView = (props) => {
  return (
    <section className="section__grid-view grid grid-autofill-products">
      <Product products={props.products} className={"grid__view"}></Product>
    </section>
  );
};

export default GridView;
