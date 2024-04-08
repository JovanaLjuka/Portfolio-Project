import './skills.scss'

import img1 from '/html.svg'
import img2 from '/css.svg'
import img3 from '/javascript.svg'
import img4 from '/react.svg'
import img5 from '/node-js.svg'
import img6 from '/express.svg'
import img7 from '/sass.svg'
import img8 from '/tailwind.svg'
import img9 from '/redux.svg'
import img10 from '/npm.svg'
import img11 from '/git.svg'
import img12 from '/mongodb.svg'

const Skills = () => {
  const icons = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ]
  return (
    <div className='skills'>
      {icons.map((icon, index) => {
        return <img src={icon} alt={icon} key={index} />
      })}
    </div>
  )
}

export default Skills
