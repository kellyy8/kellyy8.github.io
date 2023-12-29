import '../App.css';
import './Background.css'
// import { NavLink } from "react-router-dom";
// import { Fragment } from 'react';
import logo from '.././matcha_line_art.png';
import { Fragment } from 'react';

function Background() {
  return (
    <Fragment>
      <div className='backgroundContainer'>
        <h1> BACKGROUND </h1>

        <div className='textImagePair'>
          <img src={logo} alt="logo" className="logo"/>
          <p> Hi, I'm Kelly Yu! I'm a programmer, designer, and dancer who innovates for an impact. </p>
        </div>

        <div className='textImagePair'>
          <p> I'm very passionate about mental wellness and dance, as they both have shaped the person I aspire to become.
              Through morning routines like gratitude journaling, I've come to appreciate mindfulness.
              Through dance, I've learned to value a safe and collaborative learning space for anyone to explore outside their comfort zone.
              My goal is to integrate my passions into crafting new technology that elevates and empowers my community.</p>
          <img src={logo} alt="logo" className="logo"/>
        </div>

        <div className='textImagePair'>
          <img src={logo} alt="logo" className="logo"/>
          <p>I have experience in mobile and web development, UI/UX design, and data science.
              Check out my projects! If you think we'd be a good mutual fit,
              I'd love to connect and learn about your open opportunities.</p>
        </div>

        {/* <div className='textImagePair'>
          <img src={logo} alt="logo" className="logo"/>
          <div>
            <p> Hi, I'm Kelly Yu! I'm a programmer, designer, and dancer who innovates for an impact. </p>
            <br></br>
            <p> I'm very passionate about mental wellness and dance, as they both have shaped the person I aspire to become.
              Through morning routines like gratitude journaling, I've come to appreciate mindfulness.
              Through dance, I've learned to value a safe and collaborative learning space for anyone to explore outside their comfort zone.
              My goal is to integrate my passions into crafting new technology that elevates and empowers my community.</p>
            <br></br>
            <p>I have experience in mobile and web development, UI/UX design, and data science.
              Check out my projects! If you think we'd be a good mutual fit,
              I'd love to connect and learn about your open opportunities.</p>
          </div>
        </div> */}

      </div>

      <div className='backgroundContainer'>
        <h2> EXTRACURRICULARS </h2>
        <p> <i> how I like to balance work with fun :) </i> </p>

        <div className='ecContainer'>
          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> THETA TAU - PROFESSIONAL ENGINEERING FRATERNITY </p>
            <p> WEBMASTER </p>
          </div>

          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> UCLA SOCIETY OF WOMEN ENGINEERS </p>
            <p> MENTOR </p>
          </div>

          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> UCLA UPSILON PI EPSILON HONOR SOCIETY </p>
            <p> TUTOR </p>
          </div>
          
          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> THETA TAU - PROFESSIONAL ENGINEERING FRATERNITY </p>
            <p> WEBMASTER </p>
          </div>

          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> UCLA SOCIETY OF WOMEN ENGINEERS </p>
            <p> MENTOR </p>
          </div>

          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> UCLA UPSILON PI EPSILON HONOR SOCIETY </p>
            <p> TUTOR </p>
          </div>

          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> THETA TAU - PROFESSIONAL ENGINEERING FRATERNITY </p>
            <p> WEBMASTER </p>
          </div>

          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> UCLA SOCIETY OF WOMEN ENGINEERS </p>
            <p> MENTOR </p>
          </div>

          <div className='ecCard'>
            <img src={logo} alt="logo" className="logo"/>
            <p> UCLA UPSILON PI EPSILON HONOR SOCIETY </p>
            <p> TUTOR </p>
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default Background;
