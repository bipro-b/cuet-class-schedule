
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    
  <BrowserRouter>
  <Navbar/>  
  <Routes>
    <Route path='/' element={<Home/>} />
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
