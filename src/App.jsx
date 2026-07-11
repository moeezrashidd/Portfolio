import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from "./components/about"
import Contact from "./components/Contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Skills from "./components/skills"
import Work from "./components/work"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'aboutUs', 'skills', 'work', 'Contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
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
    setSidebarOpen(false);
  };

  return (
    <div className="sm:px-16 px-2 bg-[#1E1E20] text-white font-Graphik overflow-hidden">
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
        <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#1E1E20] border-b border-gray-700 px-4 py-3 flex justify-between items-center">
          <span className="text-white font-semibold">Moeez Rashid</span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Main scrollable content */}
        <div className="lg:pt-0 pt-16">
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
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App
