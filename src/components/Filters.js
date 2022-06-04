import React from "react";
import { getUniqueValues } from "../utils/helpers";

const Filters = (props) => {
  const { products } = props;
  const categories = getUniqueValues(
    products.map((product) => product.category)
  );
  const companies = getUniqueValues(products.map((product) => product.company));

  return (
    <aside className="filters">
      <form className="form">
        <div className="form-control">
          <input type="text" placeholder="search" />
        </div>

        <div className="form-control">
          <h5 className="form-control--title">Category</h5>
          <ul className="form-list">
            {categories.map((item, index) => {
              return (
                <li key={index}>
                  <button className="btn form-btn">{item}</button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="form-control">
          <h5 className="form-control--title">Company</h5>
          <select name="comapny" id="company">
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <h5 className="form-control--title">Company</h5>
          <select name="comapny" id="company">
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
      </form>
    </aside>
  );
};

export default Filters;
