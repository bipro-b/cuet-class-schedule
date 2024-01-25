
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar';
import CourseCoordinator from './pages/Coordinator/CourseAssign/CourseAssign';
import Dashboard from './pages/Coordinator/Dashboard/Dashboard';
function App() {
  return (
    <>
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/form_submit' element={<CourseCoordinator/>} />
     {/* <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/about' element={<About/>} />
    <Route element={< PrivateRoute/>} >
    <Route path='/profile' element={<Profile/>} /> 
    </Route> */}
  </Routes>
  </BrowserRouter>
    
    </>
  );
}

export default App;
