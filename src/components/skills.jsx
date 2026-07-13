import { motion } from "framer-motion";
import { skillTxt, skillCategories } from "../data/data";
import MainCompText from "./subComp/mainCompText";

function SkillCard({ skill, index }) {
    const Icon = skill.logo;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="bg-gray-900/60 border border-gray-800 hover:border-indigo-500/40 rounded-xl p-4 flex flex-col items-center text-center gap-2 w-[130px] sm:w-[145px] transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1d] border border-gray-800 flex items-center justify-center">
                <Icon className={`text-2xl sm:text-3xl ${skill.color}`} aria-hidden="true" />
            </div>
            <h4 className="text-white font-semibold text-xs sm:text-sm leading-tight">{skill.name}</h4>
            <p className="text-gray-400 text-[10px] sm:text-xs leading-snug line-clamp-2">{skill.desc}</p>
        </motion.div>
    );
}

function Skills() {
    return (
        <div id="Services" className="py-10 px-4">
            <MainCompText data={skillTxt} />

            <div className="space-y-8 mt-2">
                {skillCategories.map((category, catIdx) => {
                    const CategoryIcon = category.icon;

                    return (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className="bg-[#262629] border border-gray-800 rounded-2xl p-5 sm:p-6"
                        >
                            <h3 className="text-base sm:text-lg font-bold text-indigo-300 flex items-center gap-2 mb-5 pb-3 border-b border-gray-800">
                                <CategoryIcon size={18} />
                                <span>{category.title}</span>
                            </h3>

                            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                                {category.skills.map((skill, idx) => (
                                    <SkillCard key={skill.name} skill={skill} index={idx} />
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;
