import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { userRegister, isLoading } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    // if (loginData.pass !== loginData.pass2) {
    //   alert("pass did not match");
    //   return;
    // }
    userRegister(loginData.email, loginData.pass, loginData.name, history);
  };

  return (
    <div className="register">
      <h2 className="text-center brand-name">Please Register</h2>
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      <form onSubmit={handleRegister} className="form-container">
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          onBlur={handleOnBlur}
          required
        />
        <br />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          onBlur={handleOnBlur}
          required
        />
        <br />

        <label htmlFor="pass">
          <b>Password</b>
        </label>
        <br />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Password"
          onBlur={handleOnBlur}
          required
        />
        <br />
        <label htmlFor="pass2">
          <b>Password</b>
        </label>
        <br />
        <input
          type="password"
          name="pass2"
          id="pass2"
          placeholder="Retype Password"
          onBlur={handleOnBlur}
          required
        />
        <br />
        <input type="submit" value="Register" />
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
