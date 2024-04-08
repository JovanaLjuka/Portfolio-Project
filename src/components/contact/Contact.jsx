import { useRef } from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser'
import { motion, useInView } from 'framer-motion'
import { toast } from 'react-toastify'

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const Contact = () => {
  const form = useRef()
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_31lxs4w', 'template_6u8njve', form.current, {
        publicKey: 'dBZg7UWZcdcPKf-tk',
      })
      .then(() => {
        toast.success('Email sent')
        console.log('SUCCESS')
      })
      .catch((err) => {
        console.error('failed', err)
      })
    e.target.reset()
  }

  return (
    <motion.div
      className='contact'
      ref={ref}
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className='text-container' variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className='item' variants={variants}>
          <h2>E-mail</h2>
          <span>jovanaljuka1@gmail.com</span>
        </motion.div>

        <motion.div className='item' variants={variants}>
          <h2>Phone</h2>
          <span>+381616838255</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
          <p>Based in Belgrade, Serbia. 📍</p>
        </motion.div>
      </motion.div>
      <div className='form-container'>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input type='text' required placeholder='Name' name='name' />
          <input type='email' required placeholder='Email' name='email' />
          <textarea rows={8} placeholder='Message' name='message' />
          <button type='submit' value='send'>
            Submit
          </button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
