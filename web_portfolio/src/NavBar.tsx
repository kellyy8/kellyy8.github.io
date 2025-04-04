import {useState} from 'react'
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
                    <p className="text2">⚘ &nbsp; home</p>
                    <p className="text2">⚘ &nbsp; about me</p>
                    <p className="text2">⚘ &nbsp; projects</p>
                    <p className="text2">⚘ &nbsp; hobbies</p>
                </>
            }
        </div>
    )
}

export default NavBar