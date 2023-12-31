import '../App.css';
import './Background.css'
import { Link } from "react-router-dom";
import logo from '.././matcha_line_art.png';
import acaallday from '../logos/acaallday.png';
import acabruins from '../logos/acabruins.png';
import bc from '../logos/bc.png';
import be from '../logos/bruin_entrepreneurs.png';
import fc from '../logos/fc.png';
import lahacks from '../logos/lahacks.png';
import swe from '../logos/swe.png';
import tt from '../logos/tt.png';
import upe from '../logos/upe.png';

function Background() {
  return (
    <div className='Background'>

      <div className='subContainer'>
        <h1> ABOUT ME </h1>
        <p> <i> “You do not just wake up and become the butterfly. Growth is a process.” </i> </p>
        <p> <i> ― Rupi Kaur, the sun and her flowers </i> </p>
        <br/>
      
        <div className='textImagePair'>
          <img src={logo} alt="logo" className="ecImage"/>
          <p> Hi, I'm Kelly Yu! I'm a programmer, designer, and dancer who innovates for an impact. </p>
        </div>

        <div className='textImagePair'>
          <p> I'm very passionate about mental wellness and dance, as they both have shaped the person I aspire to become.
              Through morning routines like gratitude journaling, I've come to appreciate mindfulness.
              Through dance, I've learned to value a safe and collaborative learning space for anyone to explore outside their comfort zone.
              My goal is to integrate my passions into crafting new technology that elevates and empowers my community.</p>
          <img src={logo} alt="logo" className="ecImage"/>
        </div>

        <div className='textImagePair'>
          <img src={logo} alt="logo" className="ecImage"/>
          <p>I have experience in mobile and web development, UI/UX design, and data science.
              Check out my projects! If you think we'd be a good mutual fit,
              I'd love to connect and learn about your open opportunities.</p>
        </div>
      </div>

      <div className='contactContainer'>
        <Link to="https://www.linkedin.com/in/kelly-yu-b46406169/" target='_blank' className='contact'> <p> LinkedIn </p> </Link>
        <Link to="https://github.com/kellyy8" target='_blank' className='contact'> <p> GitHub </p> </Link>
        <Link to="https://tinyurl.com/Kelly-Yu-Design-Portfolio" target='_blank' className='contact'> <p> Design Portfolio </p> </Link>
        <Link to="https://drive.google.com/file/d/1orvztnH9H8pOzlOZmCHQPckka54y0jJv/view?usp=sharing" target='_blank' className='contact'> <p> Resume </p> </Link>
        {/* <a href='../Kelly_Yu_Resume.pdf' target='_blank' className='contact'> <p> Resume </p> </a> */}
      </div>

      <div className='subContainer'>
        <h1> EXTRACURRICULARS </h1>
        <p> <i> how I like to balance work with fun :) </i> </p>

        <div className='ecCardContainer'>
          <div className='ecCard'>
            <Link to='https://www.thetataubruins.org/' target='_blank'>
              <img src={tt} alt="Theta Tau logo" className='ecImage'/>
            </Link>
            <p> <b> THETA TAU - PROFESSIONAL ENGINEERING FRATERNITY </b> </p>
            <p> Webmaster </p>
          </div>

          <div className='ecCard'>
            <Link to='https://www.sweucla.com/' target='_blank'>
              <img src={swe} alt="SWE at UCLA logo" className='ecImage'/>
            </Link>
            <p> <b> SOCIETY OF WOMEN ENGINEERS </b> </p>
            <p> Mentor </p>
          </div>

          <div className='ecCard'>
            <Link to='https://upe.seas.ucla.edu/' target='_blank'>
              <img src={upe} alt="Upsilon Pi Epsilon logo" className='ecImage'/>
            </Link>
            <p> <b> UCLA UPSILON PI EPSILON HONOR SOCIETY </b> </p>
            <p> Tutor </p>
          </div>
          
          <div className='ecCard'>
            <Link to='https://www.instagram.com/acaallday/' target='_blank'>
              <img src={acaallday} alt="ACA All Day logo" className='ecImage'/>
            </Link>
            <p> <b> ACA ALL DAY COLLEGIATE COMPETITIVE DANCE TEAM </b> </p>
            <p> Dancer </p>
          </div>

          <div className='ecCard'>
            <Link to='https://www.instagram.com/foundationschoreo/' target='_blank'>
              <img src={fc} alt="Foundations Choreography logo" className='ecImage'/>
            </Link>
            <p> <b> FOUNDATIONS CHOREOGRAPHY</b> </p>
            <p> Videographer </p>
          </div>

          <div className='ecCard'>
            <Link to='https://bruincreators.wixsite.com/home' target='_blank'>
              <img src={bc} alt="Bruin Creators logo" className='ecImage'/>
            </Link>
            <p> <b> BRUIN CREATORS </b> </p>
            <p> Marketing Director & Graphic Designer </p>
          </div>

          <div className='ecCard'>
            <Link to='https://acabruins.org/' target='_blank'>
              <img src={acabruins} alt="ACA Bruins logo" className='ecImage'/>
            </Link>
            <p> <b> ASSOCIATION OF CHINESE AMERICANS </b> </p>
            <p> Finance Intern </p>
          </div>

          <div className='ecCard'>
            <Link to='https://www.instagram.com/lahacks/' target='_blank'>
              <img src={lahacks} alt="LA Hacks logo" className='ecImage'/>
            </Link>
            <p> <b> LA HACKS </b> </p>
            <p> Hackathon Competitor </p>
          </div>

          <div className='ecCard'>
            <Link to='https://designathon2023.bruinentrepreneurs.org/' target ='_blank'>
              <img src={be} alt="Bruin Entrepreneurs logo" className='ecImage'/>
            </Link>
            <p> <b> BRUIN ENTREPRENEURS </b> </p>
            <p> Designathon Competitor </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Background;
