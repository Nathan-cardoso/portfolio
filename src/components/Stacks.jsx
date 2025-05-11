import { motion } from "framer-motion";
import  pythonLogo  from "../assets/images/stacks/python.svg";
import  nodeLogo  from "../assets/images/stacks/node.svg";
import  postgresLogo  from "../assets/images/stacks/postgres.svg";
import  djangoLogo  from "../assets/images/stacks/django.svg";
import  awsLogo  from "../assets/images/stacks/aws.svg";
import { div } from "framer-motion/client";

const logos = [pythonLogo, djangoLogo, ,nodeLogo, postgresLogo, awsLogo];

function Stacks() {
  return (
    <div >
        <h3 className="font-[Ubuntu_Mono] text-3xl text-center p-10 text-red-800">Stacks</h3>
        <div className="flex flex-wrap justify-center gap-6 p-10">
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo}
          alt="Stack logo"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          animate={{
            y: [0, -8, 0], 
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2, 
          }}
        />
      ))}
    </div>
    </div>
  );
}

export default Stacks;
