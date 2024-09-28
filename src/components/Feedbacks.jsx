import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc/index'
import { fadeIn, textVariant } from '../utils/motion'

import { testimonials } from '../constants'

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (

  <motion.div
  variants={fadeIn("","spring",index*0.5,0.75)}
  className='bg-black-200 p-10 rounded-[20px] xs:w-[320px] w-full mx-auto'
  >
    <p className='text-[#A200FF] text-[64px] font-bold'>"</p>

    <div className='mt-7 flex flex-col gap-1'>
  <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
  
  <div className='flex justify-between items-center'>
    <div className='flex-1 flex flex-col'>
      <p className='text-white font-medium text-[16px]'>
        <span className='pink-text-gradient animate-pulse'>@</span>
        {name}
      </p>
      <p className='mt-1 text-secondary text-[12px]'>
        {designation} of {company}
      </p>
    </div>
     
     <img
     src={image}
     alt = {`feedback-by-${name}`}
     className=' mt-2 w-10 h-10 rounded-full object-cover'
     />

  </div>
</div>


    
  </motion.div>

) 

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2x1 min-h [300px]`}>

      <motion.div variants={textVariant()}>
      <p className= {`${styles.sectionSubText} flex flex-col text-center text-[#FF10F0] animate-pulse`}>Quod alii dicunt</p>
      <h2 className={`${styles.sectionHeadText} flex flex-col text-center`}>Martyría.</h2>
      </motion.div>

      </div>
      <div className={`${styles.paddingX} -mt-12 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
          key = {testimonial.name}
          index = {index}
          {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")