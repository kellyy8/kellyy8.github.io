import largeTulip from "../src/assets/large_tulip.png"
import Footer from "./Footer"
import "./App.css"

function App() {

  return (
    <div>
      <h1>Hi, I'm Kelly!</h1>
      <h2>I'm a software developer, designer, and dancer
        <br/>
        <em>innovating for an impact.</em>
        ♡
      </h2>

      <div className="links-container">
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

      <Footer />

    </div>
  )
}

export default App
