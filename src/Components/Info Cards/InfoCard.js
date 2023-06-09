import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
}

function InfoCard(props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div className="info_card my-10 selection:bg-teal-200 selection:text-teal-800 lg:flex-row lg:items-start"
        variants={cardVariants}
      >
          <div className="h-96 w-96 shrink-0 bg-no-repeat bg-cover" style={{backgroundImage: `url(${props.image})`}}></div>
          <div className='flex flex-col items-start grow-0'>
            <h3 className="py-3 px-3 text-yellow-400 text-4xl font-md">{props.title}</h3>
            <div className="py-3 pl-1 flex flex-row flex-wrap items-center justify-around text-teal-300 text-lg text-center">
                {props.tech.map(e =><div 
                  key={e.name} 
                  className='flex flex-row items-center'>
                    <p className="px-2">{e.name}</p>
                    <img className="h-4 w-4" src={e.icon} alt="icon"></img>
                </div>
                )}
            </div>
            <div className='h-px w-full bg-slate-200'></div>
            <p className="py-3 px-3 text-slate-200 text-lg text-justify lg:text-left">{props.desc}</p>
            <div className="text-slate-700 text-xl font-['Work_Sans'] lg:absolute right-0 -bottom-4">
                <motion.a className="p-3 px-8 cursor-pointer bg-teal-300 drop-shadow-sm"
                  href={props.view}
                  target='_blank' 
                  rel="noreferrer"
                  whileHover={{backgroundColor: "#facc15"}}
                >view</motion.a>
                <motion.a className="p-3 px-8 cursor-pointer bg-teal-300 drop-shadow-sm"
                  href={props.git}
                  target='_blank' 
                  rel="noreferrer"
                  whileHover={{backgroundColor: "#facc15"}}
                >github</motion.a>
            </div>
          </div>
      </motion.div>
    </motion.div>
  );
}

export default InfoCard;