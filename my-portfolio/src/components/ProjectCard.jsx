function ProjectCard({ title, description, tags, image, style }) {
    return (
        <div className={`bg-[#F1E9D2] w-70 md:w-200 rounded-lg  text-[#F1E9D2] flex-col mx-auto items-center border-3 border-[#F1E9D2] ${style}`}>
            <img src={image} alt={title} className="w-full h-60 md:50  object-cover rounded-t-lg"/>
            <div className="p-4 flex h-50 flex-col  gap-2 md:w-150 md:h-60" >
                <div className="flex md:flex-row space-x-3">
                 <h2 className="text-2xl md:text-3xl text-[#909EAE]">{title}</h2>
                <div className="flex flex-row justify-center flex-wrap gap-2">
                {tags.map(tag =>(
                    <span key={tag} className="bg-[#D4C8B0] text-[#909EAE]  rounded-full px-3 py-1 mr-2">{tag}</span>
                ))}
                </div>

            </div>
            <p className="text-sm text-[#909EAE] text-left">{description}</p>
            </div>
            
        </div>
    )
}

export default ProjectCard;