import './App.scss'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <main>
      <section id='Home'>
        <Navbar />
      </section>
      <section>Hero</section>
      <section>Parallax</section>
      <section id='About'>About</section>
      <section>Parallax</section>
      <section id='Skills'>Skills</section>
      <section>Parallax</section>
      <section id='Projects'>Projects</section>
      <section id='Contact'>Contact</section>
    </main>
  )
}

export default App
