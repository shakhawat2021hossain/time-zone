import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        bg="light"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <h3 style={{ color: "#6262f3" }}>Time Zone</h3>
          <Navbar.Toggle
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav3"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            {user?.email ? (
              <div className="d-flex">
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <button
                  style={{ color: "rgb(63, 128, 248)" }}
                  className="btn"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            )}
            <Navbar.Text>
              {user?.email && (
                <div className="username text-info px-2">
                  {user?.displayName || user?.email}
                </div>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
