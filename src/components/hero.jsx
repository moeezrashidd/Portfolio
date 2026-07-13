import { rectangle1, add, triangle, circle, vector, frame, rectangle2, imgBG, my } from "../assets"
import { useState } from "react";
import { motion } from "framer-motion"
function Hero() {

    const [loading, setLoading] = useState(true);
    return (
        <>
            
            <div className="relative flex justify-between items-center flex-col gap-5 lg:flex-row w-[calc(100%+16px)] sm:w-[calc(100%+128px)] -mx-2 sm:-mx-16 px-6 sm:px-12 min-h-[calc(100vh-4rem)] lg:min-h-screen py-10 lg:py-0 overflow-hidden">
                <img src={rectangle1} alt="" className="absolute left-0 z-0 top-0 max-w-[50%] md:max-w-full opacity-50 md:opacity-100 pointer-events-none" />
                <img src={rectangle2} alt="" className="absolute top-0 right-0 z-0 max-w-[50%] md:max-w-full opacity-50 md:opacity-100 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  className="Hero-text flex flex-col w-full lg:w-1/2 gap-5 py-4 z-40 h-full justify-center items-center lg:items-start"  >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide font-extrabold text-center lg:text-left leading-tight max-w-lg">Hi, I'm Moeez Rashid, a <span className="text-[#5454D4]">Full-Stack Developer</span></h1>
                    <p className="text-[#E7E7E7] text-center lg:text-left text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">Full-stack developer with hands-on experience in React, Django & Django REST Framework, building responsive modern UIs with Tailwind CSS and robust backend APIs. Currently pursuing BSSE at the University of Engineering and Technology, Lahore — focused on writing clean, efficient, and maintainable code.</p>
                    <a href="#Contact" className="service-btn w-32 bg-[#5454D4] border border-[#5454D4] p-2 text-center text-xs sm:text-sm cursor-pointer hover:border-[#E7E7E7] rounded-lg">
                        Get in Touch &#8599;
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                 className="photo lg:w-1/2 w-full h-full py-4 relative flex justify-center items-center flex-col z-50">
                    <img src={vector} alt="" className="absolute top-0  left-0" />
                    <img src={circle} alt="" className="absolute right-0 top-0 " />
                    <img src={triangle} alt="" className="absolute md:-left-10 bottom-0 sm:-bottom-3 -left-4" />
                    <img src={add} alt="" className="absolute bottom-0 -right-2 sm:right-6" />

                    <div className="relative flex justify-center items-center w-[210px] h-[200px] sm:w-[276px] sm:h-[265px] my-6">
                        {/* 3D Offset Line Outline (Frame) */}
                        <div className="absolute inset-0 border-2 border-white/20 rounded-3xl translate-x-3 translate-y-3"></div>

                        {/* Image Container with vertical alignment */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#2A2A2E]/80 to-[#1E1E20]/90 border border-white/10">
                            <motion.div 
                                initial={{ opacity: 1, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, ease: "easeIn" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="w-full h-full relative"
                            >
                                {loading && (
                                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 z-20">
                                        <div className="loader"></div>
                                    </div>
                                )} 
                                <img src={my} alt="" className="absolute w-full h-full object-cover object-bottom" onLoad={() => setLoading(false)} />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>

        </>
    )
}

export default Hero
