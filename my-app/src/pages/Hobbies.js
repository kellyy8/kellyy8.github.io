import '../App.css';
import './Projects.css'
import './Hobbies.css';
import items from './HobbyData.js'
import { useState} from 'react';
import FilterButton from './FilterButton.js';

function DisplayNonVideo({displayItems, show}) {
  if (!show){ return; }
  
  return (
    <div className='cardContainer'>
      {/* Use each 'item' data to populate each project's image and description. */}
      {displayItems.map((card, i) =>{
        return <div className='hobbyCard'>
            {/* <Link onClick={() => {handleOpen(); num=card.id-1;}}> */}
              <img src={card.image} alt={card.image} className='projectImage'></img>
            {/* </Link> */}
              <div className='hobbyTitle'> {card.title} </div>
          </div>
      })}
    </div>
  )
}

function DisplayVideo({displayItems, show}){
  if (!show){ return; }

  return(
    <div className='videoCardContainer'>
        {/* Use each 'item' data to populate each project's image and description. */}
        {displayItems.map((card, i) =>{
          return <div className='videoCard'>
            <iframe width="500" height="280"
                    src={card.link}
                    title={card.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
            </iframe>
            <div className='videoTitle'> {card.title} </div>
          </div>
        })}
      </div>
  )
}


function Hobbies() {
  // const allCategories = [{name: 'Dance', selected: false}, {name: 'Graphic Design', selected: false}, {name: 'Videography', selected: false}];
  const allCategories = ['Dance', 'Graphic Design', 'Videography'];
  const [displayItem, setDisplayItem] = useState(items.filter(item => item.category === 'Dance'));            /* initializes menu with all items */
  const [video, setVideo] = useState(true);

  const filter = (category) =>{
    if(category === 'All'){
      setDisplayItem(items);
    }
    else{
      /* For every 'item' in 'items', store in 'filteredItems' array if item's category matches 'category' */
      const filteredItems = items.filter(item => item.category === category);
      setDisplayItem(filteredItems);

      if(category === 'Videography' || category === 'Dance'){ setVideo(true); }
      else{ setVideo(false); }
    }
  }
  
  return (
    <div className='Hobbies'>
        <h1> HOBBIES </h1>
        <p> some cool things i created with some really cool people :) </p>

        <FilterButton allCategories={allCategories} filter={filter}/>
        <DisplayNonVideo displayItems={displayItem} show={!video}/>
        <DisplayVideo displayItems={displayItem} show={video}/>

    </div>
  );
}

export default Hobbies;
