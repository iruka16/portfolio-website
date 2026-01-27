import CategoryCard from "../components/CategoryCard"

function Houses(){
    return(
        <section className="bg-[#909EAE] text-[#F1E9D2] min-h-screen rounded-t-4xl overflow-hidden border-t-5 border-black pb-20">
            <div className="flex flex-col space-y-6 mx-10 my-10">
                <h1 className="text-9xl font-bold [text-stroke:1px_black]">What i can do</h1>
                <p className="italic w-[50%] ml-auto text-xl mt-10 mb-10">"I build full-stack apps that are fast, clean, and actually enjoyable to use. I like taking ideas from “what if” to “this is live,” and I usually handle everything from the UI to the back-end logic.
Right now, I’m open to working on interesting projects or joining a team that cares about building things well."</p>
            </div>
            <hr className="my-6 border-2 mx-12"/>
            <div className=" flex flex-row justify-end mx-10  md:mx-40 md:justify-between ">
                <h2 className="text-2xl mx-2 md:mt-0 md:text-5xl md:w-[50%]">(01)</h2>
                <div className="md:flex md:flex-col text-right md:w-[50%]" >
                    <h2 className="text-2xl mb-4 md:text-5xl">Full-Stack Development</h2>
                    <p className="w-full text-right ">Just like a restaurant needs both chefs and servers, great web apps need strong frontend and backend. I build both to turn ideas into real products.</p>
                    <p className="mt-8 text-lg text-center md:text-2xl  bg-[#F1E9D2] text-[#909EAE] font-extrabold  p-2 rounded-lg hover:-translate-x-5 transition-transform duration-300 border-black">[1st GEAR] :  React | Typescript | React native</p>
                    <p className="mt-2 text-lg text-center md:text-2xl  bg-[#F1E9D2] text-[#909EAE] font-extrabold hover:-translate-x-5 transition-transform duration-300  p-2 rounded-lg border-black ">[2nd GEAR] :  redux | APIs | SQl</p>
                    <p className="mt-2 text-lg text-center md:text-2xl  bg-[#F1E9D2] text-[#909EAE] font-extrabold hover:-translate-x-5 transition-transform duration-300  p-2 rounded-lg border-black ">[3rd GEAR] :  mobile | Web  | multi-tier </p>
                </div>
            </div>
             <hr className="my-6 border-2 mx-12"/>
             <CategoryCard title={"Engineering"} description={"I build full-stack apps that are fast, clean, and actually enjoyable to use. I like taking ideas from “what if” to “this is live,” and I usually handle everything from the UI to the back-end logic."} bigDiv={"mb-5 md:mx-40"} level1={"[1st GEAR] :  React | Node.js | Express | React native"} level2={"[2nd GEAR] :  postgres | Firebase | Docker | SupaBase"} level3={"[3rd GEAR] :   |  |  | "} number={"02"}/>
        </section>
    )

}


export default Houses