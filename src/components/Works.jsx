import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image, icon ,source_code_link}) => {
  return(
    <motion.div variants={fadeIn("up","spring", index * 0.5, 0.75)}>
      <Tilt
      options = {{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className = "bg-tertiary p-5 rounded-lg sm:w-[360px] w-full mt-4"
      >
       <div className='relative w-full h-[230px]'>
        <img
        src = {image}
        alt = {name}
        className='w-full h-full object-cover rounded-lg'
        
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div 
        onClick={() => window.open
        (source_code_link, "_blank") }
        className='black-gradient w-10 h-10 rounded-full flex items-center cursor-pointer'
        >

          <img 
          src = {icon}
          alt = "The website"
          className='w-1/2 h-1/2 object-contain mx-auto'
          />
        </div>
        </div>
       </div> 

       <div className='mt-5'>
        <h3 className='text-[#C71585] font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
       </div>
        
      <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14]px ${tag.color}`} >
              #{tag.name}
            </p>

          ))}
      </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#FF10F0] animate-pulse`}>
          Meum Opus
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Opera.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
      >
        These projects showcase my skills and experience as a web and game developer.
        These are real-world examples of my work—some just backend and others full-stack.
      </motion.p>

      <div className='mt-20 flex flex-col items-center'> 
        <div className='flex flex-wrap gap-7 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div> 
      </div>
    </>
  );
};


export default SectionWrapper(Works, "")
