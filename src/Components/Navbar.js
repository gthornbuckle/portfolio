import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = ['portfolio', 'about', 'contact'];

const navBrandContainer = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const brandItem = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  }
}

function Navbar() {

  return (
    <nav className="fixed z-50 w-full h-24 px-10 flex flex-row items-center bg-slate-700">
      <motion.a
        href="portfolio"
        className="font-['Source_Code_Pro'] text-2xl pl-4"
        variants={navBrandContainer}
        inital='initial'
        animate='animate'
      >
        <motion.span 
          className='text-teal-300 font-normal'
          variants={brandItem}
        >
          george
        </motion.span>
        <motion.span 
          className='text-slate-300 font-medium'
          variants={brandItem}
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
      <div className='w-48 min-w-min ml-auto flex flex-row justify-self-end text-lg text-slate-300'>
          {navItems.map((e, i) =>
            <NavLink
              key={i}
              to={e}
              end
              className={({ isActive }) => isActive ? 'nav_active' : 'nav_inactive hover:text-teal-300'}
            >
              {e}
            </NavLink>)}
      </div>
    </nav>

  );
}

export default Navbar;