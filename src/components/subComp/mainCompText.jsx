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
      
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">{data.heading}</h1>

          <p className="text-[#E7E7E7] text-xs sm:text-sm max-w-sm hidden sm:inline">{data.para}</p>
      </motion.div>
  )
}

export default MainCompText
