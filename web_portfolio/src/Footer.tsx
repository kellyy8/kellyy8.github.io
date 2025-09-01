import { SiLinkedin } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { RiPresentationLine } from "react-icons/ri"

function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="icons-wrapper">
                <div className="icon">
                    <a href="https://www.linkedin.com/in/kellyy8" target="_blank"><SiLinkedin size="2em"/></a>
                </div>
                <div className="icon">
                    <a href="https://github.com/kellyy8" target="_blank"><FaGithub size="2em"/></a>
                </div>
                <div className="icon">
                    <a href="https://drive.google.com/drive/folders/1MsSPbVMadO5GhQgggH41bLYEewskS9_r?usp=sharing" target="_blank"><RiPresentationLine size="2.25em"/></a>
                </div>
            </div>
            <p className="text2">growth is a process</p>
        </div>
    )
}

export default Footer