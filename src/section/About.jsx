import profileImage from '../assets/images/profile.jpeg';
import Whoami from '../components/Whomi';
import Stacks from '../components/Stacks';
function About() {
  return (
    <div id="About" className="h-screen bg-black">
      <h2 className="text-5xl text-center p-20">SOBRE MIM</h2>
        <Whoami />
        < Stacks />
    </div>
  );
}
export default About;  