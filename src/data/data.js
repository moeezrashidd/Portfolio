import {
   portfolio , portfolio1 ,portfolio2 ,portfolio3 ,portfolio4 ,portfolio5
} from '../assets'



// *****************text data****************


export const skillTxt = {
    heading: "Skills For Your Awesome Web. ",
    para: "Please take a look on the skill that we are providing to you."
}

export const projectTxt = {
    heading: "Projects To Show My Skill Set. ",
    para: "Please take a look on the projects that will make you more confident to chose me."
}

export const aboutTxt = {
    heading: "Why Dev In Dark Best Choice? ",
    para: "Watch this one minute video so you understand why you should use our services!"
}


// ********************* skills data ******************

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDjango } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { img } from 'framer-motion/client';

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


// *********************data for projects*************************



// please add  latest projects at end
export const projects = [
    {
        name: "portfolio 1",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    }, {
        name: "portfolio 2",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    }, {
        name: "portfolio 3",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    }, , {
        name: "portfolio 4",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    },  {
        name: "portfolio 5",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    }, {
        name: "portfolio 6",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    }, {
        name: "portfolio 7",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    },  {
        name: "portfolio 8",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    }, {
        name: "portfolio 9",
        desc: "this was my previeous project that sjadddddddddddddddnvr5h ofow vo[wqrif hwo[ifh wo[ift oiwerf hwohr tf sodh",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    },
].reverse()