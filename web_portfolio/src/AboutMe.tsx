import headshot from './assets/headshot.jpg'
import dance from './assets/dance.png'
import web_dev from './assets/web_dev.png'
import large_tulip from './assets/large_tulip.png'
import { ExtracurricularDetails, professionalExtracurricularData, creativeExtracurricularData } from './data'
import NavBar from './NavBar'
import Footer from './Footer'
import './AboutMe.css'

function Divider() {
    return(
        <div className="divider-wrapper">
            <img src={large_tulip} width="60" height="auto"/>
            <img src={large_tulip} width="60" height="auto"/>
            <img src={large_tulip} width="60" height="auto"/>
            <img src={large_tulip} width="60" height="auto"/>
            <img src={large_tulip} width="60" height="auto"/>
        </div>
    )
}

type ECCardProps = ExtracurricularDetails

function ECCard({image, title, role, link} : ECCardProps) {
    return(
        <div className="ec-wrapper">
            <a href={link} target='_blank'>
                <img className="ec-image" src={image} width="80%" height="auto"/>
            </a>
            <p className="text2"><strong>{title}</strong></p>
            <p className="text2"><em>{role}</em></p>
        </div>
    )
}

function AboutMe() {
    return(
        <>
            <NavBar />
            
            <h1>about me</h1>
            <p className="text2">
                <em>
                    "You do not just wake up and become the butterfly. Growth is a process."
                    <br/>
                    ––Rupi Kaur, the sun and her flowers
                </em>
            </p>

            <div>
                <div className="pic-words-pair">
                    <img className="headshot" src={headshot} width="200" height="auto"/>
                    <p className="text2">
                        Hi, I'm Kelly and I study Computer Science at UCLA!
                        I'm currently in between my Bachelor's and Master's degree (expected: June 2026) and
                        I'm looking for opportunities this summer to innovate for an impact!
                        I love working on projects where I know the product
                        I'm building will help my community grow with me.
                    </p>
                </div>
                <div className="pic-words-pair">
                    <p className="text2">
                        I'm especially interested in front-end/full-stack web and mobile app development.
                        I have experience with back-end, like working with databases and APIs,
                        but I really like collaborating with product designers to improve the user interface and user experience.
                        I've worked on apps for areas like sustainability, politics, and physical therapy,
                        but my favorite project would have to be Pocket Studio.
                        I led a team of developers and collaborated with designers, illustrators, and writers to craft
                        a Swift iOS app that encourages users to practice mindfulness through infinite zoom art and storytelling.
                    </p>
                    <img src={dance} width="200" height="auto"/>
                </div>
                <div className="pic-words-pair">
                    <img src={web_dev} width="200" height="auto"/>
                    <p className="text2">
                        Aside from that, I love getting creative during my free time.
                        I enjoy dancing, filmmaking, graphic designing, bullet journaling, and more.
                        I love exploring different mediums to express myself and connect with the people around me.
                    </p>
                </div>

            </div>

            <Divider/>

            <div className="skills-container">
                <h2>skills</h2>
                <p className="text2">
                    <a href="https://www.linkedin.com/in/kellyy8/" target="_blank">LinkedIn</a> &nbsp; | &nbsp;
                    <a href="https://github.com/kellyy8" target="_blank">GitHub</a> &nbsp; | &nbsp;
                    <a href="https://tinyurl.com/Kelly-Yu-Design-Portfolio" target="_blank">Design Portfolio</a> &nbsp; | &nbsp;
                    <a href="https://drive.google.com/file/d/10ihn1amqzzKLQrpzU3WzWcL8ohkoe2Ji/view?usp=drive_link" target="_blank">Resume</a>
                </p>

                <div className="skill-list-pair">
                    <p className="text2 label"><strong>Programming Languages:</strong></p>
                    <p className="text2 list"><strong>TypeScript</strong>, <strong>JavaScript</strong>, HTML/CSS, <strong>Python</strong>, C/C++, Java, Swift, Bash, Haskell, Prolog</p>
                </div>
                <div className="skill-list-pair">
                    <p className="text2 label"><strong>Technologies:</strong></p>
                    <p className="text2 list"><strong>React</strong>, <strong>React Native</strong>, <strong>Figma</strong>, Chromatic, Linear, GCP, Azure, Next.js, Node.js, UML, Linux, <strong>Postgres</strong>, MongoDB, Neo4j, Redis, Docker, NumPy, Pandas, Tableau, Jupyter Notebooks</p>
                </div>
                <div className="skill-list-pair">
                    <p className="text2 label"><strong>Conversational Languages:</strong></p>
                    <p className="text2 list">Native speaker and literate in Chinese (Mandarin, Cantonese, and Taishanese)</p>
                </div>
            </div>

            <Divider/>

            <div className="ec-container">
                <h2>extracurriculars</h2>
                <p className="text2"><em>how i balance work with fun :)</em></p>

                <p className="text2"><strong>professional</strong></p>
                <div className="ec-card-container">
                    {professionalExtracurricularData && professionalExtracurricularData.map((ec, index) => 
                        <ECCard key={index} {...ec} />
                    )}
                </div>

                <p className="text2"><strong>creativity</strong></p>
                <div className="ec-card-container">
                    {creativeExtracurricularData && creativeExtracurricularData.map((ec, index) => 
                        <ECCard key={index} {...ec} />
                    )}
                </div>
            </div>

            <Footer />

        </>
    )
}

export default AboutMe