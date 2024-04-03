import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Jovana Ljuka
        </motion.h1>
        <ul className='social'>
          <li>
            <a href='https://www.linkedin.com/in/jovana-ljuka-8280b5157/'>
              <img src='/linkedin.png' alt='linkedin' />
            </a>
          </li>
          <li>
            <a href='https://github.com/JovanaLjuka'>
              <img src='/github.png' alt='linkedin' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
