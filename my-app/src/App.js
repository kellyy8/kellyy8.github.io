import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './pages/Home';
import Background from './pages/Background';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        {/* <div className="logoImageWrapper">
          <Link to="/"> <img src={logo} alt="logo" className="logoImage" /> </Link>
        </div> */}
        
        <div className="navbarMenu">
          <NavLink to="/" className="navbarItem"> Home </NavLink>
          <NavLink to="/background" className="navbarItem"> Background </NavLink>
          <NavLink to="/projects" className="navbarItem"> Projects </NavLink>
          <NavLink to="/hobbies" className="navbarItem"> Hobbies </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<Background/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
      </Routes>

    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
