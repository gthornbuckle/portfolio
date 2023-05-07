import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['portfolio', 'about', 'contact'];

function Navbar() {
const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full h-24 px-10 flex flex-row items-center justify-between bg-slate-700">
      <motion.a
        href="portfolio"
        className="font-['Source_Code_Pro'] text-2xl"
      >
        <motion.span 
          className='text-teal-300 font-normal'
        >
          george
        </motion.span>
        <motion.span 
          className='text-slate-300 font-medium'
        >
          Hornbuckle
        </motion.span>
        <motion.span
          className='text-slate-300 font-medium'
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, type: "linear" }}
        >
          _
        </motion.span>
      </motion.a>
      <div className='cursor-pointer sm:hidden' onClick={() =>{setNavOpen(!navOpen)}}>
          <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" width="24" height="24" stroke="#cbd5e1" strokeWidth="1"
            initial={false}
            animate={navOpen ? {stroke: "#5eead4", rotate: 90} : {stroke:"#cbd5e1"}}
          >
              <motion.line 
                className="cls-1" y1="1" x2="12" y2="1"
                initial={false}
                animate={navOpen ? { rotate: -45, pathLength: 0.7 } : { rotate: 0, pathLength: 0.8 }}
              />
              <motion.line 
                className="cls-1" y1="9" x2="12" y2="9"
                initial={false}
                animate={navOpen ? { rotate: 45, pathLength: 0.7 } : { rotate: 0, pathLength: 0.8 }}
              />
              <motion.line 
                className="cls-1" y1="5" x2="12" y2="5"
                initial={false}
                animate={navOpen ? { pathLength: 0.7, pathOffset: 1 } : { pathLength: 1, pathOffset: 0 }}
              />
          </motion.svg>
      </div>
      <AnimatePresence>
        {navOpen &&(<motion.div className='absolute p-4 flex flex-col items-center justify-center inset-x-0 top-24 bg-slate-800'
          initial={{clipPath: "inset(0% 0% 100% 0%)"}}
          animate={{clipPath: "inset(0% 0% 0% 0%)"}}
          exit={{clipPath: "inset(0% 0% 100% 0%)"}}
        >
          {navItems.map((e, i) =>
              <NavLink
                key={i}
                to={e}
                end
                className='text-slate-300 p-4 hover:text-teal-300'
                onClick={() =>{setNavOpen(!navOpen)}}
              >
                {e}
            </NavLink>
          )}
        </motion.div>)}
      </AnimatePresence>
      <div className='hidden w-48 min-w-min ml-auto sm:flex flex-row justify-self-end text-lg text-slate-300'>
          {navItems.map((e, i) =>
            <NavLink
              key={i}
              to={e}
              end
              className={({ isActive }) => isActive ? 'nav_active' : 'nav_inactive hover:text-teal-300'}
            >
              {e}
            </NavLink>
          )}
      </div>
    </nav>

  );
}

export default Navbar;