import { motion } from "framer-motion";
import { logo } from "../assets";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaFacebook,
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiTiktok } from "react-icons/si";

const Footer = () => {
    return (
        <motion.footer
            className="w-full bg-[#1E1E20] text-[#E7E7E7] py-8 px-4 md:px-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

                {/* Logo + Name */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10 object-contain rounded-full border border-black"
                    />
                    <span className="text-lg font-bold tracking-wide">Moeez Rashid</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 text-xl">
                    <a
                        href="https://github.com/moeezrashid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/moeezrashidd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.fiverr.com/moeezrashidd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <SiFiverr />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <SiUpwork />
                    </a>
                    <a
                        href="https://www.tiktok.com/@moeezzrashid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition duration-300 text-2xl"
                    >
                        <SiTiktok />
                    </a>
                </div>
            </div>

            {/* Bottom Text */}
            <p className="mt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Moeez Rashid. All rights reserved.
            </p>
        </motion.footer>
    );
};

export default Footer;
