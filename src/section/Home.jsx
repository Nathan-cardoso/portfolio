import background from "../assets/images/background.svg";
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div id="Home" className="relative flex flex-col items-center justify-center h-screen px-4 overflow-hidden">
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-15"
                style={{ backgroundImage: `url(${background})` }}
            ></div>

            <h1 className="bg-[#0a0a0a] rounded-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center font-[Merriweather] z-10">
                Nathan Cardoso
            </h1>
            <h3 className="bg-[#0a0a0a] rounded-2xl font-bold text-center mt-4 font-[Ubuntu_Mono] text-xl sm:text-3xl md:text-3xl lg:text-4xl z-10">
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
