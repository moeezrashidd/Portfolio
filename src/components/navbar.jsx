import { logo } from '../assets';

function Nav() {
    const items = ['Home', 'About us', 'Our projects', 'Services'];

    return (
        <div className="z-50 py-4 flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo Section */}
            <div className="logo flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-12 h-12 rounded-3xl" />
                <span className="text-white font-semibold text-xl">Dev In Dark</span>
            </div>

            {/* Navigation Items */}
            <div className="options flex items-center gap-6">
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="text-gray-300 hover:text-indigo-500 text-base cursor-pointer transition-colors duration-200"
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Contact Button */}
            <div className="contact text-[#E7E7E7] border border-[#E7E7E7] px-7 py-1 rounded-lg cursor-pointer hover:border-[#5454D4] transition-colors duration-200">
                Contact
            </div>
        </div>
    );
}

export default Nav;
