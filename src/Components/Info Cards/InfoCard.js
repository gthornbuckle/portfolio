import React from 'react';
import { motion } from 'framer-motion';

function InfoCard() {

  return (
    <div className="info_card selection:bg-teal-200 selection:text-teal-800">
        <div className="h-80 w-3/5 bg-no-repeat bg-left-top" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portfolio-da254.appspot.com/o/Playlist%20Viewer.png?alt=media&token=2f5218d6-be9d-45aa-b989-7b0a5c3163c2")`}}></div>
        <div className='px-4 flex flex-col items-start'>
          <h3 className="py-3 text-yellow-400 text-4xl font-md">Title</h3>
          <div className="py-3 flex flex-row flex-wrap items-center justify-center text-teal-300 text-lg text-center">
              <p className="pr-1">Technology 1</p>
          </div>
          <div className='h-px w-full bg-slate-200'></div>
          <p className="py-3 text-slate-200 text-lg text-justify">Description - Ut et et voluptate officia sit exercitation quis. Lorem anim incididunt amet exercitation eiusmod nulla Lorem exercitation est nostrud anim cillum nulla.</p>
          <div className="absolute right-0 bottom-0 pb-3 text-slate-500 text-xl font-['Work_Sans']">
              <motion.button className="w-36 h-12 bg-teal-300 drop-shadow-sm"
                whileTap={{scale: 0.9, borderRadius: "2rem"}}
                whileHover={{backgroundColor: "#facc15"}}
              >view</motion.button>
              <motion.button className="w-36 h-12 bg-teal-300 drop-shadow-sm"
                whileTap={{scale: 0.9, borderRadius: "2rem"}}
                whileHover={{backgroundColor: "#facc15"}}
              >github</motion.button>
          </div>
        </div>
    </div>
  );
}

export default InfoCard;