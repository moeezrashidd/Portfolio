import React from 'react'
import { motion } from 'framer-motion'

const MainCompText = ({data}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="about-txt flex gap-10 my-10 sm:my4  sm:justify-between  justify-center items-center "
    >
      
          <h1 className="text-2xl sm:text-4xl font-bold tracking-wide  sm:font-extrabold ">{data.heading} </h1>

          <p className="text-[#E7E7E7] hidden sm:inline ">{data.para }</p>
      </motion.div>
  )
}

export default MainCompText
