import React from 'react';

function About() {
  return (
    <>
    <section className='pt-24 flex flex-row items-center justify-center selection:bg-slate-500 selection:text-slate-200'>
      <div className='mx-10 container flex flex-col '>
        <h1 className="py-8 text-slate-700 text-6xl font-bold font-['Work_Sans']"><span className="text-teal-600">about</span>Me_</h1>
        <div className='py-4 flex flex-col items-center'>
          <img className="" src="https://placehold.co/600x400"></img>
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
        <div className='py-4 flex flex-col items-center'>
          <img className="" src="https://placehold.co/600x400"></img>
          <div className='flex flex-col py-8 text-slate-800'>
            <h2 className="font-bold text-3xl pb-4">My interests</h2>
            <p className="pb-2 text-xl text-justify">
              My interests in technology & design meant that the choice to switch my career path came naturally to me and I have greatly enjoyed the process so far.
              I like working on personal coding projects in my spare time, some of which are featured on this page, as well as researching and implementing different libraries or components for front end development to further build on my skills.
            </p>
            <p className="py-2 text-xl text-justify">
              However when I'm not working on coding, I like to  indulge in some of my other hobbies which include:
            </p>
            <ul className='text-xl text-justify'>
              <li className="py-2">
                <span className='underline font-semibold decoration-2'>Running</span><br/>
                I run regularly to keep fit and intend to complete my first marathon in 2024.
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
                One of my favourite ways to relax is to work on one of my illustrations. I'm also currently in the process of building a website to host my work.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>  
    </>
  );
}

export default About;