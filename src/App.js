import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Reset from "./pages/Reset/reset";
import LandingPage from "./pages/LandingPage/landing";
import Repass from "./pages/Reset2/repass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learning from "./pages/learning/Learning";
import "../src/App.css"
import Course from "./pages/course/Course";
import Front from "./pages/front-end/Front";

//import logo from './logo.svg';
// import './App.css';
//background: #000227;

function App() {
  return ( 
    <BrowserRouter> 
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/repass" element={<Repass />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/course" element={<Course />} />
        <Route path="/front-end" element={<Front />} />
        <Route path="/" element={<div>Langing route....</div>} />
        <Route path="/" element={<div>Not found....</div>} />
      </Routes>
    </BrowserRouter>
    // <div>
    
    // <LandingPage/>
    // <Course/>
    // <Front/>
    // </div>
  );
}
export default App;
