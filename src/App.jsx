import About from "./components/about"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Nav from "./components/navbar"
import Reviews from "./components/reviews"
import Work from "./components/work"

function App() {


  return (

      <div className= "  sm:px-28 px-6 bg-[#1E1E20] text-white font-Graphik overflow-x-hidden">

        <Nav />
        <Hero />
        <About />
        <Work />
        <Reviews />
        <Footer />
      </div>
  
  )
}

export default App
