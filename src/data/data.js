



// *****************text data****************


export const skillTxt = {
    heading: "Technical Skills & Tools",
    para: "Languages, frameworks, and tools I use to build full-stack applications — from responsive frontends to secure REST APIs."
}

export const projectTxt = {
    heading: "Featured Projects",
    para: "Real-world applications I've built — from full-stack web platforms to desktop enterprise systems."
}

export const aboutTxt = {
    heading: "About Me",
    para: "Full-stack developer pursuing BSSE at UET Lahore, passionate about building clean, scalable software."
}

// ********************* contact info ******************

import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const contactInfo = [
    {
        id: "email",
        label: "Email",
        username: "moeezrashidd@gmail.com",
        href: "mailto:moeezrashidd@gmail.com",
        icon: FiMail,
        color: "text-indigo-400",
        bgColor: "bg-indigo-600/20",
        borderHover: "hover:border-indigo-500/40",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        username: "moeezrashidd",
        href: "https://www.linkedin.com/in/moeez-rashid-246201354/",
        icon: FaLinkedin,
        color: "text-blue-400",
        bgColor: "bg-blue-600/20",
        borderHover: "hover:border-blue-500/40",
    },
    {
        id: "whatsapp",
        label: "WhatsApp",
        username: "moeezrashidd",
        href: "https://wa.me/moeezrashidd",
        icon: FaWhatsapp,
        color: "text-green-400",
        bgColor: "bg-green-600/20",
        borderHover: "hover:border-green-500/40",
    },
];


// ********************* skills data ******************

import { FaHtml5, FaCuttlefish, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDjango, SiRedux, SiReacthookform, SiFormik } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";

export const skillCategories = [
    {
        id: "languages",
        title: "Languages",
        icon: FiCode,
        skills: [
            { name: "Python", logo: FaPython, color: "text-[#ffd43b]", desc: "Backend APIs, scripting & OOP" },
            { name: "JavaScript", logo: FaJsSquare, color: "text-[#f0db4f]", desc: "Interactive UIs & full-stack logic" },
            { name: "C#", logo: TbBrandCSharp, color: "text-[#178600]", desc: "Desktop & enterprise applications" },
            { name: "C", logo: FaCuttlefish, color: "text-[#03599C]", desc: "Programming fundamentals & logic" },
        ],
    },
    {
        id: "web",
        title: "Web & Frameworks",
        icon: FiLayers,
        skills: [
            { name: "React", logo: FaReact, color: "text-[#61DBFB]", desc: "Component-based SPAs" },
            { name: "Django", logo: SiDjango, color: "text-[#2d6f56]", desc: "Full-stack Python backend" },
            { name: "DRF", logo: SiDjango, color: "text-[#092e20]", desc: "RESTful API development" },
            { name: "HTML5", logo: FaHtml5, color: "text-[#E34C26]", desc: "Semantic, accessible markup" },
            { name: "CSS3", logo: FaCss3Alt, color: "text-[#2565ae]", desc: "Responsive layouts & animations" },
            { name: "Tailwind CSS", logo: SiTailwindcss, color: "text-[#06B6D4]", desc: "Utility-first styling" },
            { name: "Redux", logo: SiRedux, color: "text-[#764ABC]", desc: "Predictable state management" },
            { name: "React Hook Form", logo: SiReacthookform, color: "text-[#EC5990]", desc: "Performant form handling" },
            { name: "Formik", logo: SiFormik, color: "text-[#2196F3]", desc: "Form validation & state" },
        ],
    },
    {
        id: "database",
        title: "Databases & Tools",
        icon: FiDatabase,
        skills: [
            { name: "MySQL", logo: SiMysql, color: "text-[#00758f]", desc: "Relational database design" },
            { name: "SQL", logo: AiOutlineConsoleSql, color: "text-[#f29111]", desc: "Queries, joins & data modeling" },
            { name: "Git", logo: FaGitAlt, color: "text-[#fc6d27]", desc: "Version control & branching" },
            { name: "GitHub", logo: FaGithub, color: "text-[#666666]", desc: "Collaboration & code hosting" },
        ],
    },
];


