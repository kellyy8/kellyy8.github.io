import { useState } from "react"
import { Link } from "react-router-dom"
import { LuMenu } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { SmallestFlowerLineArt } from "./FlowerLineArt"
import "./NavBar.css"

function NavBar() {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const toggleShow = () => {setShowDropdown(!showDropdown)}

    return(
        <>
            <div
                className="navbar-icon"
                onClick={toggleShow}
            >
                {showDropdown ? <IoClose size={35}/> : <LuMenu size={35} />}
            </div>
            {showDropdown && 
                <div className={showDropdown ? "navbar-wrapper open-wrapper" : "navbar-wrapper close-wrapper"}>
                    <nav>
                        <div className="navbar-menu-option">
                            <SmallestFlowerLineArt />
                            <p className="text2"><Link className="link" to="/">&nbsp;&nbsp;home</Link></p>
                        </div>
                        <div className="navbar-menu-option">
                            <SmallestFlowerLineArt />
                            <p className="text2"><Link className="link" to="/about">&nbsp;&nbsp;about me</Link></p>
                        </div>
                        <div className="navbar-menu-option">
                            <SmallestFlowerLineArt />
                            <p className="text2"><Link className="link" to="/experience">&nbsp;&nbsp;experience</Link></p>
                        </div>
                        <div className="navbar-menu-option">
                            <SmallestFlowerLineArt />
                            <p className="text2"><Link className="link" to="/hobbies">&nbsp;&nbsp;hobbies</Link></p>
                        </div>
                        <div className="navbar-menu-option">
                            <SmallestFlowerLineArt />
                            <p className="text2"><Link className="link" to="/contact">&nbsp;&nbsp;contact</Link></p>
                        </div>
                    </nav>
                </div>
            }
        </>
    )
}

export default NavBar