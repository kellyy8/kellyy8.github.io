import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './pages/Home';
import Background from './pages/Background';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import watermark from './images/other/watermark.png';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logoWrapper">
          <Link to="/"> <img src={watermark} alt="logo" className="logo"/> </Link>
        </div>
        
        <div className="navbarMenu">
          {/* <NavLink to="/" className="navbarItem"> Home </NavLink> */}
          <NavLink to="/background" className="navbarItem"> Background </NavLink>
          <NavLink to="/projects" className="navbarItem"> Projects </NavLink>
          <NavLink to="/hobbies" className="navbarItem"> Hobbies </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/background" element={<Background/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
