import React from "react";
import loading from "../images/loading.gif";

export default function Loading() {
  return (
    <div className="container ">
      <h1 className="d-flex justify-content-center mt-5">Loading...</h1>
      <div className="d-flex justify-content-center">
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
}
