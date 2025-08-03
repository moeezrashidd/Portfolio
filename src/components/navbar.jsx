import { logo } from '../assets';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Nav() {
    const items = [{
        section: 'Home',
        id: 'home'
    },
    {
        section: 'About us',
        id: 'aboutUs'
    },
    {
        section: 'Our projects',
        id: "ourProjects"
    },
    {
        section: 'Services',
        id: 'Services'
    }];
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                className="z-50  mt-12  flex justify-between items-center relative  max-w-7xl ">

                <div className="logo flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-12 h-12 rounded-3xl border border-black" />
                    <span className="text-white font-semibold sm:text-xl  ">Moeez Rashid</span>
                </div>



                <div className="options md:flex gap-6 flex-row items-center  hidden  ">
                    {items.map((item, index) => (
                        <span
                            key={index}
                       
                            className="text-gray-300 hover:text-indigo-500 text-base cursor-pointer transition-colors duration-200 hover:borderindigo-500 hover:border-b-2  "
                        >
                            <a href={`#${item.id}`}>{item.section}</a>
                        </span>
                    ))}
                </div>



                <div className=" flex gap-2 items-center ">
                    <span
                        onClick={toggleMenu}
                        className="text-white md:px-7 px-2 py-1 rounded-md border border-white  md:hidden"
                    >
                        {!isOpen ? <IoMdMenu /> : <IoMdClose />}
                    </span>
                    <span className='contact text-[#E7E7E7] border border-[#E7E7E7] md:px-7 px-2 py-1 rounded-lg cursor-pointer hover:border-indigo-500  '
                        onClick={() => window.location.href = `#Contact`}
                    >   Contact</span>
                </div>
            </motion.div>

 
            {isOpen && (<div className="relative -right-[10%] top[10%] md:hidden  w-full">


                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 100, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: 100, y: -40 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[110%]  w-1/2 bg-gray-900 shadow-md mt-2 z-50 p-4 flex flex-col gap-2"

                        >
                            {items.map((item, index) => (
                                <span
                                    key={index}
                                    className="text-gray-300  hover:text-indigo-500 text-base cursor-pointer transition-colors duration-200 border-b border-gray-700 pb-1"
                                    onClick={() => window.location.href = `#${item.id}`}
                                >
                                    {item.section}
                                </span>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>)}

        </>
    );
}

export default Nav;
