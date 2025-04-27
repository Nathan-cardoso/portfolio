function About() {
  return (
    <div id="About" className="h-screen bg-black ">
      <h2 className="text-5xl text-center">Sobre Mim</h2>

      <div className="text-center flex flex-col items-center justify-center rounded-lg  ">
        <div className="bg-[#0a0a0a] sm:w-sm md:w-md lg:w-lg">
          <p>
            This is a simple React application that demonstrates the use of
            components, state management, and routing.
          </p>
          <p>
            The application is built using React and uses React Router for
            navigation between different sections.
          </p>
        </div>
      </div>

    </div>
  );
}
export default About;  