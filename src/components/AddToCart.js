import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = (props) => {
  const { addToCart } = useCartContext();

  const {
    product: { id, stock, colors },
  } = props;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseHandler = () => {
    if (amount >= 8 || amount >= stock) return;
    setAmount((prevState) => {
      return prevState + 1;
    });
  };

  const decreaseHandler = () => {
    if (amount <= 1) return;
    setAmount((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className="product__cart">
      <div className="product__cart-colors">
        <span>Colors: </span>
        {colors.map((color, index) => {
          return (
            <button
              className="btn btn__cart-color"
              style={{ background: color }}
              key={index}
              onClick={() => setMainColor(colors[index])}
            >
              {color === mainColor && <FaCheck className="check-icon" />}
            </button>
          );
        })}
      </div>

      <AmountButtons
        amount={amount}
        onIncrease={increaseHandler}
        onDecrease={decreaseHandler}
      />
      <Link
        to="/cart"
        className="link link-btn btn-small "
        onClick={() => addToCart(id, amount, props.product)}
      >
        Add To Cart
      </Link>
    </div>
  );
};

export default AddToCart;
