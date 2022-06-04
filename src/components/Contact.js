import React from "react";

const Contact = () => {
  return (
    <section className="section__contact">
      <h2 className="heading-secondary u-margin-bottom-big u-center heading-secondary--after">
        Contact
      </h2>
      <div className="container grid grid-2--cols ">
        <div className="contact__text-container">
          <h3 className="heading-tertiary u-margin-bottom-medium">
            Join our newsletter and get 20% off
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            debitis atque ipsa explicabo, accusamus, quam officia eaque, ea enim
            iste veritatis?
          </p>
        </div>
        <form className="contact__form">
          <div className="controls">
            <label className="contact__label">Email</label>

            <input
              className="contact__input"
              type="email"
              required
              placeholder="enter Email"
            />
            <button className="btn link-btn btn-subscribe">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
