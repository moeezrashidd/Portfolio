import { motion, AnimatePresence } from "framer-motion";
import { logo } from '../assets';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { SiFiverr, SiUpwork, SiTiktok } from "react-icons/si";

function Sidebar({ isOpen, onClose, activeSection, onNavClick }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'aboutUs', label: 'About', icon: FiUser },
    { id: 'skills', label: 'Skills', icon: FiCode },
    { id: 'work', label: 'Projects', icon: FiBriefcase },
    { id: 'Contact', label: 'Contact', icon: FiMail },
  ];

  const handleNavClick = (sectionId) => {
    if (window.innerWidth < 1024) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onNavClick(sectionId);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#2A2A2E] to-[#1E1E20] border-r border-gray-700 flex-col p-6 z-50"
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-12">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full border-2 border-indigo-500" />
          <div>
            <p className="text-white font-bold text-lg">Moeez Rashid</p>
            <p className="text-gray-400 text-xs">Full-Stack Developer</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="ml-auto w-2 h-2 bg-white rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Social Links and Copyright Footer */}
        <div className="border-t border-gray-700 pt-5">
          <p className="text-gray-400 text-xs mb-2">Connect with me</p>
          <div className="grid grid-cols-6 gap-2 text-lg text-gray-300">
            <a href="https://github.com/moeezrashid" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-all hover:text-white" title="GitHub">
              <FaGithub size={16} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-all hover:text-white" title="LinkedIn">
              <FaLinkedin size={16} />
            </a>
            <a href="https://www.instagram.com/moeezrashidd" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-all hover:text-white" title="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="https://www.fiverr.com/moeezrashidd/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-all hover:text-white" title="Fiverr">
              <SiFiverr size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-all hover:text-white" title="YouTube">
              <FaYoutube size={16} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-all hover:text-white" title="Facebook">
              <FaFacebook size={16} />
            </a>
          </div>
          <p className="mt-4 text-[10px] text-gray-500 leading-tight">
            © {new Date().getFullYear()} Moeez Rashid.<br />All rights reserved.
          </p>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#2A2A2E] to-[#1E1E20] border-r border-gray-700 flex flex-col px-6 pb-6 pt-20 z-[60]"
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-8">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full border-2 border-indigo-500" />
              <div>
                <p className="text-white font-bold">Moeez Rashid</p>
                <p className="text-gray-400 text-xs">Full-Stack Developer</p>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item.id);
                      onClose();
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/50'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
