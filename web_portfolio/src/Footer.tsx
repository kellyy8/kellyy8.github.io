import { CiLinkedin } from "react-icons/ci"
import { FaGithub, FaFigma } from "react-icons/fa"

function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="icons-wrapper">
                <div className="icon">
                    <a href="https://www.linkedin.com/in/kelly-yu-b46406169/" target="_blank"><CiLinkedin size="2.5em"/></a>
                </div>
                <div className="icon">
                    <a href="https://github.com/kellyy8" target="_blank"><FaGithub size="2em"/></a>
                </div>
                <div className="icon">
                    <a href="/" target="_blank"><FaFigma size="2em"/></a> {/** TODO: Replace this icon/link. */}
                </div>
            </div>
            <p className="text2">growth is a process</p>
        </div>
    )
}

export default Footer