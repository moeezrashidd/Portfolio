import About from "./components/about"
import Contact from "./components/Contact"

import Footer from "./components/footer"
import Hero from "./components/hero"
import Nav from "./components/navbar"

import Skills from "./components/skills"
import Work from "./components/work"

function App() {


  return (

    <div className="sm:px-16 px-2  bg-[#1E1E20] text-white font-Graphik overflow-hidden ">

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />


      <Contact />
      <Footer />
    </div>

  )
}

export default App
