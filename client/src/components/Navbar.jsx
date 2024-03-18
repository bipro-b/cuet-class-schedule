import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import useAuth from "../hooks/useAuth";
import "./Navbar.css";

const NavBar = () => {
  // const [role,setRole] = useState("");
  const { user, logout,role} = useAuth();
  console.log(user.email);
  console.log(role);


  const activeStyle = {
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.312)",
  };

  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", alignContent:"space-around" , marginTop:0}}>
          <Navbar.Brand as={NavLink} to="/home">
            <img
              src={logo}
              alt="Logo"
              width="50"
              className="d-inline-block align-top"
            />{" "}
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
              { role==="admin"? (
                <NavLink to="/dashboard" className="nav-link" activeStyle={activeStyle}>
                  Dashboard
                </NavLink>
              ):(
                <NavLink to="/home" className="nav-link" activeStyle={activeStyle}>
                  Home
                </NavLink>
              )}
            </Nav>
            <Nav className="ms-auto">
              {user.email ? (
                <>
                  {/* Show user's display name */}
                  <span className="nav-link text-white">{user.displayName}</span>
                  <button
                    className="btn bg-slate-400"
                    onClick={logout}
                    style={{borderRadius:"5px",margin:"2px",marginTop:"3px",marginLeft:"15px"}}
                  >
                    Logout
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
