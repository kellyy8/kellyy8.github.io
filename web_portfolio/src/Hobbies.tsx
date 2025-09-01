import { useState, useEffect } from "react"
import { SmallFlowerLineArt } from "./FlowerLineArt"
import { HobbyDetails, hobbyData } from "./data"
import NavBar from './NavBar'
import Footer from "./Footer"
import "./Hobbies.css"

type HobbyFilter = "dance" | "graphic design" | "videography"

// For graphic design category only.
type GraphicDesignProps = HobbyDetails & {
    handleShow? : any;
    handleClose? : any;
}

function GraphicDesignCard({title, image, handleShow} : GraphicDesignProps) {
    return(
        <div className="gd-wrapper">
            <img
                className="gd-image"
                src={image}
                width="100%"
                height="auto"
                onClick={handleShow}
            />
            <p className="text2">{title}</p>
        </div>
    )
}

function GraphicDesignModal({image, handleClose} : GraphicDesignProps){
    return(
        <div className="gd-modal-wrapper">
            <p className="text1 gd-close" onClick={handleClose}>X</p>
            <img className="gd-modal-image" src={image} width="100%" height="auto"/>
        </div>
    )
}

function DanceVidCard({title, link} : HobbyDetails) {
    return(
        <div className="dv-wrapper">
            <iframe
                width="90%"
                height="315"
                src={link}
                title={title}
                style={{border: "none"}}
                allowFullScreen
            />
            <p className="text2">{title}</p>
        </div>
    )
}

function Hobbies() {
    const allFilters : Array<HobbyFilter> = ["dance", "graphic design", "videography"]
    const [selectedFilter, setSelectedFilter] = useState<HobbyFilter>("dance")

    const [display, setDisplay] = useState<Array<HobbyDetails>>(
        hobbyData.filter((hd) => hd.category.toLowerCase() === "dance")
    )

    const selectFilter = (filter : HobbyFilter) => {
        setSelectedFilter(filter)
        const newDisplay = hobbyData.filter((hd) => hd.category.toLowerCase() === filter)
        setDisplay(newDisplay)
    }

    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedGD, setSelectedGD] = useState<HobbyDetails | undefined>(undefined)
    const handleShow = (gd : HobbyDetails) => {
        setSelectedGD(gd)
        setShowModal(true)
    }
    const handleClose = () => {
        setSelectedGD(undefined)
        setShowModal(false)
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

    return(
        <>
            <NavBar />
            
            <div className="page-header">
                <SmallFlowerLineArt />
                <h1>hobbies</h1>
                <SmallFlowerLineArt />
            </div>
            
            <p className="text2"><em>some cool things i created with some really cool people :)</em></p>
            
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

            {showModal && selectedGD &&
                <div className="gd-modal-portal">
                    <div className={showModal ? 'gd-modal-overlay' : ''} onClick={handleClose}></div>
                    <div className={showModal ? 'fade-in' : 'fade-out'}>
                        <GraphicDesignModal
                            handleClose={handleClose}
                            {...selectedGD}
                        />
                    </div>
                </div>
            }

            {/** Display for hobbies. */}
            {selectedFilter === "graphic design" && display &&
                <div className="gd-container">
                    {display.map((gd, index) => 
                        <GraphicDesignCard
                            key={index}
                            handleShow={() => handleShow(gd)}
                            {...gd}
                        />
                    )}
                </div>
            }
            
            {/** Display for dance and videography. */}
            {selectedFilter !== "graphic design" && display && 
                <div className="non-gd-container">
                    {display.map((dv, index) => 
                        <DanceVidCard key={index} {...dv} />
                    )}
                </div>
            }

            <Footer />
            
        </>
    )
}

export default Hobbies