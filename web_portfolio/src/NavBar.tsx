import {useState} from 'react'
import {Link} from 'react-router-dom'
import wc from './assets/water_can_default.png'
import './NavBar.css'

function NavBar() {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const toggleShow = () => {setShowDropdown(!showDropdown)}

    return(
        <div className={showDropdown ? "navbar-wrapper open-wrapper" : "navbar-wrapper"}>
            <img
                className={showDropdown ? "wc open-dropdown" : "wc close-dropdown"}
                src={wc}
                width="50%"
                height="auto"
                onClick={toggleShow}
            />
            {showDropdown && 
                <>
                    <nav>
                        <p className="text2">⚘ &nbsp;<Link id="homeLink" to="/">home</Link></p>
                        <p className="text2">⚘ &nbsp;<Link id="aboutLink" to="/about">about me</Link></p>
                        <p className="text2">⚘ &nbsp;<Link id="projectsLink" to="/projects">projects</Link></p>
                        <p className="text2">⚘ &nbsp;<Link id="hobbiesLink" to="/hobbies">hobbies</Link></p>
                    </nav>
                </>
            }
        </div>
    )
}

export default NavBar