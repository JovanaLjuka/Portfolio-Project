import { useState } from 'react'
import Links from './Links/Links'
import './sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 40,
      },
    },
    closed: {
      clipPath: 'circle(0px at 0px 0px)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 40,
      },
    },
  }

  return (
    <motion.div className='sidebar' animate={isOpen ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  )
}

export default Sidebar
