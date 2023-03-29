import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, updateFilters } from "../slice/filters-slice";
import { getUniqueValues } from "../utils/helpers";
import { formatPrice } from "../utils/helpers";

const Filters = (props) => {
  const dispatch = useDispatch();
  const {
    filters: { text, category, company, price, max_price, min_price },
    all_products,
  } = useSelector((state) => state.filters);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "price") {
      value = +value;
    }

    dispatch(updateFilters({ name, value }));
  };

  const categories = getUniqueValues(
    all_products.map((product) => product.category)
  );
  const companies = getUniqueValues(
    all_products.map((product) => product.company)
  );

  return (
    <aside className="filters">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search"
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <h5 className="form-control--title">Category</h5>
          <ul className="form-list">
            {categories.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    category === item.toLowerCase() ? "active" : null
                  }`}
                >
                  <button
                    className={`btn form-btn ${
                      category === item.toLowerCase() ? "active" : null
                    }`}
                    name="category"
                    type="button"
                    onClick={handleChange}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="form-control">
          <h5 className="form-control--title">Company</h5>
          <select
            name="company"
            id="company"
            value={company}
            onChange={handleChange}
          >
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <h5 className="form-control--title">Price</h5>
          <label htmlFor="price">{formatPrice(price)}</label>
          <input
            type="range"
            id="price"
            name="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <button
            className="btn btn-main btn-main--small"
            onClick={() => dispatch(clearFilters())}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </aside>
  );
};

export default Filters;
