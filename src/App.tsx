import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-serif bg-bgEspecial">
      <Header />
      <Hero /> 
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App