import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <h1>Oops! The page do not exist</h1>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Link to="/" className="backHome">
          Back Home
        </Link>
      </div>
    </div>
  );
}
