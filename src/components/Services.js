import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="section__services"
    >
      <h2 className="heading-secondary u-margin-bottom-big u-center heading-secondary--after">
        Services
      </h2>
      <div className="container section__featured-container grid grid-autofit">
        {services.map((service) => {
          const { id, title, icon, text } = service;
          return (
            <article key={id} className="services__article">
              <span className="services__icon">{icon}</span>
              <div className="services__content">
                <h3 className="heading-tertiary u-center u-margin-bottom-small">
                  {title}
                </h3>
                <p className="paragraph">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
