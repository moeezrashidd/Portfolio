import { rectangle1, add, triangle, circle, vector, frame, me, rectangle2 } from "../assets"

function Hero() {


    return (
        <>
            <div className="container py-4 flex justify-between items-center   mx-auto  my-14">
                <img src={rectangle1} alt="" className="absolute -left-8  z-10 " />
                <img src={rectangle2} alt="" className="absolute top-0 right-0 z-0" />
                <div className="Hero-text flex flex-col w-2/5 gap-7 py-4 z-50 h-full  "  >
                    <h1 className="text-5xl font-extrabold tracking-wide">Bluid Your Awesome Websites </h1>
                    <p className="text-[#E7E7E7]">Dev in Dark provides top-quality web development services with an exceptional experience across various technologies. We deliver projects on time, meet all requirements, and ensure 100% client satisfaction.</p>
                    <span className="service-btn w-32  bg-[#5454D4] border border-[#5454D4]  p-2 cursor-pointer hover:border-[#E7E7E7] rounded-lg">
                        Our Service &#8599;
                    </span>
                </div>
                <div className="photo w-1/2 h-full py-4  relative flex justify-center items-center flex-col z-50">
                    <img src={vector} alt="" className="absolute top-0 left-0" />
                    <img src={circle} alt="" className="absolute right-0 top-0 " />
                    <img src={triangle} alt="" className="absolute -left-10 bottom-0" />
                    <img src={add} alt="" className="absolute bottom-0 right-6" />
                    <img src={frame} alt="" className=" " />
                    <img src={me} alt="" className="w-[256px] h-[245px] absolute  top-20 rotate-[24.2deg] rounded-2xl ml-8 " />


                </div>
           
            </div>

        </>
    )
}

export default Hero
