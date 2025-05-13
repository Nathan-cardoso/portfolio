import Cards from "../components/projects/Cards";

function Projects(){
    return(
        <div id="Projects" className="min-h-screen pt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-[Ubuntu_Mono] text-red-600 p-20">Meus projetos</h2>
            <Cards/>
        </div>
    )
}

export default Projects;