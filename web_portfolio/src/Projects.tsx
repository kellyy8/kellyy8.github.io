import {useState, useEffect} from "react"
import { projectData, ProjectDetails } from "./data"
import Footer from "./Footer"
import "./Projects.css"

type ProjectCardProps = ProjectDetails & {
    number?: number,
    handleShow?: any,
    handleClose?: any,
}

function ProjectCard(props : ProjectCardProps) {
    return(
        <div className="project-wrapper" onClick={props.handleShow}>
            <img className="project-logo" src={props.image} width="100%" height="auto"/>
            <div className="project-details-wrapper">
                <p className="text1 number">{props.number && props.number < 10 ? '0' : ''}{props.number}</p>
                <div className="project-details">
                    <p className="text2">{props.title}</p>
                    <p className="text3">{props.tools}</p>
                </div>
            </div>
        </div>
    )
}

function ProjectModal(props : ProjectCardProps) {
    return(
        <div className="modal-wrapper">
            <p className="modal-close text1" onClick={props.handleClose}>X</p>
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
                        {props.links && props.links.map((item, index) => 
                            <>
                                <a href={item[1]} key={index}>{item[0]}</a>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

type ProjectFilter = "all" | "software development" | "ui/ux design" | "data analysis"

function Projects() {
    const allFilters : Array<ProjectFilter> = ["all", "software development", "ui/ux design", "data analysis"]
    const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("all")

    const [display, setDisplay] = useState<Array<ProjectDetails>>(projectData)

    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalData, setModalData] = useState<ProjectDetails | undefined>(undefined)
    const handleShow = (pd : ProjectDetails) => {
        setModalData(pd)
        setShowModal(true)
    }
    const handleClose = () => {
        setModalData(undefined)
        setShowModal(false)
    }

    const selectFilter = (filter : ProjectFilter) => {
        setSelectedFilter(filter)
        if (filter === "all"){
            setDisplay(projectData)
        }
        else{
            const newDisplay = projectData.filter((pd) => pd.category.toLowerCase() === filter)
            setDisplay(newDisplay)
        }
    }
    
    // Disable interactions for items behind the modal when modal is open.
    useEffect(() => {
        if(showModal){
            document.body.classList.add("no-interaction")
        }
        else{
            document.body.classList.remove("no-interaction")
        }
    }, [showModal])

    return (
        <>
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

            {showModal && modalData && 
            <>
                <div className={showModal ? 'modal-overlay' : ''} onClick={handleClose}></div>
                <div className={showModal ? 'fade-in' : 'fade-out'}>
                    <ProjectModal
                        handleClose={handleClose}
                        {...modalData}
                    />
                </div>
            </>
            }

            <div className="project-card-container">
                {display && display.map((pd, index) =>
                    <ProjectCard
                        handleShow={() => handleShow(pd)}
                        key={index}
                        number={index+1}
                        {...pd}
                    />
                )}
            </div>

            <Footer />
        </>
    )
}

export default Projects