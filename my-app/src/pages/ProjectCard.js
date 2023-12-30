import '../App.css';
import './Projects.css'

export default function ProjectCard({num, image, title, type, tools}){
    return(
        <div className='projectCard'>
            <img src={image} alt={image} className='projectImage'></img>
            <div className="projectDescription">
                <p> {num} -- </p>
                <div>
                    <div className='projectText'> {title} </div>
                    <div className='projectText'> {type} </div>
                    <div className='projectText'> {tools} </div>
                </div>
            </div>
        </div>
    )
}

