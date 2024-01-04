import '../App.css';
import './Projects.css'
import items from './ProjectData';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import FilterButton from './FilterButton';

var num = 0;

function Display({displayItems, handleOpen}) {
  return (
    <div className='cardContainer'>
      {/* Use each 'item' data to populate each project's image and description. */}
      {displayItems.map((card, i) =>{
        return <div className='projectCard'>
            <Link onClick={() => {handleOpen(); num=card.id-1;}}>
              <img src={card.image} alt={card.image} className='projectImage'></img>
            </Link>

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

function Projects() {
  const allCategories = ['All', 'Software Development', 'UI/UX Design', 'Data Analysis'];
  const [displayItem, setDisplayItem] = useState(items);            /* initializes menu with all items */

  const filter = (category) =>{
    if(category === 'All'){
      setDisplayItem(items);
    }
    else{
      /* For every 'item' in 'items', store in 'filteredItems' array if item's category matches 'category' */
      const filteredItems = items.filter(item => item.category === category);
      setDisplayItem(filteredItems)
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [filterNum, setFilterNum] = useState(0);
  
  return (
    <div className='Projects'>
        <h1> PROJECTS </h1>
        <p> some fun projects i got to work on :) </p>

        <FilterButton allCategories={allCategories} filter={filter} filterNum={filterNum} setFilterNum={setFilterNum}/>
        <Display displayItems={displayItem} handleOpen={handleOpen}/>

        {/* Only display Modal when 'open' == true. */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='projectModalBox'>
              <Link onClick={handleClose} className='closeButton'> X </Link>

              <div>
                <img src={items[num].image} alt={items[num].image} className='projectImage'></img>
              </div>

              <div>
                <div className='modalTitle'> {items[num].title} </div>
                <div className='modalContent'> <div style={{width: '100px'}}> <b> Role: </b> </div> <div style={{width: "400px"}}> {items[num].role} </div> </div>
                <div className='modalContent'> <div style={{width: '100px'}}> <b> Tools: </b> </div> <div style={{width: "400px"}}> {items[num].tools} </div> </div>
                <div className='modalContent'> <div style={{width: '100px'}}> <b> Overview: </b> </div> <div style={{width: "400px"}}> {items[num].description} </div> </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <div className='modalContent' style={{width: '100px'}}> <b> More Info: </b> </div>
                  <div style={{display: 'flex', flexFlow: 'row', columnGap: '20px'}}>
                    {items[num].links.map((link) => {
                        return <div> 
                            <Link to={link[1]} target='_blank' className='linkButton'> {link[0]} </Link>
                        </div>
                    })}
                  </div>
                </div>

              </div>

            </div>

        </Modal>

    </div>
  );
}

export default Projects;
