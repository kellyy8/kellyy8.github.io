import { Link } from "react-router-dom"
import { LargeFlowerLineArt } from "./FlowerLineArt"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./App.css"

function App() {

  return (
    <div>
      <NavBar />

      <h1>Hi, I'm Kelly!</h1>
      <h2>I'm a software developer, designer, and dancer
        <br/>
        <em>innovating for an impact.</em>
        ♡
      </h2>

      <div className="links-container">
        <div className="link-card">
          <Link className="link" to="/about">
            <div className="link-background about">
              <LargeFlowerLineArt palette={["#fb923c", "#fdba74"]}/>
            </div>
            <p className="text1">about me</p>
          </Link>
        </div>
        <div className="link-card">
          <Link className="link" to="/projects">
            <div className="link-background projects">
              <LargeFlowerLineArt palette={["#f9a8d4", "#fbcfe8"]}/>
            </div>
            <p className="text1">projects</p>
          </Link>
        </div>
        <div className="link-card">
          <Link className="link" to="/hobbies">
            <div className="link-background hobbies">
              <LargeFlowerLineArt palette={["#8b5cf6", "#a78bfa"]}/>
            </div>
            <p className="text1">hobbies</p>
          </Link>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default App
