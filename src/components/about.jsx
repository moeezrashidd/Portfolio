import { useState, useRef } from 'react'
import { intro } from '../assets'
import { FaPlay, FaPause } from "react-icons/fa6";
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
            <div className="about-txt flex gap-10 justify-evenly items-center  ">
                <h1 className="text-4xl font-extrabold tracking-wide ">Why Dev In Dark Best Choice? </h1>

                <p className="text-[#E7E7E7]">Watch this one minute video so you understand why you should use our services!</p>
            </div>
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
