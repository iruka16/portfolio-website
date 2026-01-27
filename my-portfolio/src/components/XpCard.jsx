import kora2 from '../assets/kora2.png';

function XpCard({ title, location, description, level1, level2, level3, number }) {
    return (
        <div className="flex flex-col sm:flex-row bg-[#909EAE]  text-[#F1E9D2] p-4 shadow-lg w-full max-w-3xl mx-auto gap-4 ">
            <div className="flex flex-row ">
                 <img src={kora2} className="w-[30%] h-[80%] rounded-2xl m-4" alt={"Kora"} />
                 <div className=' flex flex-col'>
                    <p className="text-[#F1E9D2] text-xl ">{title}</p>
                    <p className="text-[#F1E9D2] ">{location}</p>
                 </div>
                 
            </div>
           <div className="text-[#F1E9D2]">
                    <p>{description}</p>
                 </div>
        </div>
    )
}

export default XpCard;
