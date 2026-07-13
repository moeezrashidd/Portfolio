import { projectTxt } from "../data/data"
import MainCompText from "./subComp/mainCompText";
import { projects } from "../data/data";
import { useState, useEffect } from "react";
import ProjectCard from "./subComp/projectCard";
import { motion } from "framer-motion";


function Work() {
    const [recentProjects, setrecentProjects] = useState([])
    const [ShowingMore, setShowingMore] = useState(true)
    const [isMobile, setIsMobile] = useState(true)

    // Track viewport to decide truncation
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            // Desktop: always show all projects
            setrecentProjects(projects)
        } else {
            // Mobile: truncate to 6
            if (projects.length > 6) { setrecentProjects(projects.slice(0, 6)) }
            else { setrecentProjects(projects) }
            setShowingMore(true)
        }
    }, [isMobile])


    let handleShowMore = () => {

        if (ShowingMore) {
            setrecentProjects(projects)
            setShowingMore(false)
        }
        else {
            setrecentProjects(projects.slice(0, 6))
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
                id="ourProjects"
            >


                <MainCompText data={projectTxt} />


                <div className="flex flex-col w-full gap-2 mt-4 pb-3 pt-2">
                    {recentProjects.map((item, index) => {
                        return <ProjectCard item={item} key={index} />
                    })}

                    {/* Show More button — mobile only */}
                    <div className="flex items-center w-full mt-8 gap-3 px-2 sm:px-4 lg:hidden">
                        <div className="flex-1 h-px bg-gray-800" />
                        <button
                            onClick={handleShowMore}
                            className="text-xs sm:text-sm border border-gray-700 hover:border-indigo-600 px-4 sm:px-6 py-1.5 rounded-full text-gray-300 hover:text-white whitespace-nowrap transition-colors"
                        >
                            {ShowingMore ? "Show More" : "Show Less"}
                        </button>
                        <div className="flex-1 h-px bg-gray-800" />
                    </div>
                </div>
            </motion.div>
        </>

    )
}

export default Work
