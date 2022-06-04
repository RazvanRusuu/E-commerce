import React from "react";
import { Link } from "react-router-dom";

const PageHero = (props) => {
  return (
    <section className="section-about">
      <header className="about__header container">
        <h1>
          <Link className="link link-main" to="/">
            Home
          </Link>
          <span> / </span>
          {props.product && (
            <>
              <Link className="link link-main" to="/products">
                Products
              </Link>
              <span> / </span>
            </>
          )}
          <span>{props.title}</span>
        </h1>
      </header>
    </section>
  );
};

export default PageHero;
