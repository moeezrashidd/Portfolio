



// *****************text data****************


export const skillTxt = {
    heading: "Skills For Your Awesome Web. ",
    para: "Please take a look on the skill that we are providing to you."
}

export const projectTxt = {
    heading: "Projects That Show My Skill Set. ",
    para: "Please take a look on the projects that will make you more confident to chose me."
}

export const aboutTxt = {
    heading: "Why Dev In Dark Best Choice? ",
    para: "Watch this one minute video so you understand why you should use our services!"
}


// ********************* skills data ******************

import { FaHtml5, FaCuttlefish , FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDjango, SiRedux, SiReacthookform, SiFormik } from "react-icons/si";
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
    {
        name: "Redux",
        logo: SiRedux,
        color: "text-[#764ABC]",

    },
    {
        name: "Form hook",
        logo: SiReacthookform,
        color: "text-[#EC5990]",

    },
    {
        name: "Formik",
        logo: SiFormik,
        color: "text-[#2196F3]",

    },
    {
        name: "C",
        logo: FaCuttlefish,
        color: "text-[#03599C]",

    },
    // Add more skills here
];


// *********************data for projects*************************

import {
    portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, analogueClock, digitalClock, QRcode, weatherApp, slider, currencyConverter, rockPaperGame, Store1, Store2, Store3, Store4, Store5, Store6, netflix, netflix2, netflix3, netflix4, netflix1, spotify, spotify2, spotify3, spotify1, UltraEdit, UltraEdit2, UltraEdit3, UltraEdit1, TodoApp, CRUD, pokemon, signInFormik, countries, countries2, countries3, countries4, countries5, countries1
} from '../assets'

// please add  latest projects at end
export const projects = [
    {
        name: "Digital Clock",
        desc: "A real-time digital clock built with HTML, CSS, and JavaScript, featuring smooth hand movements and a clean, responsive design.",
        technologies: ["HTML", "CSS", "JS"],
        img: [digitalClock,digitalClock]

    },
    {
        name: "Simple Slider",
        desc: "A simple image slider created with HTML, CSS, and JavaScript that allows users to navigate through images with smooth transitions.",
        technologies: ["HTML", "CSS", "JS" ],
        img: [slider, slider]

    },
    {
        name: "Weather App",
        desc: "A dynamic weather app built with HTML, CSS, and JavaScript that fetches real- time weather data using a public API based on user location or input.",
        technologies: ["HTML", "CSS", "JS" , "API"],
        img: [weatherApp, weatherApp]

    },
    {
        name: "Analogue Clock",
        desc: "A real-time analog clock built with HTML, CSS, and JavaScript, featuring smooth hand movements and a clean, responsive design.",
        technologies: ["HTML", "CSS", "JS"],
        img: [analogueClock, analogueClock]

    },
    {
        name: "QR code generator",
        desc: "A simple QR code generator using HTML, CSS, and JavaScript that creates QR codes instantly from user input.",
        technologies: ["HTML", "CSS", "JS" , "API"],
        img: [QRcode, QRcode]

    },

    {
        name: "Netflix Clone",
        desc: "A Netflix clone built with HTML, CSS, that replicates the homepage UI with responsive design, movie thumbnails, and hover effects.",
        technologies: ["HTML", "CSS"],
        img: [netflix, netflix2, netflix3, netflix4, netflix1]

    },
    {
        name: "UltraEdit Clone",
        desc: "A UltraEdit clone built with HTML, CSS, that replicates the homepage UI with responsive design, movie thumbnails, and hover effects.",
        technologies: ["HTML", "CSS"],
        img: [UltraEdit, UltraEdit2, UltraEdit3, UltraEdit1]

    },
    {
        name: "Spotify Clone",
        desc: "A Spotify clone built with HTML, CSS, that replicates the homepage UI with responsive design, movie thumbnails, and hover effects.",
        technologies: ["HTML", "CSS"],
        img: [spotify, spotify2, spotify3, spotify1,]

    },
    {
        name: "Currency Converter",
        desc: "A currency converter built with HTML, CSS, and JavaScript that calculates real-time exchange rates between selected currencies using an API.",
        technologies: ["HTML", "CSS", "JS" , "API"],
        img: [currencyConverter, currencyConverter]

    },
    {
        name: "Rock, Paper Game",
        desc: "A fun Rock-Paper-Scissors game made with HTML, CSS, and JavaScript where users play against the computer with instant results and score tracking.",
        technologies: ["HTML", "CSS", "JS" ],
        img: [rockPaperGame, rockPaperGame]

    },

    {
        name: "Pokemon Cards App",
        desc: "A Pokémon Info Card App built with HTML, CSS, and JavaScript that fetches and displays detailed Pokémon data using the PokéAPI in an interactive card layout.",
        technologies: ["HTML", "CSS", "js", "React", "API"],
        img: [pokemon, pokemon]

    },
    {
        name: "Todo App",
        desc: "A Todo app built with React and Redux that allows users to add, delete, and manage tasks with centralized state management for consistent performance.",
        technologies: ["HTML", "CSS", "js", "React", "Redux"],
        img: [TodoApp, TodoApp]

    },
    {
        name: "Sign in via Formik",
        desc: "A sign-in form built with React and Formik that handles form state, validation, and submission efficiently with a clean and user-friendly interface.",
        technologies: ["HTML", "CSS", "js", "React", "Formik"],
        img: [signInFormik, signInFormik]

    },
    {
        name: "Post Manager",
        desc: "A Post Manager app using HTML, CSS, JavaScript, and CRUD operations to create, read, update, and delete posts with a clean and interactive UI.",
        technologies: ["HTML", "CSS", "js", "React", "CRUD" ,"API"],
        img: [CRUD, CRUD]

    },
    {
        name: "WorldAtlas",
        desc: "A Country Info app built with HTML, CSS, JavaScript, and React that fetches and displays detailed information about countries using a public API in a responsive layout.",
        technologies: ["HTML", "CSS", "js", "React" ,"API"],
        img: [countries, countries2, countries3, countries4, countries5, countries1]

    },
    {
        name: "E-commrence Store",
        desc: "A basic e-commerce store built with HTML, CSS, and JavaScript featuring product listings, cart functionality, and a responsive user interface.",
        technologies: ["HTML", "CSS", "JS","API" ],
        img: [Store2, Store3, Store4, Store5, Store6 ,Store1]

    },
    {
        name: "portfolio",
        desc: "My personal previous portfolio website built with HTML, CSS, JavaScript and  React to showcase projects, skills, and contact information in a responsive and interactive layout.",
        technologies: ["HTML", "CSS", "JS", "React", "there js", "tailwind CSS"],
        img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]

    }
].reverse()


