import { logo } from '../assets/'
function Nav() {

    let items = ['Home', 'About us', 'Our projects', 'Services']
    return (
        <>
            <div className=" z-50  py-4 flex justify-between items-center mx-auto">
                <div className="logo flex justify-center items-center gap-3">
                    <img src={logo} alt="" className='w-12 h-12 rounded-3xl' />
                    <span className='text-white , font-semibold'>Dev In Dark</span>
                </div>


                <div className="options flex justify-center items-center gap-4">
                   
                    {items.map((e ,i ) => {
                       return  <span key={i} className='text-[#E7E7E7] text-base hover:text-[#5454D4] cursor-pointer'>{e}</span>
                    })}


                </div>


                <div className="contact text-[#E7E7E7]  border border-[#E7E7E7] px-7 py-1 rounded-lg cursor-pointer hover:border-[#5454D4]">
                    Contact
                </div>



            </div>
        </>
    )
}

export default Nav
