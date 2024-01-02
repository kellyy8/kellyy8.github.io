import '../App.css';
import './Projects.css'
import items from './ProjectData';
import { useState } from 'react';
import { Link } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './bootstrap/css/bootstrap-theme.css'
// import './bootstrap/css/bootstrap-theme.min.css'
// import './bootstrap/css/bootstrap.css'
// import './bootstrap/css/bootstrap.min.css'
// import './bootstrap/js/bootstrap.js'
// import './bootstrap/js/bootstrap.min.js'
// import './bootstrap/config.json'

var num = 0;

/* Vertically centered 'modal' containing project info. */
function DisplayInfo(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {items[num].title}
          <h6> Mobile Development </h6>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{display: 'flex', flexFlow: 'column',}}>
        <h4> Overview </h4>
        <h6> Swift </h6>
        <div> A Swift iOS mobile app that uses infinite zoom art and storytelling to promote mental wellness and creativity. </div>
        <br/>

        <h4> Links </h4>
        <Link to='https://www.figma.com/file/6D9uJZFatgM5yHqAYgQ7OL/Pocket-Studio?type=design&node-id=148-23&mode=design&t=EMyyr5Brgo3Yavb9-0' target='_blank' style={{textDecoration: 'none'}}> Figma </Link>
        <Link to='https://github.com/kellyy8/Pocket-Studio' target='_blank' style={{textDecoration: 'none'}}> GitHub </Link>
        <Link to='https://docs.google.com/presentation/d/1KGYhBn93eg5blTtsxOIVH9WtdJooLkxAKk_ey-bHgsk/edit?usp=sharing' target='_blank' style={{textDecoration: 'none'}}> Demo </Link>
      </Modal.Body>

      <Modal.Footer>
        <Link onClick={props.onHide}>Close</Link>
      </Modal.Footer>

    </Modal>
  );
}

function Display({displayItems}) {
  const [modalShow, setModalShow] = useState(false);
  // const [item, setItem] = useState(items[0]);

  return (
    <div className='cardContainer'>
      {/* Use each 'item' data to populate each project's image and description. */}
      {displayItems.map((card, i) =>{
        return <div className='projectCard'>
            <Link onClick={() => {setModalShow(true); num=i;}}>
              <img src={card.image} alt={card.image} className='projectImage'></img>
            </Link>

            <DisplayInfo show={modalShow} onHide={() => setModalShow(false)}/>

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
  
  return (
    <div className='Projects'>
      <h1> PROJECTS </h1>
      <p> Here are some of my favorite projects I've worked on! </p>

      <FilterButton allCategories={allCategories} filter={filter}/>
      <Display displayItems={displayItem}/>

    </div>
  );
}

export default Projects;
