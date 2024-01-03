import '../App.css';
import './Projects.css';
import { Link } from 'react-router-dom';

// function MouseOver(event) {
//   event.target.style.backgroundColor = 'green';
// }
// function MouseOut(event){
//   event.target.style.backgroundColor = '';
// }
// function Try(event) {
//   event.target.style.backgroundColor = 'black';
// }


function FilterButton({allCategories, filter}) {
    return (
      // <div className='filterMenu'>
      //     {/* Create a button for each category that calls the filter function when the button is clicked. */}
      //     {allCategories.map((category) =>{ 
      //       // category.selected = false;
      //       return <Link onClick={() => {filter(category.name); category.selected=true;}} className={category.selected ? 'filterButtonSelected':'filterButton'} > <p> {category.name} </p> </Link>
      //     })}
      // </div>
      <div className='filterMenu'>
          {/* Create a button for each category that calls the filter function when the button is clicked. */}
          {allCategories.map((category) =>{ 
            return <Link onClick={() => filter(category)} className='filterButton'> <p> {category} </p> </Link>
          })}
      </div>
      // <div className='filterMenu'>
      //     {/* Create a button for each category that calls the filter function when the button is clicked. */}
      //     {allCategories.map((category) =>{ 
      //       return <Link onClick={() => {filter(category)}} onMouseOver={MouseOver} onMouseOut={MouseOut} className='filterButton'> {category} </Link>
      //     })}
      // </div>
    )
  }

  export default FilterButton;