import { useState } from "react"
import FilterTabs from "./Filtertabs";
import Carousel from "./Carousel";
import { projects } from "../data/projects";

function XpGallery() {
    const [selectedTab, setSelectedTab] = useState("All");

    const filteredTab = selectedTab === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedTab)
    return(
        <div className="w-full max-w-6xl mx-auto px-4">
            <FilterTabs selected={selectedTab} onChange={setSelectedTab} style={"justify-center md:justify-start mb-10 "} styleTabs={"md:text-4xl"}/>
            <Carousel projects={filteredTab}/>
        </div>
    )
}

export default XpGallery;