import MainCompText from './subComp/mainCompText';
import { aboutTxt } from '../data/data';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiGithub, FiLinkedin, FiBookOpen, FiCode, FiUsers, FiZap, FiTarget } from 'react-icons/fi';

function About() {

    const education = [
        {
            degree: "BSSE",
            institution: "University of Engineering & Technology, Lahore",
            duration: "2025 – Present",
            detail: "CGPA: 3.4 / 4.00"
        },
        {
            degree: "ICS (Intermediate)",
            institution: "BISE Gujranwala",
            duration: "2023 – 2025",
            detail: "Marks: 1030/1200 — 85%"
        },
        {
            degree: "Matriculation",
            institution: "BISE Gujranwala",
            duration: "2021 – 2023",
            detail: "Marks: 944/1100 — 85%"
        }
    ];

    const strengths = [
        { icon: FiCode, label: "Clean Code", desc: "Writing efficient, maintainable, and well-structured code" },
        { icon: FiTarget, label: "Problem Solving", desc: "Strong logic-building and analytical thinking skills" },
        { icon: FiZap, label: "Fast Learner", desc: "Self-motivated with ability to pick up new technologies quickly" },
        { icon: FiUsers, label: "Team Player", desc: "Excellent communication and collaboration abilities" },
    ];

    return (
        <>
            <div id='aboutUs' className="py-6">

                <MainCompText data={aboutTxt} />

                {/* Main About Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">

                    {/* Left Column — Bio & Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-3 space-y-6"
                    >
                        {/* Bio Card */}
                        <div className="bg-[#262629] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-5">
                            <div className="space-y-1">
                                <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent">
                                    Moeez Rashid
                                </h2>
                                <p className="text-indigo-400 font-semibold text-sm sm:text-base">Full-Stack Developer</p>
                            </div>

                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Full-stack developer passionate about building responsive, modern web applications with clean architecture on both frontend and backend. Strong foundation in programming fundamentals, object-oriented programming, and database design from coursework, applied through real project work.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Strong problem-solving and logic-building skills with a focus on writing clean, efficient, maintainable code. Currently pursuing a <span className="text-white font-medium">BSSE at the University of Engineering and Technology, Lahore</span>.
                            </p>

                            {/* Contact Details */}
                            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-gray-800">
                                <a href="mailto:moeezrashidd@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 text-xs sm:text-sm transition-colors">
                                    <FiMail size={14} />
                                    <span>moeezrashidd@gmail.com</span>
                                </a>
                                <span className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                                    <FiMapPin size={14} />
                                    <span>UET, Lahore</span>
                                </span>
                                <a href="https://github.com/moeezrashidd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 text-xs sm:text-sm transition-colors">
                                    <FiGithub size={14} />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/moeez-rashid-246201354/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 text-xs sm:text-sm transition-colors">
                                    <FiLinkedin size={14} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        {/* Core Strengths Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {strengths.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className="bg-[#262629]/60 border border-gray-800 hover:border-indigo-500/30 rounded-xl p-5 space-y-2 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                                                <Icon className="text-indigo-400" size={18} />
                                            </div>
                                            <h4 className="font-bold text-white text-sm">{item.label}</h4>
                                        </div>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column — Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Education Card */}
                        <div className="bg-[#262629] border border-gray-800 rounded-2xl p-6 space-y-5">
                            <h3 className="text-lg font-bold text-indigo-300 flex items-center gap-2 border-b border-gray-800 pb-3">
                                <FiBookOpen size={18} />
                                <span>Education</span>
                            </h3>
                            <div className="space-y-5">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-5 border-l-2 border-indigo-600/40 space-y-1">
                                        <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-indigo-500" />
                                        <h4 className="text-white font-bold text-sm">{edu.degree}</h4>
                                        <p className="text-gray-400 text-xs">{edu.institution}</p>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-gray-500 text-[11px]">{edu.duration}</span>
                                            <span className="text-indigo-400 text-[11px] font-semibold">{edu.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default About
