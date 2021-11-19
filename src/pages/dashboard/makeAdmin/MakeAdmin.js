import React, { useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleOnsubmit = (e) => {
    const user = { email };
    fetch("https://whispering-mesa-36934.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(user);
    e.preventDefault();
  };
  return (
    <div className="make-admin">
      <h2 className="text-center brand-name">Make admin</h2>
      <form onSubmit={handleOnsubmit}>
        <label htmlFor="name">
          <b>Email</b>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onBlur={handleOnBlur}
          placeholder="Enter Email"
          required
        />
        <br />
        <button className="add-btn" type="submit">
          Make Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
