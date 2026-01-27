import Filtertabs from "../components/Filtertabs";
import XpCard from "../components/XpCard";
import XpGallery from "../components/XpGallery";

function Experience(){
  

    return(
        <section className="min-h-screen bg-[#909EAE] rounded-t-4xl relative z-10 -mt-8 px-10 py-10 border-t-5 border-[#F1E9D2] text-[#F1E9D2]">
             <div className="flex flex-col space-y-6 mx-5 ">
                <h1 className="text-5xl md:text-8xl font-bold [text-stroke:1px_black]">Where ive done it</h1>
                
            </div>
          <XpGallery/>

        </section>
    )
}

export default Experience;