import React from 'react';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';

const ProjectCard = ({ item }) => {
    return (
        <div className="w-full">
            <div 
                onClick={() => window.location.hash = `#/project/${item.id}`}
                className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-4 hover:bg-[#262629]/40 transition-all duration-300 rounded-xl cursor-pointer group gap-4 relative"
            >
                {/* Left Part: Title, Description, Languages, Tech pills */}
                <div className="flex-1 space-y-3 w-full">
                    {/* Repo title */}
                    <div className="flex items-center gap-2">
                        <FiGithub className="text-gray-400 group-hover:text-indigo-400 transition-colors" size={18} />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors truncate">
                            <span className="font-normal text-gray-500">moeezrashidd / </span>
                            <span className="font-bold">{item.name}</span>
                        </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm max-w-4xl leading-relaxed">
                        {item.desc}
                    </p>
                    
                    {/* Tech tags and Languages */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1">
                        {/* Languages */}
                        <div className="flex flex-wrap items-center gap-3">
                            {item.languages.map((lang, idx) => (
                                <span key={idx} className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
                                    {lang.name} <span className="text-gray-500">{lang.percent}%</span>
                                </span>
                            ))}
                        </div>
                        
                        {/* Separator dot */}
                        <span className="text-gray-700 hidden sm:inline">•</span>
                        
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5">
                            {item.techStackShort.map((tech, idx) => (
                                <span 
                                    key={idx}
                                    className="px-2 py-0.5 rounded bg-indigo-950/40 text-[10px] sm:text-xs font-semibold text-indigo-300 border border-indigo-900/40 hover:border-indigo-500/30 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Right Part: Links & Arrow indicator */}
                <div className="flex items-center gap-4 flex-shrink-0 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-gray-800 md:pt-0 pt-3 mt-2 md:mt-0">
                    <div className="flex items-center gap-3">
                        <a 
                            href={item.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // Prevents card row-click detail navigation
                            className="p-2 rounded-lg bg-gray-900 border border-gray-850 hover:border-gray-600 text-gray-400 hover:text-white transition-all"
                            title="View Code on GitHub"
                        >
                            <FiGithub size={18} />
                        </a>
                        {item.demo && (
                            <a 
                                href={item.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()} // Prevents card row-click detail navigation
                                className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-900/60 hover:border-indigo-500/80 text-indigo-400 hover:text-white transition-all"
                                title="View Live Demo"
                            >
                                <FiExternalLink size={18} />
                            </a>
                        )}
                    </div>
                    
                    {/* Chevron right click indicator */}
                    <div className="flex items-center gap-1 text-gray-500 group-hover:text-indigo-400 transition-colors pl-2">
                        <span className="text-xs font-semibold hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity">Details</span>
                        <FiChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                </div>
            </div>
            
            {/* Horizontal divider line after card */}
            <hr className="border-gray-800/80 w-full my-4" />
        </div>
    );
};

export default ProjectCard;
