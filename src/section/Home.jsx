import background from "../assets/images/background.svg";
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div id="Home" className="relative flex flex-col items-center justify-center h-screen px-4 overflow-hidden">
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-15"
                style={{ backgroundImage: `url(${background})` }}
            ></div>

            <h2 className="bg-[#0a0a0a] rounded-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center font-[Roboto] z-10">
                Olá, eu sou Nathan Cardoso
            </h2>
            <h3 className="bg-[#0a0a0a] rounded-2xl font-bold text-center mt-4 font-[Ubuntu_Mono] text-xl sm:text-3xl md:text-4xl lg:text-5xl z-10">
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
