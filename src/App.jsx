import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from "./components/about"
import Contact from "./components/Contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Skills from "./components/skills"
import Work from "./components/work"
import ProjectDetail from "./components/subComp/projectDetail";
import { projects } from "./data/data";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);

  // Track window size to switch layouts
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hash-based Dynamic Router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        const foundProject = projects.find(p => p.id === projectId);
        if (foundProject) {
          setCurrentProject(foundProject);
          setActiveSection('work');
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
          setCurrentProject(null);
        }
      } else {
        setCurrentProject(null);
        
        const targetSection = hash.replace('#', '');
        const validSections = ['home', 'aboutUs', 'skills', 'work', 'Contact'];
        if (validSections.includes(targetSection)) {
          setActiveSection(targetSection);
          
          setTimeout(() => {
            const element = document.getElementById(targetSection);
            if (element) {
              if (window.innerWidth < 1024) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
              }
            }
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // on load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle scroll to update active section (only on mobile when not viewing a project details page)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024 || window.location.hash.startsWith('#/project/')) return;
      const sections = ['home', 'aboutUs', 'skills', 'work', 'Contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    window.location.hash = sectionId;
    setSidebarOpen(false);
  };

  return (
    <div className="lg:px-8 sm:px-6 px-4 bg-[#1E1E20] text-white font-Graphik overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Mobile Header with Hamburger */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] bg-[#1E1E20] border-b border-gray-700 px-4 py-3 flex justify-between items-center">
          <span className="text-white font-semibold">Moeez Rashid</span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Main content viewport */}
        <div className="lg:pt-0 pt-16">
          {isMobile ? (
            currentProject ? (
              <ProjectDetail project={currentProject} />
            ) : (
              // Mobile Mode: Render all sections continuously
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="aboutUs">
                  <About />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="work">
                  <Work />
                </section>
                <section id="Contact">
                  <Contact />
                </section>
                <Footer />
              </>
            )
          ) : (
            // Laptop/Desktop Mode: Render active section only (like tabs)
            <div className="flex flex-col min-h-screen justify-between">
              <div className="flex-grow">
                {currentProject ? (
                  <ProjectDetail project={currentProject} />
                ) : (
                  <>
                    {activeSection === 'home' && (
                      <section id="home" className="animate-fadeIn">
                        <Hero />
                      </section>
                    )}
                    {activeSection === 'aboutUs' && (
                      <section id="aboutUs" className="animate-fadeIn">
                        <About />
                      </section>
                    )}
                    {activeSection === 'skills' && (
                      <section id="skills" className="animate-fadeIn">
                        <Skills />
                      </section>
                    )}
                    {activeSection === 'work' && (
                      <section id="work" className="animate-fadeIn">
                        <Work />
                      </section>
                    )}
                    {activeSection === 'Contact' && (
                      <section id="Contact" className="animate-fadeIn">
                        <Contact />
                      </section>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-[55]"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App
