import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  
  import React, { useState } from "react";
  import { Row } from "react-bootstrap";
  import { NavLink, useNavigate } from "react-router-dom";
  
  import reg from "../../images/reg.png";
  import useAuth from "../../hooks/useAuth";
  
  const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();
  
    const handleBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      console.log(newLoginData);
      setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
      //   alert('Submit successfully')

      registerUser(loginData.username,loginData.department,loginData.email, loginData.password, navigate);
      e.preventDefault();
    };
    return (
      <>
        <Container style={{ backgroundColor: "#F6F7F9" }}>
          <Row lg={2} md={1} style={{display:"flex", alignItems:"space-around"}}>
            <div>
              <Grid container spacing={2} sx={{ marginTop: "50px" }}>
                <Grid item sm={12}>
                  <Typography
                    variant="body1"
                    sx={{ color: "black bold", fontSize: "27px" }}
                    gutterBottom
                  >
                    Register Here
                    {!isLoading && (
                      <form onSubmit={handleLoginSubmit}>
                        <TextField
                          sx={{ width: "75%", m: 1 }}
                          id="standard-basic"
                          label="Your Full Name"
                          name="username"
                          onBlur={handleBlur}
                          type="name"
                          placeholder='your full name..'
                          variant="standard"
                        />
                        <TextField
                          sx={{ width: "75%", m: 1 }}
                          id="standard-basic"
                          label="Enter your department."
                          name="department"
                          onBlur={handleBlur}
                          type="name"
                          placeholder='your department name.." '
                          variant="standard"
                        />
                        <TextField
                          sx={{ width: "75%", m: 1, color: "white" }}
                          id="standard-basic"
                          label="Your Email"
                          name="email"
                          onBlur={handleBlur}
                          type="email"
                          variant="standard"
                        />
                        <TextField
                          sx={{ width: "75%", m: 1, color: "white" }}
                          id="standard-basic"
                          label="Your Password"
                          type="password"
                          name="password"
                          onBlur={handleBlur}
                          variant="standard"
                        />

                        <Button
                          sx={{ width: "75%", m: 1, color: "white" }}
                          type="submit"
                          variant="contained"
                        >
                          Register
                        </Button>
                        <NavLink style={{ textDecoration: "none" }} to="/login">
                          <Button variant="text">
                            Already Register User? Please Login.
                          </Button>
                        </NavLink>
                      </form>
                    )}
                    {isLoading && <CircularProgress />}
                  </Typography>
                  {user?.email && (
                    <Alert severity="success">RegistrationSuccessfully!!</Alert>
                  )}
                  {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
              </Grid>
            </div>
            <div className="mt-2">
              <img
                style={{ width: "100%", margintop: "10px", borderRadius: "10px" }}
                src={reg}
                alt=""
              />
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Register;