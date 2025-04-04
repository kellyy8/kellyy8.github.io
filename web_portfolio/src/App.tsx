import {Link} from "react-router-dom"
import largeTulip from "../src/assets/large_tulip.png"
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
        <div>
          <Link id="aboutLink" to="/about">
            <img src={largeTulip} alt="Tulip." height="120"/>  {/** TODO: Add hover state to tulips! */}
            <p className="text1">about me</p>
          </Link>
        </div>
        <div>
          <Link id="projectsLink" to="/projects">
            <img src={largeTulip} alt="Tulip." height="120"/>
            <p className="text1">projects</p>
          </Link>
        </div>
        <div>
          <Link id="hobbiesLink" to="/hobbies">
            <img src={largeTulip} alt="Tulip." height="120"/>
            <p className="text1">hobbies</p>
          </Link>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default App
