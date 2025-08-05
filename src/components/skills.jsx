import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { skillTxt, skills } from "../data/data";
import MainCompText from "./subComp/mainCompText";

function Skills() {
    return (
        <div id="Services" className="py-10 px-4">
            <MainCompText data={skillTxt} />

            <div className="skills-container flex justify-center items-center flex-wrap gap-5 mt-1 overflow-visible pb-3">
                {skills.map((item, index) => {
                    const Icon = item.logo;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                        >
                            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                                <span
                                    className={`flex justify-center items-center flex-col gap-2 cursor-pointer ${item.color} text-center`}
                                >
                                    <Icon
                                        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${item.color}`}
                                        aria-label={item.name}
                                    />
                                    <span className="text-sm sm:text-base">{item.name}</span>
                                </span>
                            </Tilt>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;
