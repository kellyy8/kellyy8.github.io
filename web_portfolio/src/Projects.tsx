import {useState} from "react"
import "./Projects.css"
import vm from "../src/assets/logos_projects/vital_motion.png"

function ProjectCard() {
    return(
        <div className="project-wrapper">
            <img src={vm} width="100%" height="auto"/>
            <div className="project-details-wrapper">
                <p className="text2">01</p>
                <div className="project-details">
                    <p className="text2">NAME</p>
                    <p className="text3">TOOLS USED</p>
                </div>
            </div>
        </div>
    )
}

type Filter = "all" | "software development" | "ui/ux design" | "data analysis"

function Projects() {
    const allFilters : Array<Filter> = ["all", "software development", "ui/ux design", "data analysis"]
    const [selectedFilter, setSelectedFilter] = useState<Filter>("all")

    const selectFilter = (filter : Filter) => {
        setSelectedFilter(filter)
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
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>

        </div>
    )
}

export default Projects