import { projectTxt } from "../data/data"
import MainCompText from "./subComp/mainCompText";
import { projects } from "../data/data";
import { useState, useEffect } from "react";
import ProjectCard from "./subComp/projectCard";


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
    
            <MainCompText data={projectTxt} />


            <div className="skills-container flex justify-between items-center flex-wrap  gap-4 mt-1 overflow-hidden pb-3 pt-4 ">


                {recentProjects.map((item, index) => {
                    return <ProjectCard item={item} key={index} />
                })}

                <span className="flex justify-center items-center w-full mt-4 gap-4" >
                    <span className="border h-0 w-full"></span>
                    <span className="border text-xl hover:border-indigo-600  flex justify-center border-[#E7E7E7] px-6 py-0.5 rounded-full cursor-pointer w-xl" onClick={handleShowMore} >{ShowingMore ? "Show More " : "Show Less "}</span>
                    <span className="border h-0 w-full"></span>
                </span>

            </div>
        </>

    )
}

export default Work
