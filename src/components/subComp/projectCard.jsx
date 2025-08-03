import React from 'react'
import Tilt from 'react-parallax-tilt';
import AutoSlider from "./imgSlider";


const ProjectCard = ({item}) => {
  return (
  
      <Tilt className="   w-full sm:w-[47%] lg:w-[32%] max-h-1/2  flex flex-col justify-start items-start  gap-2 bg-[#262629]   px-3 py-5 rounded-xl"
      >
          
   
              <AutoSlider images={item.img} />
              <span className="text-3xl font-bold ">{item.name}</span>

          <p className="flex flex-col text-[#E7E7E7]"> <span className="font-2xl font-bold text-white ">Discreption: </span>{item.desc.length > 120 ? item.desc.slice(0, 120) +"..." : item.desc}</p>

              <p className="flex  flex-col ">
                  <span className="font-2xl font-bold">Skills: </span>

                  <span className="flex-wrap flex list-none text-[#E7E7E7] gap-2">
                      {
                          item.technologies.map((minItem, idx) => {
                              return <li key={idx} className="">{minItem} </li>
                          })
                      }
                  </span>
              </p>
        
          </Tilt>
    
  )
}

export default ProjectCard
