import React from "react";

const Footer = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormat = new Intl.DateTimeFormat("ro-RO", options).format(date);

  return (
    <div className="footer">
      <h4>&copy;Copyright-Rusu Razvan / {dateFormat}</h4>
    </div>
  );
};

export default Footer;
