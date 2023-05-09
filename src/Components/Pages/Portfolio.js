import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InfoCard from '../Info Cards/InfoCard';
import { workData, mySkills } from '../work_data';

const cvLinkContainer = {
  hover: {
    transition:{
      staggerChildren: 0.1
    }
  }
}

const cvChild = {
  initial:{
    y: 0
  },
  hover:{
    y: -12
  }
}

const skillsContainer = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const skillChild = {
  offscreen:{
    opacity: 0,
    y:20
  },
  onscreen:{
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
}

function Portfolio() {
  const [cvHover, setcvHover] = useState(false);
  
  return (
    <>
    <section className='h-[50rem] pt-24 bg-slate-700 flex flex-row items-center justify-center'>
      <div className='mx-10 container'>
        <div className="flex flex-col">
          <motion.h1 
            className="py-4 text-teal-300 text-6xl font-bold drop-shadow-md font-['Work_Sans']"
            animate={{ x: [-200, 0] }}
            transition={{type: 'spring',  duration: 2}}
          >
            hello!
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="pb-2 text-slate-300 text-2xl text-justify md:text-left">
              I'm George, aspiring front end developer and recent <a className="text-yellow-400 hover:underline" href='https://www.edx.org' target='_blank' rel="noreferrer">eDx</a> bootcamp graduate. 
              This page showcases some of the various projects I have worked on so far, both for my bootcamp and personal self-improvement.
            </p>
            <p className="text-slate-300 text-2xl text-left">
              Combining my current coding knowledge along with my eye for design, I am motivated to step into my first developer role.
            </p>
          </motion.div>
          <motion.div className="py-4 w-fit cursor-pointer"
            onMouseOver={() => setcvHover(true)} 
            onMouseOut={() => setcvHover(false)}
            initial={false}
            animate={cvHover ? "hover" : "initial"}
            variants={cvLinkContainer}
          >
            <motion.a className="py-4 flex flex-row text-4xl font-bold drop-shadow-md font-['Work_Sans'] decoration-slate-300">
              <motion.div className="text-teal-300" variants={cvChild}>view</motion.div>
              <motion.div className="text-slate-300" variants={cvChild}>My</motion.div>
              <motion.div className="text-yellow-400" variants={cvChild}>CV</motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
    <section className='flex flex-row items-center justify-center selection:bg-slate-500 selection:text-slate-200'>
      <div className='mx-10 container flex flex-col'>
        <h1 className="py-8 text-slate-700 text-6xl font-bold font-['Work_Sans']"><span className="text-teal-600">my</span>Work_</h1>
          <div className='py-2'>
            {workData.map((data, i) =><InfoCard
              key={`${data.title}-${i}`}
              title={data.title}
              tech={data.technologies}
              desc={data.description}
              view={data.url}
              git={data.github}
              image={data.image}
            />)}
          </div>
      </div>
    </section>
    <section className='flex flex-row items-center justify-center selection:bg-slate-500 selection:text-slate-200'>
      <div className='mx-10 container flex flex-col'>
        <h1 className="py-2 text-slate-700 text-6xl font-bold font-['Work_Sans']"><span className="text-teal-600">my</span>Skills_</h1>
        <motion.div className="py-6 font-['Work_Sans'] text-center font-bold text-slate-700 grid grid-cols-2 md:grid-cols-4"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={skillsContainer}
        >
          {mySkills.map((skill, i) =><motion.div
            key={i} 
            className='p-12 flex flex-col items-center'
            variants={skillChild}
          >
            <h2 className="pb-2 text-xl md:text-3xl">{skill.name}</h2>
            <img className="h-32 w-32" src={skill.icon} alt={`${skill.name}_icon`}></img>
          </motion.div>
          )}
        </motion.div>
      </div>
    </section>
    </>
  );
}

export default Portfolio;