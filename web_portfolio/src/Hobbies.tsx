import {useState} from "react"
import "./Hobbies.css"
import "./Projects.css"  // TODO: Remove import and move shared styles into index.css
import { HobbyDetails, hobbyData } from "./data"

type HobbyFilter = "dance" | "graphic design" | "videography"

// For graphic design category only.
function GraphicDesignCard({title, image} : HobbyDetails) {
    return(
        <div className="gd-wrapper">
            <img className="gd-image" src={image} width="100%" height="auto"/> {/** TODO: Make image enlargeable! */}
            <p className="text2">{title}</p>
        </div>
    )
}

function DanceVidCard({title, link} : HobbyDetails) {
    return(
        <div className="dv-wrapper">
            {/** TODO: Embed video via `link` that can be played small and full screen. */}
            <p className="text2">{title}</p>
        </div>
    )
}

function Hobbies() {
    const allFilters : Array<HobbyFilter> = ["dance", "graphic design", "videography"]
    const [selectedFilter, setSelectedFilter] = useState<HobbyFilter>("dance")

    const [display, setDisplay] = useState<Array<HobbyDetails>>(hobbyData)

    const selectFilter = (filter : HobbyFilter) => {
        setSelectedFilter(filter)
        const newDisplay = hobbyData.filter((hd) => hd.category.toLowerCase() === filter)
        setDisplay(newDisplay)
    }

    return(
        <>
            <h1>Hobbies</h1>
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

            <div className="hobbies-container">
                {/** Container for hobbies. */}
                {selectedFilter === "graphic design" && display &&
                    display.map((gd, index) => 
                        <GraphicDesignCard key={index} {...gd}/>
                    )
                }

                {/** TODO: Container for dance and videography. */}
                {selectedFilter !== "graphic design" && display && 
                    display.map((dv, index) => 
                        <DanceVidCard key={index} {...dv} />
                    )
                }
            </div>
        </>
    )
}

export default Hobbies