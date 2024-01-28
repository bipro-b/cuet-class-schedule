import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";

import logo from "../images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  console.log();
  const activeStyle = {
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.312)",
  };
  const { user, logout, teacher } = useAuth();
  console.log(teacher);
  return (
    <div className="header ">
      <Navbar
        bg="dark"
        style={{ color: "rgba(0, 0, 0, 0.312)" }}
        variant={"dark"}
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="home">
            <span>
              {" "}
              <img src={logo} style={{ width: "50px" }} alt="" />
            </span>
            Routine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" mx-auto  my-lg-0 me-0 "
              style={{ maxHeight: "375px" }}
              navbarScroll
            >
              <NavLink to="/" activeStyle={activeStyle}>
                Home
              </NavLink>
              <NavLink to="/about" activeStyle={activeStyle}>
                About
              </NavLink>
              <NavLink to="/contact" activeStyle={activeStyle}>
                Contact
              </NavLink>
            </Nav>
            {teacher && (
              <NavLink to="/instructor" activeStyle={activeStyle}>
                Instructor
              </NavLink>
            )}
            {user.email && (
              <NavLink to="/dashboard" activeStyle={activeStyle}>
                Dashbaord
              </NavLink>
            )}

            {/* {user.email && (
              <span style={{ color: "white" }}> {user.displayName} </span>
            )} */}
            {user.email ? (
              <button
                style={{ backgroundColor: "#212529", color: "white" }}
                onClick={logout}
              >
                log Out
              </button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar;