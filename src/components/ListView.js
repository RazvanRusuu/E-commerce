import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
const ListView = (props) => {
  return (
    <section className="section__list-view ">
      <div className="container__list-view">
        {props.products.map((product) => {
          const { name, image, price, description, id } = product;
          return (
            <article
              key={id}
              className="article__list-view grid grid-2--cols-list "
            >
              <div className="img-box">
                <img src={image} alt={name} />
              </div>
              <div className="article__content">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  {name}
                </h3>
                <span className="price u-margin-bottom-small">
                  {formatPrice(price)}
                </span>
                <p className="paragraph u-margin-bottom-small">
                  {`${description.split(" ").slice(0, 25).join(" ")} ...`}
                </p>
                <Link to={`${id}`} className="link link-btn btn-small">
                  Details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default ListView;
