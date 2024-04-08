import { motion } from 'framer-motion'
import './about.scss'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <div className='about'>
      <h1>A few words about me...</h1>
      <div className='wrapper'>
        <p>
          Certified front-end developer, mainly focused on React.js and Node.js
          full-stack development, searching for entry-level positions and
          internships, excited to showcase my skills and passion for creating
          clean and functional designs.
        </p>
      </div>

      <div className='buttons'>
        <div>
          <a href='/Previous.pdf'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Get to know my former career
            </motion.button>
          </a>
        </div>
        <div>
          <a href='/Resume.pdf'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Download my Resume
            </motion.button>
          </a>
        </div>
      </div>

      <Skills />
    </div>
  )
}

export default About
