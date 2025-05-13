import profileImage from '../assets/images/profile.jpeg';
import Whoami from '../components/about/Whomi';
import Stacks from '../components/about/Stacks';
function About() {
  return (
    <div id="About" className="py-20 bg-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-[Ubuntu_Mono] text-red-600 p-20">SOBRE MIM</h2>
        <Whoami />
        < Stacks />
    </div>
  );
}
export default About;  