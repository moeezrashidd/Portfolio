import {logo} from '../assets'
function About() {


    return (
        <>
            <div className="about-txt flex gap-10 justify-evenly items-center  ">
                <h1 className="text-4xl font-extrabold tracking-wide ">Why Dev In Dark Best Choice? </h1>
                <p className="text-[#E7E7E7]">Watch this one minute video so you understand why you should use our services!</p>
            </div>
                <img src={logo} alt="" srcset="" className='mt-5 w-full h-96'/>


        </>
    )
}

export default About
