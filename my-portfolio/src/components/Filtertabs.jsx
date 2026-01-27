function FilterTabs({selected, onChange, style, styleTabs}) {
    const tabs = ['All', 'research', 'projects', 'Experience'];
    return(
        <div className={`flex gap-4 justify-center my-6 flex-wrap ${style}`}>
            {tabs.map((tab) =>{
                return(
                <button
                key={tab}
                onClick={()=> onChange(tab)}
                className={`px-4 py-2 m-2 text-xl rounded-full border-3 ${styleTabs} ${selected === tab ? 'bg-[#909EAE] text-[#F1E9D2]' : 'bg-[#F1E9D2] text-[#909EAE]' } hover:scale-105 transition-transform duration-300`}
                >
                {tab}
                </button>
                )
            })}
        </div>    
    )
}

export default FilterTabs