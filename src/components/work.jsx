import { projectTxt } from "../data/data"
import MainCompText from "./subComp/mainCompText";
import { projects } from "../data/data";
import { useState, useEffect } from "react";
import ProjectCard from "./subComp/projectCard";
import { motion } from "framer-motion";


function Work() {
    const [recentProjects, setrecentProjects] = useState([])
    const [ShowingMore, setShowingMore] = useState(true)

    useEffect(() => {
        if (projects.length > 6) { setrecentProjects(projects.slice(0,6)) }
        else { setrecentProjects(projects) }
    }, [])


    let handleShowMore = () => {

        if (ShowingMore) {
            setrecentProjects(projects)
            setShowingMore(false)
            console.log(projects.length)
        }
        else {
            setrecentProjects(projects.slice(0,6))
            console.log("hello")
            setShowingMore(true)

        }
    }



    return (
      <>          
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
            >
            <MainCompText data={projectTxt} />


            <div className="skills-container flex justify-start items-center flex-wrap  gap-4 mt-1 overflow-hidden pb-3 pt-4 ">


                {recentProjects.map((item, index) => {
                    return  <ProjectCard item={item} key={index} />
                })}


                <div className="flex items-center w-full mt-6 gap-3 px-2 sm:px-4">
                    <div className="flex-1 h-px bg-[#E7E7E7]" />

                    <button
                        onClick={handleShowMore}
                        className="text-sm sm:text-base border border-[#E7E7E7] hover:border-indigo-600 px-4 sm:px-6 py-1 rounded-full text-[#E7E7E7] whitespace-nowrap"
                    >
                        {ShowingMore ? "Show More " : "Show Less "}
                    </button>

                    <div className="flex-1 h-px bg-[#E7E7E7]" />
                </div>


                </div>
                </motion.div>
        </>

    )
}

export default Work
