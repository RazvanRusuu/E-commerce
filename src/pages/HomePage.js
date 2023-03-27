import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cart-slice";
import { FeaturedProduct, Hero, Services, Contact } from "../components";
import { useGetAllProductsQuery } from "../slice/api-slice";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
