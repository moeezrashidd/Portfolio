import { motion } from "framer-motion";
import { experiences } from '../data/data';
import ExperienceCard from "./subComp/ExperienceCard";




function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative py-20 px-4 md:px-12 "
        >
            <h2 className="text-4xl font-bold text-center mb-12 ">
                Experience
            </h2>

            <div className="relative max-w-6xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

                <div className="flex flex-col gap-16 justify-center items-center ">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard key={idx} data={exp} align={idx % 2 === 0 ? "left" : "right"} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;
