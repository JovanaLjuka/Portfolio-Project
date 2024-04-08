import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <Sidebar />

        <ul className='social'>
          <li>
            <a href='https://www.linkedin.com/in/jovana-ljuka-8280b5157/'>
              <img src='/li.png' alt='linkedin' />
            </a>
          </li>
          <li>
            <a href='https://github.com/JovanaLjuka'>
              <img src='/gh.png' alt='linkedin' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
