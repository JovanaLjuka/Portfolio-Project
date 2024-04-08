import './App.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'

function App() {
  return (
    <main>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>
        <About />
      </section>

      <Projects />

      <section id='Contact'>
        <Contact />
      </section>
    </main>
  )
}

export default App
