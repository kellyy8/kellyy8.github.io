import '../App.css';
import './Home.css';
import figma from '../logos/figma.png'
import linkedin from '../logos/linkedin.png'
import github from '../logos/github.png'
import { Link } from 'react-router-dom'

// import { NavLink } from "react-router-dom";
// import {StyleSheet, View, Text, Image} from "react-native";
// import { Fragment } from 'react';

function Home() {
  return (
    <div className='Home'>
      <div className='introContainer'>
        <div className='introName'> KELLY YU </div>
        <div className='introIntro'> A programmer, designer, and dancer </div>
        <div className='introIntro'> innovating for an impact. </div>
      </div>

      <div className='linksContainer'>
        {/* <Link to='/'> <img src={figma} className='linksImage'></img> </Link> */}
        <Link to='https://github.com/kellyy8'> <img src={github} className='linksImage'></img> </Link>
        <Link to='https://www.linkedin.com/in/kelly-yu-b46406169/'> <img src={linkedin} className='linksImage'></img> </Link>
      </div>
    </div>
);
}

export default Home;
