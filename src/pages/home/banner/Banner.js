import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="hero container mb-4">
      <div className="text-content mt-5">
        <h5>
          Welcome to <span className="brand-name"> Time Zone</span>
        </h5>
        <h2>We Provide Best Qualites watches in Bangladesh</h2>
        <p>
          Largest network of the world’s finest and brightest watch seller. We
          provide all types of hand watch for all types of people. Here you will
          get branded hand watch in low cost.
        </p>
        <div>
          <Link to="/allProducts"> Explore </Link>
        </div>
      </div>
      <div className="mt-5">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
