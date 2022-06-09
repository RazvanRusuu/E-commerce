import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const Hero = () => {
  return (
    <section className="hero section__hero">
      <div className="container hero__container grid grid-2--cols-1">
        <div className="hero__text-container">
          <h1 className="heading-primary heading-primary--hero u-margin-bottom-medium ">
            <span className="hero__heading">Furniture </span>
            For Your Dream
          </h1>
          <p className="paragraph u-margin-bottom-medium">
            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit sint iusto nisi eum nobis provident
          </p>
          <Link className="link link-btn" to="/products">
            Shop now
          </Link>
        </div>
        <div className="hero__image-container">
          <img className="hero__image hero__image-1" src={hero1} alt="" />
          <img className="hero__image hero__image-2" src={hero2} alt="" />
          <img className="hero__image hero__image-3" src={hero3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
