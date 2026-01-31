function Hogwarts () {
    return (
        <section className = "md:max-w-full min-h-screen bg-[#F1E9D2] text-[#909EAE] p-10">
            <header className ="w-full flex items-start justify-between items-center text-sm">
            <p className = "text-[#909EAE] font-bold text-lg hover:-translate-y-1 transition-transform duration-300">Software Developer and Engineer</p>
            <nav className="flex flex-col md:flex-row gap-6 text-lg">
                <a href="#projetcs" className="text-[#909EAE] font-bold hover:scale-185 transition-transform duration-400">Projects</a>
                <a href="#research"className="text-[#909EAE] font-bold hover:scale-185 transition-transform duration-400">Research</a>
                <a href="#about" className="text-[#909EAE] font-bold hover:scale-185 transition-transform duration-400">About</a>
                <a href="#contact" className="text-[#909EAE] font-bold hover:scale-185 transition-transform duration-400">Contact</a>
            </nav>
            </header>
            <div className="w-full flex flex-col justify-center mt-10">
                <h2 className="text-2xl md:text-3xl mb-0">HI im,</h2>
                <h1 className="text-6xl font-bold text-[#909EAE] leading-tight lg:text-[160px] md:mt-0 md:whitespace-nowrap [text-shadow:1px_1px_2px_black]">IRUKA ONWUBIKO</h1>
            </div>
             <div className="flex flex-col justify-center md:flex-row md:justify-between items-start  md:mt-10">
                <div className="flex flex-col space-y-6 justify-start">
                <p className="max-w-md text-2xl md:text-2xl text-[#909EAE] font-bold "> I build fast, smooth web apps and help turn “what if” ideas into real, working products that i would find useful and then hopefully people enjoy using.</p>
                <a href= "#contact"className =" w-[40%] text-center inline-block text-[#F1E9D2] font-bold border-[#909EAE] px-1 py-2 rounded-md bg-[#909EAE] hover:bg-[#F1E9D2] hover:text-[#909EAE] transition border-2">contact me (pls)</a>
                </div>
                <div className="mt-24 sm:mt-10 text-lg text-[#909EAE] font-bold text-center md:text-left">
                    <h2>CURRENTLY AVAILABLE:</h2>
                </div>
             </div>

        </section>
    )
}

export default Hogwarts