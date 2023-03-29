import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { updateSort, setListView, setGridView } from "../slice/filters-slice";
import { useDispatch, useSelector } from "react-redux";
const Sort = () => {
  const dispatch = useDispatch();
  const {
    grid_view,
    sort,
    filtered_products: products,
  } = useSelector((state) => state.filters);

  const handleChange = (e) => {
    dispatch(updateSort(e.target.value));
  };

  return (
    <section className="section__sort">
      <div className="grid grid-sort">
        <div className="btn-container">
          <button
            className={`btn btn__icon ${grid_view ? "active" : null}`}
            onClick={() => dispatch(setGridView())}
          >
            <BsFillGridFill />
          </button>
          <button
            className={`btn btn__icon ${!grid_view ? "active" : null}`}
            onClick={() => dispatch(setListView())}
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
            onChange={handleChange}
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
