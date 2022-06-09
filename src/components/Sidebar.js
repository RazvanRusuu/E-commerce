import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar__container">
        <div className="sidebar__header">
          <img src={logo} alt="logo" className="header__logo" />
          <button
            onClick={closeSidebar}
            type="button"
            className="btn btn-close"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar__links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  className="link sidebar__link"
                  onClick={closeSidebar}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              className="link sidebar__link"
              to="/checkout"
              onClick={closeSidebar}
            >
              checkout
            </Link>
          </li>
        </ul>
        <div className="sidebar__btns">
          <CartButtons />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
