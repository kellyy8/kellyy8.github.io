import { Link } from "react-router-dom"
import { MdOutlineEmail } from "react-icons/md"
import { SiLinkedin } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { RiPresentationLine } from "react-icons/ri"
import { IoDocumentTextOutline } from "react-icons/io5"
import { FaPaintBrush } from "react-icons/fa";
import { LargeFlowerLineArt  } from "./FlowerLineArt"
import NavBar from "./NavBar"
import "./Contact.css"

function Contact() {
    return (
        <div id="contact-page">
            <NavBar />

            <h1 className="contact-title">Let's create an impact together!</h1>

            <div className="contact-bottom">
                <div className="bottom-left">
                    <div className="contact-info-wrapper">
                        <MdOutlineEmail size="2em"/>
                        <p className="text2"><Link className="link" target="_blank" to="mailto:kellyy8@g.ucla.edu">&nbsp;&nbsp;kellyy8@g.ucla.edu</Link></p>
                    </div>
                    <div className="contact-info-wrapper">
                        <SiLinkedin size="1.75em"/>
                        <p className="text2"><Link className="link" target="_blank" to="https://www.linkedin.com/in/kellyy8">&nbsp;&nbsp;&nbsp;LinkedIn</Link></p>
                    </div>
                    <div className="contact-info-wrapper">
                        <IoDocumentTextOutline size="2em"/>
                        <p className="text2"><Link className="link" target="_blank" to="https://drive.google.com/file/d/10ihn1amqzzKLQrpzU3WzWcL8ohkoe2Ji/view?usp=drive_link">&nbsp;&nbsp;Resume</Link></p>
                    </div>
                </div>

                <div className="link-background contact">
                    <LargeFlowerLineArt palette={["#A8C9AD", "#69896F"]}/>
                </div>

                <div className="bottom-right">
                    <div className="contact-info-wrapper">
                        <FaGithub size="1.75em"/>
                        <p className="text2"><Link className="link" target="_blank" to="https://github.com/kellyy8">&nbsp;&nbsp;&nbsp;GitHub</Link></p>
                    </div>
                    <div className="contact-info-wrapper">
                        <RiPresentationLine size="2em"/>
                        <p className="text2"><Link className="link" target="_blank" to="https://drive.google.com/drive/folders/1MsSPbVMadO5GhQgggH41bLYEewskS9_r?usp=sharing">&nbsp;&nbsp;Demos & Designs</Link></p>
                    </div>
                    <div className="contact-info-wrapper">
                        <FaPaintBrush size="1.5em"/>
                        <p className="text2"><Link className="link" target="_blank" to="https://drive.google.com/drive/folders/1xHOlPoJungIQ7dbahoarua8txx_tukyJ?usp=drive_link">&nbsp;&nbsp;&nbsp;&nbsp;Digital Art Portfolio</Link></p>
                    </div>
                </div>
            </div>

            <p className="text2 contact-footer">&nbsp;growth is a process</p>

        </div>
    )
}

export default Contact