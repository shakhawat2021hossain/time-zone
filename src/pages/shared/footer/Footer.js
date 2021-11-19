import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="social">
        <i className="fab fa-github"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">Home</li>
        <li className="list-inline-item">Services</li>
        <li className="list-inline-item">About</li>
        <li className="list-inline-item">Terms</li>
        <li className="list-inline-item">Privacy Policy</li>
      </ul>
      <p className="copyright">
        © 2021 copyright: <span className="brand-name">Time Zone</span>
      </p>
    </div>
  );
};

export default Footer;
