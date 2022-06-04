import React from "react";

const AmountButtons = (props) => {
  const { amount, onIncrease, onDecrease } = props;
  return (
    <div className="cart__amount-container">
      <button className="btn btn-decrease" onClick={onDecrease}>
        -
      </button>
      <span>{amount}</span>
      <button className="btn btn-increase" onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default AmountButtons;
