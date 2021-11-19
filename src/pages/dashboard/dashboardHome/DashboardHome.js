import React from "react";
import Cover from "./../../../images/dashboard.jpg";
const DashboardHome = () => {
  return (
    <div>
      <h2 className="brand-name text-center">Welcome to Dashboard</h2>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <img style={{ width: "100%" }} src={Cover} alt="" />
      </div>
    </div>
  );
};

export default DashboardHome;
