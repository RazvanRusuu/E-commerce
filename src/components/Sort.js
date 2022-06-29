import React, { useState } from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  const [sortBy, setSortBy] = useState("price-lowest");

  return (
    <section className="section__sort">
      <div className="grid grid-sort">
        <div className="btn-container">
          <button
            className={`btn btn__icon ${grid_view ? "active" : null}`}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            className={`btn btn__icon ${!grid_view ? "active" : null}`}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
        <p className="paragraph">{products.length} products found</p>
        <div className="horizontal-line"></div>
        <form action="" className="sort-form">
          <label htmlFor="sort">Sort By</label>
          <select
            name="sort"
            value={sort}
            id="sort"
            className="sort-input"
            onChange={updateSort}
          >
            <option value="price-lowest">Price (lowest)</option>
            <option value="price-highest">Price (highest)</option>
            <option value="name-a">Name (A-Z)</option>
            <option value="name-z">Name (Z-A)</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;
