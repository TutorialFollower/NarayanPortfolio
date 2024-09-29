import React from 'react'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc/index'

import { slideIn } from '../utils/motion'

//eaIU-5CQdj4gSMvYw
// template_mn60z7t
// service_xssw6hr

const Contact = () => {
   
  const formRef = useRef()

   const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
   })

   const [loading, setLoading] = useState(false);
   const handleChange = (e) => {

    const { name, value} = e.target
    setform({...form, [name]: value})

   }

   const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_ul9ypgb",
      "template_onwy1ut",
      {
        from_name: form.name,
        to_name: 'Narayan',
        from_email: form.email,
        to_email: "yannar469@gmail.com",
      },
      "Oh1uZrTMaQz7fQxc0"
    )
    .then(() => {
      setLoading(false)
      alert("Thank you, I will get back to you as fast as possible")

      setform({
        name:'',
        email:'',
        message:'',
      })
    }, (error) =>{
      setLoading(false)
      console.log(error)

      alert("Something went wrong")
    })
   }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-[20px] '
      >
        <p className={`${styles.sectionSubText} animate-pulse`}>Continge</p>
        <h3 className={`${styles.sectionHeadText}`}>Contactus.</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        >
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-10'>Your Name</span>
          <input
          type='text' 
          name = 'name'
          value={form.name}
          onChange={handleChange}
          placeholder='What is your name?'
          className='bg-tertiary py-4 px-6 mb-10 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium  hover:bg-white hover:bg-opacity-25'
          />
          </label>

          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 mt-4'>Your Email</span>
          <input
          type='email'
          name = 'email'
          value={form.email}
          onChange={handleChange}
          placeholder='What is your email'
          className='bg-tertiary py-4 px-6 mb-10 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium  hover:bg-white hover:bg-opacity-25'
          />
          </label>

          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 mt-4'>Your Message</span>
          <textarea
          rows = "7"
          name = 'message'
          value={form.message}
          onChange={handleChange}
          placeholder='What do you want to say?'
          className='bg-tertiary py-4 px-6 mb-10 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium hover:bg-white hover:bg-opacity-25'
          />
          </label>

          <button
          type='submit'
          className='bg-tertiary py-3 mt-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>

      </motion.div>

      <motion.div
      variants={slideIn("right","tween",0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")
