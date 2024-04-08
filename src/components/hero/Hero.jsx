import { motion } from 'framer-motion'
import './hero.scss'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>Hello I'm Jovana Ljuka</motion.h2>
          <motion.h1 variants={textVariants}>Front-end Developer</motion.h1>
          <motion.div className='btns' variants={textVariants}>
            <motion.button variants={textVariants} whileHover={{ scale: 1.1 }}>
              See the Latest Projects
            </motion.button>
            <motion.button variants={textVariants} whileHover={{ scale: 1.1 }}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src='/scroll.png'
            alt='scroll'
            variants={textVariants}
            animate='scrollButton'
          />
        </motion.div>
      </div>
      <div className='imgContainer'>
        <img src='/cvpic-removebg.png' alt='my image' />
      </div>
    </div>
  )
}

export default Hero
