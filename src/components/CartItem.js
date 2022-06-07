import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "../components/AmountButtons";
import { BsFillTrashFill } from "react-icons/bs";

const CartItem = (props) => {
  const { id, name, price, amount, max, image } = props;
  const { removeItem, toggleItemAmount } = useCartContext();

  const increaseHandler = () => {
    toggleItemAmount(id, "increase");
  };

  const decreaseHandler = () => {
    if (amount <= 1) {
      removeItem(id);
    } else {
      toggleItemAmount(id, "decrease");
    }
  };

  return (
    <article className="cart__item grid grid-5--cols ">
      <div className="cart__item-content ">
        <img className="cart__item-img" src={image} alt={name} />
        <div>
          <span className="cart__item-name">{name}</span>
          <span className="cart__item-price--mobile">{formatPrice(price)}</span>
        </div>
      </div>
      <span className="cart__item-price">{formatPrice(price)}</span>
      <div className="cart__item-quantity">
        <AmountButtons
          amount={amount}
          onIncrease={increaseHandler}
          onDecrease={decreaseHandler}
        />
      </div>
      <span className="cart__item-subtotal">{formatPrice(price * amount)}</span>
      <button
        type="button"
        className="btn cart-btn cart-btn--red"
        onClick={() => removeItem(id)}
      >
        <BsFillTrashFill />
      </button>
    </article>
  );
};

export default CartItem;
