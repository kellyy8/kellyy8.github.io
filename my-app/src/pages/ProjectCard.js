import '../App.css';
import './Projects.css'

export default function ProjectCard({num, image, title, type, tools}){
    return(
        <div className='projectCard'>
            <img src={image} alt={image} className='projectImage'></img>
            <div className="projectDescription">
                <p> <b> {num}- </b> </p>
                <div>
                    <div className='projectTitle'> {title} </div>
                    {/* <div className='projectText'> {type} </div> */}
                    <div className='projectTools'> {tools} </div>
                </div>
            </div>
        </div>
    )
}

