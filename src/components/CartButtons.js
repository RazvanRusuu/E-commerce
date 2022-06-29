import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";

const CartButtons = (props) => {
  const { total_items: items } = useCartContext();
  const { closeSidebar } = useProductsContext();
  return (
    <div className="cart__btns">
      <Link to={"/cart"} className="cart__btn">
        <span className="cart-container" onClick={closeSidebar}>
          <FaShoppingCart className="btn__icon" />
          <span className="cart-value">{items}</span>
        </span>
      </Link>
      <button type="button" className="btn auth-btn" onClick={props.onClick}>
        <FaUserPlus className="btn__icon" />
      </button>
    </div>
  );
};

export default CartButtons;