// please add latest projects at end
export const projects = [
    {
        id: "blogweb",
        name: "BlogWeb",
        repo: "https://github.com/moeezrashidd/BlogWeb-",
        demo: "https://moeezrashid-blogweb.vercel.app/",
        languages: [
            { name: "JavaScript", percent: 73.5, color: "#f1e05a" },
            { name: "Python", percent: 26.2, color: "#3572A5" }
        ],
        desc: "Full-stack blogging platform with Django backend and React frontend, featuring secure authentication, user management, and real-time blog posting capabilities with media support.",
        techStackShort: ["React", "Vite", "Django", "REST API", "Lexical Editor", "Tailwind CSS"],
        techStack: {
            frontend: [
                "React 18.3.1 - JavaScript UI library",
                "Vite 7.1.2 - Frontend build tool",
                "Tailwind CSS 3.4.17 - Utility-first styling framework",
                "Lexical Editor 0.35.0 (Meta) - Headless text editor framework for rich text blog posting",
                "React Router DOM 7.13.0 - Declarative SPA routing",
                "Axios 1.18.1 - Promise-based HTTP client for Django REST API communication",
                "Framer Motion 12.23.12 - Animation & gesture-driven UI elements",
                "Lucide React & React Icons - Modern clean SVG icons"
            ],
            backend: [
                "Django 6.0.2 - Rapid Python web framework",
                "Django REST Framework - Toolkit for building web APIs",
                "django-cors-headers - CORS management middleware",
                "Pillow - Python image processing library for media handling",
                "django-currentuser - Middleware tracking the user in database transactions"
            ],
            database: [
                "SQLite - Development database configuration",
                "MySQL - Production relational database integration"
            ],
            deployment: [
                "Vercel - Serverless hosting for the React frontend",
                "PythonAnywhere - WSGI application server hosting for the Django backend"
            ]
        },
        fullDesc: `BlogWeb is a comprehensive full-stack web application that showcases modern development practices for building scalable, secure web platforms. This project represents my first venture into full-stack development, combining a robust Django REST API backend with a dynamic React frontend, deployed on production servers.

Project Overview: BlogWeb is designed as a complete blogging platform where users can create accounts, authenticate securely, publish blog posts, and manage their content. The application demonstrates proficiency in both backend API development and frontend user interface design, with a focus on security, user experience, and smooth deployment workflows.

Backend Architecture (Django REST Framework): The backend is built with Django 4.x and Django REST Framework, providing a comprehensive API that handles all server-side operations. The system includes secure user authentication with password hashing using Django's built-in security utilities. The login and logout endpoints are fully implemented with session management, and passwords are transparently hashed for enhanced security. The backend supports user registration with email validation, profile management, and blog post CRUD operations.

The application is configured with CORS (Cross-Origin Resource Sharing) headers to enable secure communication between the frontend and backend. Django's permission system ensures that users can only modify their own content, implementing proper access control mechanisms. The database uses SQLite for development and supports PostgreSQL migration for production environments.

Frontend Architecture (React + Vite): The React frontend provides a modern, responsive user interface built with Vite for optimal development and build performance. The application includes a sign-in/sign-up authentication flow with local storage management for user sessions. The context API manages global user state, eliminating the need for prop drilling. A navbar component displays the current user profile and provides a secure sign-out mechanism that clears all session data.

The frontend communicates with the backend through a centralized API configuration, making it easy to switch between development and production environments. The UI is built with reusable components, including forms for creating and editing blog posts, user profile pages, and a dashboard displaying all published content.`,
        keyFeatures: [
            "Secure Authentication: Complete login and registration system with password hashing and session management",
            "User Profile Management: Users can create and manage their profiles with profile pictures stored in media directories",
            "Blog Management: Full CRUD operations for creating, reading, updating, and deleting blog posts with rich media content",
            "Rich Text Editing: Integrated Lexical editor with plugins for table, list, code block, and link support",
            "Media Support: Integration with Pillow for image processing and storage management",
            "Responsive Design: Mobile-friendly UI that works across all screen sizes and form factors",
            "Real-time Updates: Context API for immediate UI updates when user state changes"
        ],
        deploymentDetails: "The application is deployed on PythonAnywhere for the backend and Vercel for the frontend, demonstrating knowledge of modern deployment practices. The backend is properly configured with environment variables for secrets management, ALLOWED_HOSTS for production security, and static file serving. The frontend is built and deployed as a static site on Vercel, with automatic deployments triggered on Git push events.",
        learningOutcomes: "This project demonstrates comprehensive full-stack development skills including REST API design, frontend-backend integration, authentication security, database design, and production deployment. It showcases best practices in separating concerns, managing state, securing sensitive data, and deploying applications at scale."
    },
    {
        id: "smartenergyapp",
        name: "SmartEnergyApp",
        repo: "https://github.com/moeezrashidd/semester2-project",
        demo: "https://github.com/moeezrashidd/semester2-project/releases/download/v1.0.0/smartenergyapp-v1.0.zip",
        languages: [
            { name: "C#", percent: 100, color: "#178600" }
        ],
        desc: "Enterprise-grade desktop energy management system built with C# WinForms, featuring real-time consumption tracking, automated billing calculations, and advanced data visualization with MySQL backend.",
        techStackShort: ["C#", ".NET Framework", "WinForms", "MySQL Server", "ADO.NET", "Data Visualization"],
        techStack: {
            environment: [
                "Visual Studio 2022 - Core integrated development environment"
            ],
            core: [
                ".NET Framework 4.7.2 - Base framework for desktop applications",
                "C# - Primary object-oriented backend programming language"
            ],
            ui: [
                "Windows Forms (WinForms) - GUI client container framework",
                "System.Windows.Forms.DataVisualization - Multi-series chart rendering module"
            ],
            databaseAccess: [
                "MySQL Server 8.0+ - Relational database system for user metrics and appliance logs",
                "MySql.Data 8.0.33 - ADO.NET connector package for direct database query transactions",
                "Parameterized SQL Queries - Security measures integrated to prevent SQL injection vulnerabilities"
            ],
            architecturalPatterns: [
                "Repository Pattern - Abstracted layer separating database access from business operations",
                "Model-View-ViewModel / Presenter Pattern - Standard architecture decoupling UI representation from logical flow",
                "Service Layer Pattern - Encapsulated classes dedicated to managing background processes like schedulers"
            ],
            systemLibraries: [
                "System.Data - Structural namespaces managing datasets and tabular records",
                "System.Drawing - System drawing routines rendering visualizations and layouts",
                "System.Xml & System.Xml.Linq - Handlers parsing structural data configurations"
            ]
        },
        fullDesc: `SmartEnergyApp is a sophisticated desktop application designed to revolutionize how households and small businesses manage their energy consumption. Built as a university semester project, this application demonstrates advanced Windows Forms development with enterprise-level database design and mathematical algorithms for intelligent billing calculations.

Project Overview: SmartEnergyApp addresses the critical need for accurate energy monitoring and billing management. The application provides users with comprehensive tools to track appliance-wise electricity consumption, visualize usage patterns through interactive charts, and receive intelligent bill estimates based on progressive tariff structures. The system combines secure authentication, real-time data processing, and automated scheduling features.

Architecture & Core Components:
User Authentication Module: The application features a complete login and registration system with robust input validation and duplicate account prevention. Passwords are securely stored in the database with proper hashing mechanisms. The authentication layer ensures only authorized users can access their energy data, maintaining data isolation and privacy.

Dashboard & Analytics: The dashboard serves as the central hub displaying real-time energy metrics. It shows total units consumed (in kWh), estimated monthly bills based on current consumption, and the count of registered appliances. Interactive pie charts visualize appliance-wise energy distribution, allowing users to identify high-consumption devices at a glance. These charts dynamically update as new usage data is logged.

Appliance Management System: Users can perform complete CRUD operations on their appliances. The system stores appliance details including name, power rating (in watts), and scheduler preferences. All database operations use parameterized SQL queries to prevent SQL injection attacks. Soft-delete functionality preserves historical data for auditing and reporting purposes, ensuring data integrity and compliance.

Advanced Usage Logging Engine: The application features dual logging mechanisms. Manual logging allows users to record specific appliance usage with active hours, which are converted to kilowatt-hours using the formula: (Wattage × Hours) / 1000 = kWh. Automated scheduler logging runs in the background, periodically recording consumption for configured appliances without user intervention.

Intelligent Billing System: The progressive tariff calculator implements a sophisticated algorithm that determines estimated bills based on predefined consumption brackets. This tiered pricing structure encourages energy conservation while fairly charging based on actual usage patterns. The calculations are performed dynamically and include mathematical formulas for rate determination.

Automated Scheduling Service: The UsageSchedulerService runs continuously in the background, automatically logging energy consumption at user-defined intervals for each appliance. A daily scheduler triggers at 23:59 PM to aggregate daily statistics and update monthly summaries. This automation eliminates manual logging while maintaining accurate consumption records.

Monthly Reporting & Export: The application generates comprehensive monthly reports summarizing energy consumption and billing information. Data can be exported directly to CSV format for further analysis in spreadsheet applications, enabling users to track historical trends and optimize their energy usage over time.`,
        keyFeatures: [
            "Real-time Consumption Tracking: Active recording of appliance energy logs converted directly to kilowatt-hours (kWh)",
            "Automated Scheduler Service: UsageSchedulerService background worker running interval-based logging",
            "Progressive Tariff Calculator: Mathematical model estimating consumption tiers based on progressive tax slabs",
            "Visual Dashboard: In-app pie chart graphics representing active device distributions using standard WinForms Charting",
            "Data Export: Direct-to-CSV exporting utilities enabling detailed spreadsheet imports",
            "Secure ADO.NET Infrastructure: Strict usage of parameterized command lines preventing query manipulation",
            "Relational Database Schema: 6 structured tables featuring cascading references, soft-deletes, and SQL audit trail triggers"
        ],
        databaseDesign: "The database consists of 6 meticulously designed relational tables: 'users' (storing registration credentials), 'appliances' (device inventory profiles), 'usage_logs' (energy records), 'monthly_summary' (cached computations of monthly usage), 'tariff_slabs' (pricing coefficients), and 'deleted_logs_history' (database audit trail). Custom triggers maintain integrity across soft-delete cascades and automatically populate aggregated fields on summary rows.",
        learningOutcomes: "This project showcases advanced Windows Forms programming, database design with triggers, parameterized queries for security, real-time data visualization, scheduled task management, and complex mathematical algorithms for billing calculations. It demonstrates enterprise-level thinking in security, data integrity, and user experience design."
    },
    {
        id: "ecommerce-store",
        name: "E-Commerce Store Frontend",
        repo: "https://github.com/moeezrashidd/semester-1-project",
        demo: "https://mr-store-app.vercel.app/",
        languages: [
            { name: "HTML", percent: 42, color: "#e34c26" },
            { name: "CSS", percent: 34.5, color: "#563d7c" },
            { name: "Python", percent: 14, color: "#3572A5" },
            { name: "JavaScript", percent: 9.5, color: "#f1e05a" }
        ],
        desc: "Responsive e-commerce platform showcasing modern web design with HTML5 semantic markup, CSS3 styling, and JavaScript interactivity, delivering a seamless shopping experience across all devices.",
        techStackShort: ["Vanilla JS", "HTML5", "CSS3", "Python Backend", "Local Storage", "Vercel"],
        techStack: {
            markup: [
                "HTML5 Semantic Layout - Proper usage of structural elements (<header>, <nav>, <main>, <section>, <article>, <footer>) for layout hierarchy, accessibility, and SEO optimization"
            ],
            styling: [
                "CSS3 Core Layout - Flexible responsive layout structuring using CSS Flexbox and Grid models",
                "CSS Transitions & Keyframe Animations - Fluid animations driving interactive states and product selectors",
                "CSS Variables & Theming - Centralized color tokens for theme customization",
                "Media Queries - Clean adaptivity matching desktop, tablet, and mobile viewport requirements"
            ],
            icons: [
                "Font Awesome 7.0.1 CDN - Integration supporting clean solid, regular, and brand icons"
            ],
            frontendLogic: [
                "Vanilla JavaScript (ES6+) - High-performance core logic written without heavy runtime framework overhead",
                "DOM Manipulation - Event-driven interface interactions binding product details and shopping parameters",
                "Local Storage API - Client-side state persistence for the shopping cart contents between page instances",
                "Fetch API - Asynchronous loading methods querying catalog information dynamically"
            ],
            backendLogic: [
                "Python 3.x backend component (representing 14% of the project) supplying APIs for catalog delivery, billing checks, and registration validations"
            ],
            deployment: [
                "Vercel CDN hosting providing fast page loading and edge delivery"
            ]
        },
        fullDesc: `This e-commerce store frontend project represents my first comprehensive web development assignment, combining semantic HTML5 markup, advanced CSS3 styling, and interactive JavaScript functionality to create a fully functional online shopping platform. The project demonstrates foundational skills in responsive design, user interface development, and client-side JavaScript programming.

Project Overview: The E-Commerce Store is a customer-facing web application designed to simulate a real online shopping experience. The platform allows users to browse products, view detailed product information, add items to a shopping cart, and proceed through a checkout process. The project emphasizes clean code structure, responsive design principles, and engaging user interactions.

Frontend Architecture:
Semantic HTML5 Structure: The project utilizes semantic HTML5 elements including <header>, <nav>, <main>, <section>, <article>, and <footer> for proper document structure. This semantic approach ensures better accessibility for assistive technologies and improved search engine optimization. Product pages use structured data with proper heading hierarchies and meaningful alt text for images.

Responsive CSS3 Styling: CSS3 media queries ensure the website adapts beautifully to different screen sizes—from mobile phones to desktop displays. Flexbox and CSS Grid layouts create flexible, scalable page structures that adjust to various viewport dimensions. The styling includes modern color schemes with CSS variables for easy theme management, smooth transitions and animations for enhanced user engagement, responsive navigation with mobile hamburger menus, and touch-friendly button interfaces.

Interactive JavaScript Functionality: JavaScript adds dynamic behavior to the application. The shopping cart system allows users to add and remove products, update quantities, and see real-time price calculations. Dynamic filtering enables users to sort products by category, price range, or ratings. The product detail page loads asynchronously without page refreshes, providing a smooth, modern user experience.`,
        keyFeatures: [
            "Interactive Product Catalog: Beautiful grid layout displaying cards with rating reviews, descriptions, and dynamic filters",
            "Asynchronous Product Detail View: High-resolution details with variable select dropdowns loaded dynamically without refreshes",
            "Persisted LocalStorage Cart: Real-time calculation engine tracking totals, tax levels, and quantities, preserved across browser restarts",
            "Multi-step Checkout Simulator: Validated client-side forms leading users from addresses to confirmation logs",
            "Real-time Search Filter: Search inputs with instant keyword matches and recommendations"
        ],
        uxEnhancements: [
            "Customer Wishlist: Client-side favorite tracker saving liked products for future checkout reviews",
            "Product Comparison: Parallel layout visualizer showing multiple product specs side-by-side",
            "Recently Viewed: Historical navigation tracker caching standard product links for immediate return paths"
        ],
        performanceOptimizations: "Images are optimized for web delivery with appropriate compression and modern sizing tags. The CSS styling and JavaScript logic are minimized for production deployment. Vite assets compilation ensures speedy static deliveries across Vercel global CDN nodes.",
        learningOutcomes: "This project demonstrates mastery of HTML5 semantic structure, advanced CSS3 styling and responsive design, JavaScript DOM manipulation and event handling, local storage for client-side data persistence, and Git version control. It showcases understanding of user experience principles, web performance optimization, and modern development workflows."
    }
];



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
