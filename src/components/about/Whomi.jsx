import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profilePhoto from '../../assets/images/profile.jpeg';

function Whoami() {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const isImageInView = useInView(imageRef, { once: false, amount: 0.3 });
    const isTextInView = useInView(textRef, { once: false, amount: 0.3 });

    return (
        <div className="flex justify-center px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full items-center">

                <div className="flex justify-center" ref={imageRef}>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="rounded-full w-48 h-48 object-cover border-1 border-red-950 shadow-2xl shadow-red-800/50"
                        src={profilePhoto}
                        alt="Foto de Perfil"
                    />
                </div>

                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl font-[Roboto] p-5 text-md sm:text-xl md:text-1xl lg:text-2xl text-justify"
                >
                    <p>
                        Muito prazer, me chamo <span className="text-red-800">Nathan Cardoso</span>. Sou estudante de Tecnologia da Informação pela UFERSA, <em className="text-red-800">Desenvolvedor Back-end</em> e entusiasta a <em className="text-red-800">Pentester</em>. Tenho interesse nas áreas de Desenvolvimente de Software e Cybersegurança.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Whoami;