//******************/ EXPERINECE sECTION/*******************

export const experiences = [
    {
        company: "Google",
        role: "Frontend Engineer",
        duration: "2021 - Present",
        description: "Worked on optimizing search UI components.",
    },
    {
        company: "Meta",
        role: "React Developer",
        duration: "2019 - 2021",
        description: "Built internal dashboards using React & GraphQL.",
    },
    {
        company: "Shopify",
        role: "UI Engineer",
        duration: "2017 - 2019",
        description: "Contributed to design system and component library.",
    }, {
        company: "Google",
        role: "Frontend Engineer",
        duration: "2021 - Present",
        description: "Worked on optimizing search UI components.",
    },
];


// *************/REVIEWS DATA /***************


export const reviews = [
    {
        name: "Alice",
        comment: "Amazing experience!",
        image: "https://i.ibb.co/jL1z0tk/user1.jpg",
        role: "Product Manager"
    },
    {
        name: "Bob",
        comment: "Loved the UI and performance.",
        image: "", // empty, will show default image
        role: "Frontend Developer"
    },
    {
        name: "Charlie",
        comment: "Highly recommend it!",
        image: "https://i.ibb.co/MZ9Q0YB/user2.jpg",
        role: "UX Designer"
    },
    {
        name: "Daisy",
        comment: "Smooth scrolling, great work.",
        image: "https://i.ibb.co/YTjW3vF/user3.jpg",
        role: "Digital Marketer"
    },
    {
        name: "Ethan",
        comment: "Professional and elegant.",
        image: "", // fallback image
        role: "Team Lead"
    },
    {
        name: "Fiona",
        comment: "Top notch design!",
        image: "https://i.ibb.co/Rc0bgFg/user4.jpg",
        role: "Full Stack Engineer"
    },
];
