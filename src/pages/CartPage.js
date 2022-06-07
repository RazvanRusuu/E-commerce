import React from "react";
import CartContent from "../components/CartContent";
import { PageHero } from "../components";

const CartPage = () => {
  return (
    <>
      <PageHero title={"Cart"} />
      <section className="cart">
        <CartContent />
      </section>
    </>
  );
};

export default CartPage;
