import { rectangle1, add, triangle, circle, vector, frame, rectangle2, imgBG, my } from "../assets"
import { useState } from "react";
import { motion } from "framer-motion"
function Hero() {

    const [loading, setLoading] = useState(true);
    return (
        <>
            
            <div className="container flex justify-between items-center flex-col gap-5 md:flex-row  mx-auto  md:my-14">
                <img src={rectangle1} alt="" className="absolute -left-12  z-0 top-0 " />
                <img src={rectangle2} alt="" className="absolute top-0 right-0 z-0" />

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                 className="Hero-text flex flex-col w-full md:w-2/5 gap-7 py-4 z-40 h-full justify-center items-center md:items-start  "  >
                    <h1 className="text-4xl md:text-6xl tracking-wide font-extrabold text-center md:text-left ">Bluid Your Awesome Websites </h1>
                    <p className="text-[#E7E7E7] text-justify ">Dev in Dark provides top-quality web development services with an exceptional experience across various technologies. We deliver projects on time, meet all requirements, and ensure 100% client satisfaction.</p>
                    <span className="service-btn w-32  bg-[#5454D4] border border-[#5454D4]  p-2 cursor-pointer hover:border-[#E7E7E7] rounded-lg">
                        Our Service &#8599;
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                 className="photo md:w-1/2 w-full  h-full py-4  relative flex justify-center items-center flex-col z-50 ">
                    <img src={vector} alt="" className="absolute top-0  left-0" />
                    <img src={circle} alt="" className="absolute right-0 top-0 " />
                    <img src={triangle} alt="" className="absolute md:-left-10 bottom-0 sm:-bottom-3 -left-4" />
                    <img src={add} alt="" className="absolute bottom-0 -right-2 sm:right-6" />
                    <img src={frame} alt="" className="" />

                    <div className="my-img   sm:w-[256px] sm:h-[245px] w-[220px] h-[220px] absolute  sm:top-20  rotate-[24.2deg] rounded-2xl sm:ml-8 bg-cover overflow-hidden   " style={{ backgroundImage: `url(${imgBG})` }}>

                        <motion.div initial={{ opacity: 1, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: "easeIn" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >   {loading && (
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 z-20">
                                <div className="loader"></div>
                            </div>
                        )} 
                            <img src={my} alt="" className="rounded-2xl rotate-[-24.2deg]  sm:w-[276px] w-full ml-4 " onLoad={() => setLoading(false)} /></motion.div>
                    </div>


                </motion.div>

            </div>

        </>
    )
}

export default Hero
