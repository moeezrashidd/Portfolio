import About from "./components/about"
import Experience from "./components/experience"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Nav from "./components/navbar"
import Reviews from "./components/reviews"
import Skills from "./components/skills"
import Work from "./components/work"

function App() {


  return (

    <div className="sm:px-16 px-2  bg-[#1E1E20] text-white font-Graphik overflow-x-hidden">

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Reviews />
      <Footer />
    </div>

  )
}

export default App
