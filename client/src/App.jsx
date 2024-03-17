import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from "./pages/Home/Home";
import NavBar from './components/Navbar';
import AuthProvider from './hooks/authProvider';
import Login from './components/Logging/Login';
import Register from './components/Logging/Register';
import Dashboard from './pages/Coordinator/Dashboard/Dashboard';
import CourseCoordinator from './pages/Coordinator/CourseAssign/CourseAssign';
import ManageCourse from './pages/Coordinator/ManageCourse/ManageCourse';
import Footer from './components/Footer';
function App() {
  return (
    <>
   <AuthProvider>
     
  <BrowserRouter>
  <NavBar/>
  <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/managecourse' element={<ManageCourse/>} />

    <Route path='/form_submit' element={<CourseCoordinator/>} />
    {/* <Route path='/Teacher' element={<AssignedCourse/>} /> */}
     {/* <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/about' element={<About/>} />
    <Route element={< PrivateRoute/>} >
    <Route path='/profile' element={<Profile/>} /> 
    </Route> */}
  </Routes>
  <Footer/>
  </BrowserRouter>
    
   </AuthProvider>
    </>
  );
}

export default App;