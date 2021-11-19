import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from "../../shared/header/Header";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { userSignIn, isLoading } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    userSignIn(loginData.email, loginData.pass, history, location);
  };

  return (
    <div>
      <Header></Header>
      <div className="login">
        <h2 className="text-center brand-name">Please Login</h2>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <form onSubmit={handleSignIn} className="form-container">
          <label htmlFor="name">
            <b>Email</b>
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={handleOnBlur}
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
          <input type="submit" value="Login" />
          <br />
          <Link to="/register">
            <p>Don't have an account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
