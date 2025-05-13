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
                        className="rounded-full w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover border-1 border-red-950 shadow-2xl shadow-red-800/50"
                        src={profilePhoto}
                        alt="Foto de Perfil"
                    />
                </div>

                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl font-[Roboto] p-5 text-md md:text-lg lg:text-xl text-justify"
                >
                    <p>
                        Muito prazer, me chamo <span className="text-red-500">Nathan Cardoso</span>. Sou <em className="text-red-500">Desenvolvedor Back-end</em> na Alto Tech Juniores, estudante de Tecnologia da Informação pela UFERSA e freelancer.
                        <br /><br />
                        Tenho experiência prática com as linguagens <span className="text-red-500">Python</span> e <span className="text-red-500">JavaScript</span>, trabalhando com frameworks robustos como <span className="text-red-500">Django Rest Framework</span> e <span className="text-red-500">Node.js</span>. Além disso, pude trabalhar com o SGBD <span className='text-red-500'>PostgreSQL</span>  e possuo noções em <span className="text-red-500">cloud computing</span>, com foco em serviços da AWS, como EC2, Amplify, S3, Route 53, entre outros.
                        <br /><br />
                        Estou sempre em busca de novos desafios que me permitam evoluir como desenvolvedor e expandir minhas habilidades. Gosto de compartilhar conhecimento, pois isso me motiva a aprender ainda mais. Por fim, não apenas gosto de desenvolver, mas também sou um entusiasta da área de cibersegurança.

                    </p>


                </motion.div>
            </div>
        </div>
    );
}

export default Whoami;
