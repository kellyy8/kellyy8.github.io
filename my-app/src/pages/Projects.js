import '../App.css';
import './Projects.css'
import items from './ProjectData';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Display({displayItems}) {
  return (
    <div className='cardContainer'>
      {/* Use each 'item' data to populate each project's image and description. */}
      {displayItems.map((card, i) =>{
        return <div className='projectCard'>
            <img src={card.image} alt={card.image} className='projectImage'></img>
            <div className='projectDescription'>
                <p> <b> {i+1}- </b> </p>
                <div>
                    <div className='projectTitle'> {card.title} </div>
                    {/* <div className='projectText'> {card.subcategory} </div> */}
                    <div className='projectTools'> {card.tools} </div>
                </div>
            </div>
          </div>
      })}
    </div>
  )
}

function Button({allCategories, filter}) {
  return (
    <div className='filterMenu'>
        {/* Create a button for each category that calls the filter function when the button is clicked. */}
        {allCategories.map((category) =>{ 
          return <Link onClick={() => filter(category)} className='filterButton'> <p> {category} </p> </Link>
        })}
    </div>
  )
}

function Projects() {
  const allCategories = ['All', 'Software Development', 'UI/UX Design', 'Data Analytics'];
  const [displayItem, setDisplayItem] = useState(items);            /* initializes menu with all items */

  const filter = (category) =>{
    if(category === 'All'){
      setDisplayItem(items);
    }
    else{
      /* for every 'item' in 'items', store in 'filteredItems' array if item's category matches 'category' */
      const filteredItems = items.filter(item => item.category === category);
      setDisplayItem(filteredItems)
    }
  }

  return (
    <div className='Projects'>
      <h1> PROJECTS </h1>
      <p> Here are some of my favorite projects I've worked on!</p>

      <Button allCategories={allCategories} filter={filter}/>
      <Display displayItems={displayItem}/>

    </div>
  );
}

export default Projects;
