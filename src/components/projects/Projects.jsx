import './projects.scss'
import { projects } from '../../data'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Single = ({ project }) => {
  const { image, title, url, github, text } = project
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0])

  return (
    <section ref={ref} id='Projects'>
      <div className='container'>
        <div className='wrapper'>
          <div className='img-container'>
            <motion.img
              src={image}
              alt={title}
              whileHover={{ scale: 1.5, x: 100, z: -1 }}
            />
          </div>
          <motion.div className='text-container' style={{ y }}>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className='btns'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a href={url}>Live Demo</a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a href={github}>Source Code</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className='projects' ref={ref}>
      <div className='progress'>
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className='progress-bar'></motion.div>
      </div>
      {projects.map((project) => (
        <Single project={project} key={project.id} />
      ))}
    </div>
  )
}

export default Projects
