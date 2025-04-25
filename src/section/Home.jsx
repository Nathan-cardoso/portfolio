import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-4">
            <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center font-[Roboto]">
                Olá, eu sou Nathan Cardoso
            </h2>
            <h3 className="font-bold text-center mt-4 font-[Ubuntu_Mono] text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                <TypeAnimation 
                    className="text-red-700"
                    sequence={["Desenvolvedor Back-end"]}
                    cursor={true}
                    speed={50}
                />
            </h3>
        </div>
    )
}

export default Home;