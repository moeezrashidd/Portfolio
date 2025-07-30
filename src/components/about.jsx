import { useState, useRef } from 'react'
import { intro } from '../assets'
import { FaPlay, FaPause } from "react-icons/fa6";
import MainCompText from './subComp/mainCompText';
import { aboutTxt } from '../data/data';
function About() {

    const [Isplaying, setIsplaying] = useState(false)
    const videoref = useRef(null)
    const vidoeToggle = () => {
        if (Isplaying) {
            videoref.current.pause()
        }
        else {
            videoref.current.play()
        }
        setIsplaying(!Isplaying)
        console.log(videoref.current)
    }

    return (
        <>
            <MainCompText data={aboutTxt}/>
            <div className="scroll-border mt-5 relative player">
                <video src={intro} id='introVideo' ref={videoref} className=' w-full z-10  ' >
                </video>
                <div className="play-btn z-50 bg-[#5454D4] w-20 h-20 absolute bottom-[50%] right-[50%]  flex justify-center  items-center rounded-full cursor-pointer " onClick={vidoeToggle} >
                    
                    {Isplaying ? <FaPause /> : <FaPlay />}

                </div>

            </div>

        </>
    )
}

export default About
