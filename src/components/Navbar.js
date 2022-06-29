import React from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import Modal from "./Modal";

import { useUserContext } from "../context/user_context";
import { useProductsContext } from "../context/products_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { openModal, isModalOpen } = useUserContext();

  return (
    <>
      {isModalOpen && <Modal></Modal>}
      <header className="header">
        <div className="container header__container">
          <div>
            <Link to="/">
              <img src={logo} className="header__logo" alt="furniture land" />
            </Link>
          </div>
          <button
            type="button"
            className="btn btn-toggle"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
          <ul className="header__links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link className="link header__link" to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
            <li>
              {/* <Link className="link header__link" to="/checkout">
              checkout
            </Link> */}
            </li>
          </ul>
          <div className="nav__btns">
            <CartButtons onClick={openModal} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
