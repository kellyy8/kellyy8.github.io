import '../App.css';
import './Home.css';
// import { NavLink } from "react-router-dom";
// import {StyleSheet, View, Text, Image} from "react-native";
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <div className='intro'>
        <div className='introName'> KELLY YU </div>
        <div className='introIntro'> A programmer, designer, and dancer </div>
        <div className='introIntro'> innovating for an impact. </div>
      </div>
    </Fragment>
  );
}

export default Home;
