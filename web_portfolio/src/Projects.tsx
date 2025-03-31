import {useState} from "react"
import "./Projects.css"
import { projectData, ProjectDetails } from "./data"

type ProjectCardProps = ProjectDetails & {
    number: number,
}

function ProjectCard(props : ProjectCardProps) {
    return(
        <div className="project-wrapper">
            <img className="project-logo" src={props.image} width="100%" height="auto"/>
            <div className="project-details-wrapper">
                <p className="text2">{props.number < 10 ? '0' : ''}{props.number}</p>
                <div className="project-details">
                    <p className="text2">{props.title}</p>
                    <p className="text3">{props.tools}</p>
                </div>
            </div>
        </div>
    )
}

type Filter = "all" | "software development" | "ui/ux design" | "data analysis"

function Projects() {
    const allFilters : Array<Filter> = ["all", "software development", "ui/ux design", "data analysis"]
    const [selectedFilter, setSelectedFilter] = useState<Filter>("all")

    const [display, setDisplay] = useState<Array<ProjectDetails>>(projectData)

    const selectFilter = (filter : Filter) => {
        setSelectedFilter(filter)
        if (filter === "all"){
            setDisplay(projectData)
        }
        else{
            const newDisplay = projectData.filter((pd) => pd.category.toLowerCase() === filter)
            setDisplay(newDisplay)
        }
    }
    
    return (
        <div>
            <h1>Projects</h1>
            <p className="text2"><em>some fun projects i worked on :)</em></p>

            <div className="filter-panel">
                {allFilters && allFilters.map((filter, index) => 
                    <div
                        key={index}
                        className={selectedFilter === filter ? "filter-button-wrapper selected" : "filter-button-wrapper"}
                        onClick={() => selectFilter(filter)}
                    >
                        <p className="filter-button-text">{filter}</p>
                    </div>
                )}
            </div>

            <div className="project-card-container">
                {display && display.map((pd, index) =>
                    <ProjectCard key={index} number={index+1} {...pd}/>
                )}
            </div>

        </div>
    )
}

export default Projects