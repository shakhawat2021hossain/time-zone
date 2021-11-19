import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="container my-5 subscribe text-center">
      <input type="email" placeholder="Enter email" />
      <button className="add-btn">SUBSCRIBE</button>
    </div>
  );
};

export default Subscribe;
