import React from 'react'

const MainCompText = ({data}) => {
  return (
      <div className="about-txt flex gap-10 my-10 sm:my4  sm:justify-between  justify-center items-center  ">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-wide  sm:font-extrabold ">{data.heading} </h1>

          <p className="text-[#E7E7E7] hidden sm:inline ">{data.para }</p>
      </div>
  )
}

export default MainCompText
