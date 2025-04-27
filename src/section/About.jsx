import profileImage from '../assets/images/profile.jpeg';


function About() {
  return (
    <div id="About" className="h-screen bg-black">
      <h2 className="text-5xl text-center p-20">SOBRE MIM</h2>

      <div className='flex items-center justify-center'>
        <div className="bg-[#1a1a1a]  rounded-2xl font-[Roboto] text-justify p-5 w-3xl m-[25px] text-lg sm:w-sm sm:text-xl  md:w-xl md:text-2xl lg:w-3xl">
          <p>
            Muito prazer, me chamo <span className="text-red-800">Nathan Cardoso</span>. Sou estudante de Tecnologia da Informação pela UFERSA, <em className="text-red-800">Desenvolvedor Back-end</em> e entusiasta a <em className="text-red-800">Pentester</em>. Tenho interesse nas áreas de Desenvolvimente de Software e Cybersegurança.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;  