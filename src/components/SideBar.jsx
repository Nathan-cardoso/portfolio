import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaCode, FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: '#Home', label: 'Início', icon: <FaHome /> },
        { href: '#About', label: 'Sobre mim', icon: <IoIosContact /> },
        { href: '#Projects', label: 'Projetos', icon: <FaCode /> },
        { href: '#Contact', label: 'Contato', icon: <MdOutlineEmail /> },
    ];

    if (windowWidth >= 900) {
        return (
            <div className="flex flex-col bg-black border border-red-950 h-[80%] w-[5.5rem] rounded-e-2xl fixed left-0 top-1/2 transform -translate-y-1/2 z-10">
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map(({ href, icon }) => (
                        <a href={href} className="text-red-700 text-2xl hover:text-white transition duration-300" key={href}>
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    if (windowWidth > 480 && windowWidth < 900) {
        return (
            <div className="font-[Ubuntu_Mono] fixed top-0 left-0 w-full bg-black z-20 shadow-md px-4 py-2 justify-center space-x-10 flex">
                {navLinks.map(({ href, label }) => (
                    <a href={href} className="text-red-700 text-lg sm:text-2xl hover:text-white transition duration-300" key={href}>
                        {label}
                    </a>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full bg-black z-20 shadow-md px-4 py-2 flex items-center justify-center">
                <button onClick={toggleMenu} className="text-white text-3xl cursor-pointer hover:text-red-700 transition duration-300">
                    <FiMenu />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-0 left-0 w-full bg-black z-10 overflow-hidden rounded-t-2xl"
                    >
                        <div className="flex flex-col items-center py-4 space-y-4">
                            {navLinks.map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={toggleMenu}
                                    className="text-white text-lg font-bold hover:text-red-700 transition duration-300"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default SideBar;
