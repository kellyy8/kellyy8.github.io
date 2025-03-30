import "./App.css"
import largeTulip from "../src/assets/large_tulip.png"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub, FaFigma } from "react-icons/fa"
import Projects from "./Projects"

function App() {

  return (
    <div>
      <h1>Hi, I'm Kelly!</h1>
      <h2>I'm a software developer, designer, and dancer
        <br/>
        <span style={{fontStyle: "italic"}}>innovating for an impact.</span>
        ♡
      </h2>

      <br/>
      <br/>

      <div className="links">
        <div>
          <img src={largeTulip} alt="Tulip." height="120"/>
          <p className="text1">about me</p>
        </div>
        <div>
          <img src={largeTulip} alt="Tulip." height="120"/>
          <p className="text1">projects</p>
        </div>
        <div>
          <img src={largeTulip} alt="Tulip." height="120"/>
          <p className="text1">hobbies</p>
        </div>
      </div>

      <br/>
      <br/>

      <Projects/>
      
      <br/>
      <br/>
      
      {/** Footer */}
      <div className="footer-wrapper">
        <div className="icons-wrapper">
          <CiLinkedin size="2.5em"/>
          <FaGithub size="2em"/>
          <FaFigma size="2em"/>
        </div>
        <p className="text2">growth is a process</p>
      </div>

    </div>
  )
}

export default App
