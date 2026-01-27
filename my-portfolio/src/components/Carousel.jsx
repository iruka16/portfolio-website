import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Carousel({ projects }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prev = () => setCurrentIndex(i=> Math.max(i-1, 0));
    const next = () => {
        if (currentIndex < projects.length -1){
        setCurrentIndex(i => i+1)}
        else{
        setCurrentIndex(0)}
    }
    return (
        <div className="relative flex items-center justify-center w-full overflow-hidden">
            <button onClick={prev} className="absolute left-0 z-10 p-4 md:text-8xl  rounded-full">⟵</button>
         <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map(project =>(
                  <div key={project.id} className="min-w-full px-6 py-4 flex justify-center">
                <ProjectCard {...project}/>
                </div>
            ))}
         </div>

            <button onClick={next} className="absolute right-0 z-10 p-4 md:text-8xl  rounded-full">⟶</button>
        </div>

    )
}
export default Carousel   
