import {useState} from "react"
// import {Link} from "react-router-dom"
import { projectData, ProjectDetails } from "./data"
import "./Projects.css"
import bh from "../src/assets/logos_projects/brewin_happiness.png"

type ProjectCardProps = ProjectDetails & {
    number: number,
    handleShow?: React.ReactEventHandler,
    handleClose?: React.ReactEventHandler,
}

function ProjectCard(props : ProjectCardProps) {
    return(
        <div className="project-wrapper" onClick={props.handleShow}>
            <img className="project-logo" src={props.image} width="100%" height="auto"/>
            <div className="project-details-wrapper">
                <p className="text1 number">{props.number < 10 ? '0' : ''}{props.number}</p>
                <div className="project-details">
                    <p className="text2">{props.title}</p>
                    <p className="text3">{props.tools}</p>
                </div>
            </div>
        </div>
    )
}

const sampleData = {
    number: 0,
    category: 'Data Analysis',
    subcategory: 'n/a',
    image: bh,
    title: "Brewin' Happiness",
    role: 'Web Designer, Data Analyst',
    tools: 'Figma, Tableau, OpenRefine',
    description: "With data visualization and analysis, 'Brewin' Happiness' explores how politics, technology, and wealth impact individual wellbeing. We used data from the World Happiness Report 2020 that was collected from 1,000 residents in each of the 153 selected countries.",
    links: [['Website', 'https://brewinhappiness.humspace.ucla.edu/']],
}

function ProjectModal(props : ProjectCardProps) {
    return(
        <div className="modal-wrapper">
            <p className="modal-close text2" onClick={props.handleClose}> X </p>
            <img className="modal-image" src={props.image} width="30%" height="30%"/>
            <div className="modal-right">

                <h1 className="modal-title">{props.title}</h1>
                <div className="modal-details-pair">
                    <p className="modal-details-label">Role:</p>
                    <p className="modal-details-content">{props.role}</p>
                </div>
                <div className="modal-details-pair">
                    <p className="modal-details-label">Tools:</p>
                    <p className="modal-details-content">{props.tools}</p>
                </div>
                <div className="modal-details-pair">
                    <p className="modal-details-label">Overview:</p>
                    <p className="modal-details-content">{props.description}</p>
                </div>
                <div className="modal-details-pair">
                    <p className="modal-details-label">More Info:</p>
                    <div className="modal-details-content">
                        {/** TODO: Use Link element. */}
                        {props.links && props.links.map((item, index) => 
                            <a href={item[1]} key={index}>{item[0]}</a>
                        )}
                    </div>
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

    const [show, setShow] = useState<boolean>(false)
    const handleShow = () => {setShow(true)}
    const handleClose = () => {setShow(false)}

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

            {show && <ProjectModal
                handleShow={handleShow}
                handleClose={handleClose}
                {...sampleData}
            />}

            <div className="project-card-container">
                {display && display.map((pd, index) =>
                    <ProjectCard
                        handleShow={handleShow}
                        handleClose={handleClose}
                        key={index}
                        number={index+1}
                        {...pd}
                    />
                )}
            </div>

        </div>
    )
}

export default Projects