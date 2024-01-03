import '../App.css';
import './Projects.css';
import { Link } from 'react-router-dom';

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

  export default FilterButton;