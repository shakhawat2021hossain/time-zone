import React from "react";
import about from "../../../images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container about mt-3">
      <h2 className="text-center brand-name">About Us</h2>
      <div className="d-flex justify-content-between align-items-center flex-md-row flex-column-reverse my-5">
        <div className="half-width">
          <img src={about} alt="" />
        </div>

        <div className="half-width">
          <h3>Know about our company!</h3>
          <p>
            Time Zone Group is a multinational technology company that focuses
            on e-commerce, logistics, payment infrastructure and financial
            services. Founded in 2011 with the backing of Rocket Internet, it
            was first launched in Pakistan as an online fashion retailer and
            later expanded to Bangladesh, Sri Lanka, Nepal, and Myanmar as Time
            Zone Group after a shift in its business model.[1] In May 2018, Time
            Zone Group was acquired by Chinese e-commerce company Alibaba Group.
            Bjarke Mikkelsen is founder of Time Zone Group and its current CEO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
