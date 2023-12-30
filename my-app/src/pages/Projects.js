import '../App.css';
import './Projects.css'
import { Link } from "react-router-dom";
import logo from '../matcha_line_art.png';
import ProjectCard from './ProjectCard';
import PocketStudio from '../logos/pocket_studio.png';
import BruinPause from '../logos/bruin_pause.png';
import BrewinHappiness from '../logos/brewin_happiness2.png';
import BruinMarketplace from '../logos/bruin_marketplace.png';
import Sigmax from '../logos/sigmax.png';
import AugmentedReality from '../logos/augmented_reality.png';
import WebBanner from '../logos/web_banner.png';
import Chatbot from '../logos/chatbot.png';
import TheHill from '../logos/the_hill.png';
import OnTheDot from '../logos/on_the_dot.png';
import SuperPeachSisters from '../logos/super_peach_sisters.png';



function All(){
  return(
    <div className='cardContainer'>        
      <ProjectCard num={1} image={PocketStudio} title={"Pocket Studio"} type={"Mobile Development"} tools={"Swift, Figma, Git"}></ProjectCard>
      <ProjectCard num={2} image={Sigmax} title={"SIGMAX"} type={"Mobile Development"} tools={"JavaScript, Python, React, Flask"}></ProjectCard>
      <ProjectCard num={3} image={BruinMarketplace} title={"Bruin Marketplace"} type={"Web Development"} tools={"JavaScript, React, Firebase"}></ProjectCard>
      <ProjectCard num={4} image={SuperPeachSisters} title={"Super Peach Sisters"} tools={"C++"}></ProjectCard>

      <ProjectCard num={5} image={OnTheDot} title={"RTX x GWC: On The Dot"} type={"UI Design, Mobile Dev"} tools={"Figma"}></ProjectCard>
      <ProjectCard num={6} image={BruinPause} title={"UCLA Bruin Pause"} type={"UI/UX Design, Mobile Dev"} tools={"Figma"}></ProjectCard>
      <ProjectCard num={7} image={TheHill} title={"The Hill"} type={"UI Design, Mobile Dev"} tools={"Figma"}></ProjectCard>
      <ProjectCard num={8} image={Chatbot} title={"DH 150: Chatbot"} type={"Prototyping"} tools={"AIML"}></ProjectCard>
      <ProjectCard num={9} image={AugmentedReality} title={"DH 150: AR Exhibit"} type={"Prototyping"} tools={"Bezel"}></ProjectCard>
      <ProjectCard num={10} image={WebBanner} title={"DH 150: Web Banner"} type={"Prototyping"} tools={"Google Web Designer"}></ProjectCard>

      <ProjectCard num={11} image={BrewinHappiness} title={"Brewin' Happiness"} type={"Data Analysis"} tools={"WordPress, Figma, Tableau, OpenRefine"}></ProjectCard>

    </div>
  )
}

// TODO: Update SDE(), UIUX(), and DA().
function SDE(){
  return(
    <div className='cardContainer'>
      <ProjectCard num={1} image={logo} title={"Pocket Studio"} type={"Mobile Development"} tools={"Swift, Figma, Git"}></ProjectCard>
      <ProjectCard num={2} image={logo} title={"SIGMAX"} type={"Mobile Development"} tools={"JavaScript, Python, React, Flask"}></ProjectCard>
      <ProjectCard num={3} image={logo} title={"Bruin Marketplace"} type={"Web Development"} tools={"JavaScript, React, Firebase"}></ProjectCard>
      <ProjectCard num={4} image={logo} title={"Super Peach Sisters"} tools={"C++"}></ProjectCard>
    </div>
  )
}

function UIUX(){
  return(
    <div className='cardContainer'>
      <ProjectCard num={5} image={logo} title={"RTX x GWC: On The Dot"} type={"UI Design & Mobile Development"} tools={"Figma"}></ProjectCard>
      <ProjectCard num={6} image={logo} title={"UCLA Bruin Pause"} type={"UI/UX Design & Mobile Development"} tools={"Figma"}></ProjectCard>
      <ProjectCard num={7} image={logo} title={"UCLA Learning Centers: The Hill"} type={"UI Design & Mobile Development"} tools={"Figma"}></ProjectCard>
      <ProjectCard num={8} image={logo} title={"DH 150 1 CHATBOT"} type={"Prototyping"} tools={"AIML"}></ProjectCard>
      <ProjectCard num={9} image={logo} title={"DH 150 2 AUGMENTED REALITY"} type={"Prototyping"} tools={"Bezel"}></ProjectCard>
      <ProjectCard num={10} image={logo} title={"DH 150 3 WEB BANNER"} type={"Prototyping"} tools={"Google Web Designer"}></ProjectCard>
   </div>
  )
}

function DA(){
  return(
    <div className='cardContainer'>
      <ProjectCard num={11} image={logo} title={"Brewin' Happiness"} type={"Data Analysis"} tools={"WordPress, Figma, Tableau, OpenRefine"}></ProjectCard>
    </div>
  )
}

function Projects() {
  return (
    <div className='Projects'>
      <h1> PROJECTS </h1>
      <p> Here are some of my favorite projects I've worked on!</p>
      
      <div className='filterMenu'>
        <Link to='/projects' className='filterItem'> <p> All </p> </Link>
        <Link to='/projects' className='filterItem'> <p> Software Development </p> </Link>
        <Link to='/projects' className='filterItem'> <p> UI/UX Design</p>  </Link>
        <Link to='/projects' className='filterItem'> <p> Data Analytics </p> </Link>

        {/* <button onclick={window.location.href='https://tinyurl.com/Kelly-Yu-Design-Portfolio'}> All </button>
        <p id="all"> All </p>

        <script>
          document.getElementById("all").onclick = function() {myFunction()};
        </script> */}

      </div>

      {/* <div className='cardContainer'> <All/> </div> */}
      <All/>

    </div>
  );
}

export default Projects;
