import '../App.css';
import './Projects.css'
import items from './ProjectData';
import { useState } from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
};

var num = 0;

function Display({displayItems, handleOpen}) {
  return (
    <div className='cardContainer'>
      {/* Use each 'item' data to populate each project's image and description. */}
      {displayItems.map((card, i) =>{
        return <div className='projectCard'>
            <Link onClick={() => {handleOpen(); num=i;}}>
              <img src={card.image} alt={card.image} className='projectImage'></img>
            </Link>

            {/* <DisplayInfo show={modalShow} onHide={() => setModalShow(false)}/> */}

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='modalTitle'> Text in a modal </div>
                    <div className='modalDescription'> Duis mollis, est non commodo luctus, nisi erat porttitor ligula. </div>
                </Box>
            </Modal> */}

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

function FilterButton({allCategories, filter}) {
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
      /* For every 'item' in 'items', store in 'filteredItems' array if item's category matches 'category' */
      const filteredItems = items.filter(item => item.category === category);
      setDisplayItem(filteredItems)
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div className='Projects'>
        <h1> PROJECTS </h1>
        <p> Here are some of my favorite projects I've worked on! </p>

        <FilterButton allCategories={allCategories} filter={filter}/>
        <Display displayItems={displayItem} handleOpen={handleOpen}/>

        {/* Only display Modal when 'open' == true. */}
        <Modal
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modalTitle'> {items[num].title} </div>
                <div className='modalDescription'> {items[num].description} </div>

                {items[num].links.map((link) => {
                    return <div> 
                        <Link to={link[1]} target='_blank' style={{textDecoration: 'none'}}> {link[0]} </Link>
                    </div>
                })}

                <Button onClick={handleClose}> Close </Button>
            </Box>

        </Modal>

    </div>
  );
}

export default Projects;
