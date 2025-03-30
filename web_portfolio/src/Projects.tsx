import {useState} from "react"
import "./Projects.css"

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
            <p className="text2">some fun projects i got to work on :)</p>

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

        </div>
    )
}

export default Projects