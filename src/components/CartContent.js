import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";

const CartContent = () => {
  const { cart, clearCart, total_amount } = useCartContext();

  let contentEmptyCart = (
    <div className="u-center">
      <h2 className="heading-secondary u-margin-bottom-medium">
        Your card is empty
      </h2>
      <Link to={"/products"} className="link link-btn">
        Go to products
      </Link>
    </div>
  );
  let contentCart = (
    <>
      <h2 className="heading-tertiary u-center heading-tertiary-mobile">
        Your Items
      </h2>
      <div className="container cart__container">
        <div className="cart__labels grid grid-5--cols">
          <span className="cart__label">Item</span>
          <span className="cart__label">Price</span>
          <span className="cart__label">Quantity</span>
          <span className="cart__label cart__label-span">Subtotal</span>
        </div>
        {cart.map((item) => {
          const { id, amount, image, price, name, max } = item;
          return (
            <CartItem
              key={id}
              id={id}
              max={max}
              amount={amount}
              image={image}
              price={price}
              name={name}
            ></CartItem>
          );
        })}
        <div className="cart__summary u-margin-top-medium">
          <h3 className="heading-tertiary u-center">
            Total: {formatPrice(total_amount)}{" "}
          </h3>
        </div>
        <div className="cart__container-buttons">
          <Link to={"/products"} className="link link-btn">
            Continue Shoping
          </Link>
          <button className="btn btn-main" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {cart.length < 1 && contentEmptyCart}
      {!cart.length < 1 && contentCart}
    </>
  );
};

export default CartContent;
