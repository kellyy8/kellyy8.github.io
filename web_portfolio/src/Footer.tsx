import { CiLinkedin } from "react-icons/ci"
import { FaGithub, FaFigma } from "react-icons/fa"

function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="icons-wrapper">
            <CiLinkedin size="2.5em"/>
            <FaGithub size="2em"/>
            <FaFigma size="2em"/>
            </div>
            <p className="text2">growth is a process</p>
        </div>
    )
}

export default Footer