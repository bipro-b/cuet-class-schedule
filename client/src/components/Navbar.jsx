import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-image.png";
import useAuth from "../hooks/useAuth";
import "./Navbar.css";

const NavBar = () => {
  const { user, logout, teacher } = useAuth();

  const activeStyle = {
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.312)",
  };

  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container style={{display:"flex", justifyContent:"center", alignItems:"center",alignContent:"space-around" }}>
          <Navbar.Brand as={NavLink} to="/home">
            <img
              src={logo}
              alt="Logo"
              width="50"
              className="logo-image"
            />{" "}
          </Navbar.Brand>
          <Navbar.Brand as={NavLink} to="/home" className="brand">
            Class Routine Management
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{display:"flex",  justifyContent:"center", alignItems:"center",alignContent:"space-around"}}>
            <Nav className="mx-auto" style={{ maxHeight: "375px" , display:"flex" }}>
              <NavLink to="/" className="nav-link" activeStyle={activeStyle}>
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link" activeStyle={activeStyle}>
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link" activeStyle={activeStyle}>
                Contact
              </NavLink>
              {user.email && (
                <NavLink to="/dashboard" className="nav-link" activeStyle={activeStyle}>
                  Dashboard
                </NavLink>
              )}
            </Nav>
            <Nav className="ms-auto">
              {user.email ? (
                <>
                  {/* Show user's display name */}
                  <span className="nav-link text-white">{user.displayName}</span>
                  <button
                    className="btn btn-outline-light"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <NavLink to="/login" className="nav-link" activeStyle={activeStyle}>
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
