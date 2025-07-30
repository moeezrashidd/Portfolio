import {
    analogueClock, countries, CRUD, currencyConverter, digitalColock, netflix, pokemon, portfolio, QRcode, rockPaperGame, ultraEdit, spotify, weatherApp
} from '../assets'






export const skillTxt = {
    heading: "Skills for  your awesome web. ",
    para: "please take a look on the skill that we are providing to you."
}

export const aboutTxt = {
    heading: "Why Dev In Dark Best Choice? ",
    para: "Watch this one minute video so you understand why you should use our services!"
}
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDjango } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const skills = [
    {
        name: "HTML5",
        logo: FaHtml5 ,
        color: "text-[#E34C26]",

    },
    {
        name: "CSS3",
        logo: FaCss3Alt,
        color: "text-[#2565ae]",

    },
    {
        name: "JS",
        logo: FaJsSquare ,
        color: "text-[#f0db4f]",

    },
    {
        name: "Tailwind",
        logo: SiTailwindcss ,
        color: "text-[#06B6D4]",

    },
    {
        name: "React",
        logo: FaReact,
        color: "text-[#61DBFB]",

    },
    {
        name: "Python",
        logo: FaPython,
        color: "text-[#ffd43b]",

    },
    {
        name: "mySQL",
        logo: SiMysql,
        color: "text-[#00758f]",

    },
    {
        name: "SQL",
        logo: AiOutlineConsoleSql,
        color: "text-[#f29111]",

    },
    {
        name: "Django",
        logo: SiDjango,
        color: "text-[#2d6f56]",

    },
    {
        name: "git",
        logo: FaGitAlt,
        color: "text-[#fc6d27]",

    },
    {
        name: "Github",
        logo: FaGithub,
        color: "text-[#666666]",

    },
    // Add more skills here
];
