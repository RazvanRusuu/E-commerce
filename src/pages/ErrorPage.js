import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="section error__section">
      <div>
        <h1 className="heading-primary--error">404</h1>
        <h3 className="heading-tertiary u-margin-bottom-medium">
          The page cannot be found
        </h3>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
