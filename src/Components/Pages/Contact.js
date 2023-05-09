import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_q49t5mu', 'template_u4jchqm', form.current, '889LIY5ijmdu1Wjk7')
      .then(() => {
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='py-24 flex flex-row items-center justify-center selection:bg-slate-500 selection:text-slate-200'>
      <div className='mx-10 container flex flex-col items-center md:items-start'>
        <h1 className="py-8 text-slate-700 text-6xl font-bold font-['Work_Sans']"><span className="text-teal-600">contact</span>Me_</h1>
        <p className="pb-6 text-2xl text-center text-slate-800 md:text-left">If you have anything you'd like to discuss, feel free to drop me an email!</p>
        <form className='p-8 bg-slate-600 text-slate-200 drop-shadow-lg w-full h-fit flex flex-col justify-between'
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='flex flex-col'>
            <label>Name</label>
            <input className=' pl-1 bg-slate-300 text-slate-800 text-lg font-medium h-8'
              type="text" 
              name="from_name"
            />
          </div>
          <div className='flex flex-col'>
            <label>Email</label>
            <input className=' pl-1 bg-slate-300 text-slate-800 text-lg font-medium h-8 invalid:border-rose-400'
              type="email"
              name="from_email"
            />
          </div>
          <div className='flex flex-col'>
            <label>Message</label>
            <textarea className='pl-1 bg-slate-300 text-slate-800 text-lg font-medium h-32 lg:h-64 resize-none'
              name="message"
            />
          </div>
          <motion.button className='mt-6 p-2 bg-teal-300 text-slate-800 font-bold md:self-end px-10'
            type="submit" 
            value="Send"
            whileHover={{backgroundColor: "#facc15"}}
          >
            Send
          </motion.button>
        </form>
      </div>
    </section>
  );
}

export default Contact;