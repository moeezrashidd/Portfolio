import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import MainCompText from "./subComp/mainCompText";
import { skillTxt, skills } from "../data/data";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
function Skills() {


    return (
        <>
            <div id="Services">

            <MainCompText data={skillTxt} />


            <div className="skills-container flex justify-center items-center flex-wrap gap-5 mt-1 overflow-hidden pb-3 ">
                {skills.map((item, index) => {

                    const Icon = item.logo
                    return <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                    key={index}>
                        <Tilt  >
                            <span className={`flex justify-center mt-3 items-center flex-col gap-6 cursor-pointer ${item.color}  sm:text-xl `}><Icon className={`sm:text-7xl text-4xl ${item.color}`} /> {item.name}</span>
                        </Tilt>
                    </motion.div>

                })}

            </div>
                    </div>
        </>
    )
}

export default Skills
