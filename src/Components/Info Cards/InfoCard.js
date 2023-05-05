import React from 'react';
import { motion } from 'framer-motion';

function InfoCard(props) {

  return (
    <div className="info_card selection:bg-teal-200 selection:text-teal-800">
        <div className="h-80 w-3/5 bg-no-repeat bg-left-top" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/Playlist%20Viewer.png?alt=media&token=2f5218d6-be9d-45aa-b989-7b0a5c3163c2")`}}></div>
        <div className='flex flex-col items-start'>
          <h3 className="py-3 px-3 text-yellow-400 text-4xl font-md">{props.title}</h3>
          <div className="py-3 flex flex-row flex-wrap items-center justify-around text-teal-300 text-lg text-center">
              {props.tech.map(e =><div className='flex flex-row items-center'>
                <p key={e.name} className="px-3">{e.name}</p>
                <img className="h-6 w-6" src={e.icon} alt="icon"></img>
              </div>)}
          </div>
          <div className='h-px w-full bg-slate-200'></div>
          <p className="py-3 px-3 text-slate-200 text-lg text-justify">{props.desc}</p>
          <div className="absolute right-0 bottom-4 text-slate-500 text-xl font-['Work_Sans']">
              <motion.a className="p-3 cursor-pointer bg-teal-300 drop-shadow-sm"
                href={props.view}
                target='_blank' 
                rel="noreferrer"
                whileTap={{scale: 0.9, borderRadius: "2rem"}}
                whileHover={{backgroundColor: "#facc15"}}
              >view</motion.a>
              <motion.a className="p-3 cursor-pointer bg-teal-300 drop-shadow-sm"
                href={props.git}
                target='_blank' 
                rel="noreferrer"
                whileTap={{scale: 0.9, borderRadius: "2rem"}}
                whileHover={{backgroundColor: "#facc15"}}
              >github</motion.a>
          </div>
        </div>
    </div>
  );
}

export default InfoCard;