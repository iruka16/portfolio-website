function CategoryCard({ title, description, icon,level1, level2,level3, number, bigDiv }) {
    return (
        <div className= {`flex flex-row justify-end mx-10 md:justify-between ${bigDiv}`}>
                <h2 className="text-2xl mx-2 md:mt-0 md:text-5xl md:w-[50%]">({number})</h2>
        <div className="md:flex md:flex-col text-right md:w-[50%]" >
                    <h2 className="text-2xl mb-4 md:text-5xl">{title}</h2>
                    <p className="w-full text-right ">{description}</p>
                    <p className="mt-8 shadow-inner shadow-[#bfb7a1] px-5 py-5 text-lg text-center md:text-2xl  bg-[#F1E9D2] text-[#909EAE] font-extrabold  p-2 rounded-lg hover:-translate-x-5 transition-transform duration-300 border-black">{level1}</p>
                    <p className="mt-2 text-lg text-center md:text-2xl  bg-[#F1E9D2] text-[#909EAE] font-extrabold hover:-translate-x-5 transition-transform duration-300  p-2 rounded-lg border-black ">{level2}</p>
                    <p className="mt-2 text-lg text-center md:text-2xl  bg-[#F1E9D2] text-[#909EAE] font-extrabold hover:-translate-x-5 transition-transform duration-300  p-2 rounded-lg border-black ">{level3}</p>
                </div>
                </div>
    )
}

export default CategoryCard; 