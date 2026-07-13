import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCpu, FiDatabase, FiLayout, FiServer, FiSettings, FiCheckCircle, FiBookOpen, FiCode } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiDjango, SiVite } from 'react-icons/si';

// Helper to match tech stack icons
const getTechIcon = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('react')) return <FaReact className="text-[#61DBFB]" />;
    if (name.includes('python')) return <FaPython className="text-[#ffd43b]" />;
    if (name.includes('django')) return <SiDjango className="text-[#2d6f56]" />;
    if (name.includes('mysql')) return <SiMysql className="text-[#00758f]" />;
    if (name.includes('html')) return <FaHtml5 className="text-[#E34C26]" />;
    if (name.includes('css') || name.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
    if (name.includes('javascript') || name.includes('js')) return <FaJsSquare className="text-[#f0db4f]" />;
    if (name.includes('c#')) return <FiCode className="text-[#178600]" />;
    if (name.includes('vite')) return <SiVite className="text-[#646CFF]" />;
    if (name.includes('git')) return <FaGitAlt className="text-[#fc6d27]" />;
    return <FiSettings className="text-gray-400" />;
};

const ProjectDetail = ({ project }) => {
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project]);

    if (!project) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full text-white pb-16 px-1 sm:px-3 lg:px-4 mt-4 lg:mt-0"
        >
            {/* Back Button */}
            <div className="mb-6">
                <a 
                    href="#work"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 font-medium transition-colors group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </a>
            </div>

            {/* Header Card */}
            <div className="relative overflow-hidden bg-[#262629] border border-gray-800 rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 shadow-xl">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-1">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent">
                            {project.name}
                        </h1>
                        <p className="text-gray-400 text-xs sm:text-sm">
                            {project.repo.replace('https://github.com/', '')}
                        </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto">
                        <a 
                            href={project.repo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm font-medium transition-colors border border-gray-700 w-full sm:w-auto flex-1 sm:flex-initial"
                        >
                            <FiGithub />
                            <span>Repository</span>
                        </a>
                        {project.demo && (
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-medium transition-colors shadow-lg shadow-indigo-600/30 w-full sm:w-auto flex-1 sm:flex-initial"
                            >
                                <FiExternalLink />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Primary Languages & Tags */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 border-t border-gray-800/80 pt-6">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mr-2">Languages:</span>
                    {project.languages.map((lang, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs text-gray-300">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                            <span>{lang.name} <span className="text-gray-555">({lang.percent}%)</span></span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-800 mb-6 sm:mb-8 gap-4 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`pb-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                        activeTab === 'overview'
                            ? 'border-indigo-500 text-indigo-400'
                            : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                >
                    Project Overview
                </button>
                <button
                    onClick={() => setActiveTab('tech')}
                    className={`pb-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                        activeTab === 'tech'
                            ? 'border-indigo-500 text-indigo-400'
                            : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                >
                    Technical Architecture
                </button>
                <button
                    onClick={() => setActiveTab('features')}
                    className={`pb-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                        activeTab === 'features'
                            ? 'border-indigo-500 text-indigo-400'
                            : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                >
                    Features & Outcomes
                </button>
            </div>

            {/* Content Switcher */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Main Content Area */}
                <div className="xl:col-span-3 space-y-8">
                    {activeTab === 'overview' && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-[#262629]/40 border border-gray-800 rounded-2xl p-5 sm:p-8 space-y-6"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                                <FiBookOpen className="text-indigo-400" />
                                <span>Detailed Description</span>
                            </h2>
                            <div className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
                                {project.fullDesc}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'tech' && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            {/* Interesting Tech Stack Visualizer */}
                            <div className="bg-[#262629]/40 border border-gray-800 rounded-2xl p-5 sm:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-6">
                                    <FiCpu className="text-indigo-400" />
                                    <span>Detailed Tech Stack Breakdown</span>
                                </h2>
                                
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                    {Object.entries(project.techStack).map(([category, items], idx) => (
                                        <div key={idx} className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 sm:p-6 space-y-4 hover:border-indigo-500/20 transition-all duration-300 shadow-md">
                                            <h3 className="text-base sm:text-lg font-bold text-indigo-300 capitalize flex items-center gap-2">
                                                {category === 'frontend' && <FiLayout />}
                                                {category === 'backend' && <FiServer />}
                                                {category === 'database' && <FiDatabase />}
                                                {category === 'deployment' && <FiExternalLink />}
                                                {category !== 'frontend' && category !== 'backend' && category !== 'database' && category !== 'deployment' && <FiCpu />}
                                                <span>{category}</span>
                                            </h3>
                                            <ul className="space-y-3">
                                                {items.map((item, keyIdx) => {
                                                    const parts = item.split(' - ');
                                                    return (
                                                        <li key={keyIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                                                            <span className="mt-1.5 flex-shrink-0 text-indigo-400 text-[10px]">•</span>
                                                            <div>
                                                                <span className="font-semibold text-white">{parts[0]}</span>
                                                                {parts[1] && <span className="text-gray-405"> - {parts[1]}</span>}
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Database Schema details if present */}
                            {project.databaseDesign && (
                                <div className="bg-[#262629]/40 border border-gray-800 rounded-2xl p-6 sm:p-8">
                                    <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                                        <FiDatabase className="text-indigo-400" />
                                        <span>Database Schema & Triggers</span>
                                    </h3>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        {project.databaseDesign}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {activeTab === 'features' && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            {/* Key Features */}
                            <div className="bg-[#262629]/40 border border-gray-800 rounded-2xl p-5 sm:p-8 space-y-6">
                                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                                    <FiCheckCircle className="text-indigo-400" />
                                    <span>Key Implementations</span>
                                </h2>
                                <ul className="grid grid-cols-1 gap-4">
                                    {project.keyFeatures.map((feat, idx) => {
                                        const parts = feat.split(': ');
                                        return (
                                            <li key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-gray-900/40 hover:bg-gray-900/60 p-4 sm:p-5 border border-gray-800/65 hover:border-indigo-500/20 rounded-xl transition-all duration-300">
                                                <FiCheckCircle className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                                                <div className="text-sm">
                                                    <span className="font-bold text-white block sm:inline mr-1">{parts[0]}:</span>
                                                    <span className="text-gray-305">{parts[1]}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* UX Enhancements if present */}
                            {project.uxEnhancements && (
                                <div className="bg-[#262629]/40 border border-gray-800 rounded-2xl p-5 sm:p-8 space-y-4">
                                    <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-indigo-300">
                                        <span>User Experience Enhancements</span>
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {project.uxEnhancements.map((feat, idx) => {
                                            const parts = feat.split(': ');
                                            return (
                                                <li key={idx} className="flex gap-2 text-sm text-gray-305">
                                                    <span className="text-indigo-455 font-bold">•</span>
                                                    <div>
                                                        <span className="font-bold text-white">{parts[0]}</span>
                                                        {parts[1] && <span>: {parts[1]}</span>}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}

                            {/* Learning Outcomes */}
                            <div className="bg-[#262629]/40 border border-gray-800 rounded-2xl p-5 sm:p-8 space-y-4">
                                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                                    <FiBookOpen className="text-emerald-400" />
                                    <span>Learning Outcomes & Core Skills</span>
                                </h2>
                                <p className="text-gray-305 text-sm sm:text-base leading-relaxed">
                                    {project.learningOutcomes}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Sidebar Details (Quick Specs) */}
                <div className="space-y-6 xl:col-span-1">
                    <div className="bg-[#262629] border border-gray-800 rounded-2xl p-6 shadow-lg space-y-6">
                        <h3 className="text-lg font-bold border-b border-gray-800 pb-3 text-indigo-300">
                            Quick Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStackShort.map((tech, idx) => (
                                <div 
                                    key={idx}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-300 hover:border-indigo-500/50 hover:bg-gray-900/80 transition-colors"
                                >
                                    {getTechIcon(tech)}
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {project.deploymentDetails && (
                        <div className="bg-[#262629] border border-gray-800 rounded-2xl p-6 shadow-lg space-y-4">
                            <h3 className="text-lg font-bold border-b border-gray-800 pb-3 text-indigo-300">
                                Deployment & Hosting
                            </h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {project.deploymentDetails}
                            </p>
                        </div>
                    )}

                    {project.databaseDesign && !project.deploymentDetails && (
                        <div className="bg-[#262629] border border-gray-800 rounded-2xl p-6 shadow-lg space-y-4">
                            <h3 className="text-lg font-bold border-b border-gray-800 pb-3 text-indigo-300">
                                Environment & IDE
                            </h3>
                            <div className="text-gray-400 text-xs space-y-2">
                                <p><strong className="text-gray-300">IDE:</strong> Visual Studio 2022</p>
                                <p><strong className="text-gray-300">Framework:</strong> .NET Framework 4.7.2</p>
                                <p><strong className="text-gray-300">Database:</strong> MySQL Server 8.0</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
