import React from 'react';
import { motion } from 'framer-motion';
import about_1 from '../images/about_1.png';
import about_2 from '../images/about_2.png';

function About() {
  return (
    <section className='pt-24 flex flex-row items-center justify-center selection:bg-slate-500 selection:text-slate-200'>
      <div className='mx-10 container flex flex-col '>
        <h1 className="py-8 text-slate-700 text-6xl font-bold font-['Work_Sans']"><span className="text-teal-600">about</span>Me_</h1>
        <div className='py-4 flex flex-col items-center lg:flex-row-reverse'>
          <motion.img className="relative z-30 h-full w-full md:h-[32rem] md:w-[32rem] lg:h-96 lg:pl-10" 
            src={about_1} 
            alt="about_image_1"
            loading="lazy"
            initial={{clipPath: "inset(0 0 0 100%)"}}
            animate={{clipPath: "inset(0 0 0 0)"}}
            transition={{duration: 0.6}}
          />
          <motion.div className='relative bottom-[20rem] right-[10rem]'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
          >
            <motion.div className='absolute sm:hidden md:block left-4 lg:left-72 top-6 lg:top-56 -z-20 h-[20rem] w-[20rem] bg-yellow-400 overflow-hidden'
              initial={{y: -20}}
              animate={{y: 0}}
              transition={{type: "spring", damping: 6, stiffness: 50, delay: 0.1}}
            ></motion.div>
            <motion.div className='absolute sm:hidden md:block -left-4 lg:left-52 lg:top-16 -z-10 h-[20rem] w-[20rem] bg-teal-400 overflow-hidden'
              initial={{y: 20}}
              animate={{y: 0}}
              transition={{type: "spring", damping: 6, stiffness: 50, delay: 0.1}}
            ></motion.div>
          </motion.div>
          <div className='flex flex-col items-start py-8 text-slate-800'>
            <h2 className="font-bold text-3xl pb-4">My career path</h2>
            <p className="pb-2 text-xl text-justify">
              I originally trained as a mechanical engineer but have recently made the decision to learn to code and pursue a career in web development. 
              This led me to partake in a 16 week eDx coding bootcamp in which I developed knowledge in html, css, javascript & react among other things. 
              The fast-paced nature of the bootcamp allowed me to quickly familiarise myself with the key aspects of front end development despite having only a basic grasp beforehand.
            </p>
            <p className="pt-2 text-xl text-justify">
              After completing my bootcamp in March of 2023, I continued to hone my skills by working on personal projects in my spare time as well as exploring new concepts to further build on my development. 
              I am now eager to step into my first role as a front end developer and hope to push myself further.
            </p>
          </div>
        </div>
        <div className='py-4 flex flex-col items-center lg:flex-row'>
          <motion.img className="relative h-full w-full md:h-[32rem] md:w-[26rem] lg:h-[36rem] lg:w-full lg:pr-10" 
            src={about_2} 
            alt="about_image_2"
            loading="lazy"
            initial={{clipPath: "inset(0 100% 0 0)"}}
            animate={{clipPath: "inset(0 0 0 0)"}}
            transition={{duration: 0.6}}
          />
          <motion.div className='relative bottom-[32rem] right-[10rem]'>
            <motion.div className='absolute sm:hidden md:block left-4 lg:-left-[22rem] top-10 lg:top-44 -z-20 h-[24rem] lg:h-[32rem] w-[10rem] bg-yellow-400'
              initial={{y: 20}}
              animate={{y: 0}}
              transition={{type: "spring", damping: 6, stiffness: 50, delay: 0.1}}
            ></motion.div>
            <motion.div className='absolute sm:hidden md:block left-4 top-40 lg:-left-52 lg:top-80 -z-10 h-[24rem] lg:h-[32rem] w-[20rem] bg-teal-400'
              initial={{y: -20}}
              animate={{y: 0}}
              transition={{type: "spring", damping: 6, stiffness: 50, delay: 0.1}}
            ></motion.div>
          </motion.div>
          <div className='flex flex-col py-8 text-slate-800'>
            <h2 className="font-bold text-3xl pb-4">My interests</h2>
            <p className="pb-2 text-xl text-justify">
              My interests in technology & design meant that the choice to switch my career path came naturally to me and I have greatly enjoyed the process so far.
              I like working on personal coding projects in my spare time, some of which are featured on this page, as well as researching and implementing different libraries or components for front end development to further build on my skills.
            </p>
            <p className="py-2 text-xl text-justify">
              When I'm not coding, I like to  indulge in some of my other hobbies which include:
            </p>
            <ul className='text-xl text-justify'>
              <li className="py-2">
                <span className='underline font-semibold decoration-2'>Running</span><br/>
                I run regularly to keep myself fit and intend to complete my first marathon in 2024.
              </li>
              <li className="py-2">
                <span className='underline font-semibold decoration-2'>Hiking</span><br/>
                I have hiked various routes around the UK and have completed the Yorkshire Three Peaks challenge back in 2021. I hope to one day take on the National Three Peaks.
              </li>
              <li className="py-2">
                <span className='underline font-semibold decoration-2'>Snowboarding/Skiing</span><br/>
                Having enjoyed winter sports from a young age, I am always up for snowboarding or skiing, either abroad or right here in the UK.
              </li>
              <li className="py-2">
                <span className='underline font-semibold decoration-2'>Drawing</span><br/>
                When I get the chance I like to spend time working on my digital illustrations. I'm currently in the process of building a website to display my work.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;