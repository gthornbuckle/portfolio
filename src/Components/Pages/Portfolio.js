import React from 'react';
import { motion } from 'framer-motion';
import InfoCard from '../Info Cards/InfoCard';

function Portfolio() {
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
            <p className="pb-2 text-slate-300 text-2xl text-left">
              I'm George, aspiring front-end developer and recent <a className="text-yellow-400 hover:underline" href='https://www.edx.org' target='_blank'>eDx</a> bootcamp graduate. 
              This page showcases some of the various projects I have worked on so far, both for my bootcamp and personal self-improvement.
            </p>
            <p className="text-slate-300 text-2xl text-left">
              Combining my current coding knowledge along with my eye for design, I am motivated to step into my first developer role.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    <section className='flex flex-row items-center justify-center selection:bg-slate-500 selection:text-slate-200'>
      <div className='mx-10 container flex flex-col'>
        <h1 className="py-4 text-slate-700 text-6xl font-bold font-['Work_Sans']"><span className="text-teal-600">my</span>Work_</h1>
        <h2 className="text-slate-700 text-2xl">Personal Projects</h2>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
          </div>
      </div>
    </section>
    </>
  );
}

export default Portfolio;