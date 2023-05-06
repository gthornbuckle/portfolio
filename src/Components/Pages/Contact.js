import React from 'react';

function Contact() {
  return (
    <>
    <section className='py-24 flex flex-row items-center justify-center selection:bg-slate-500 selection:text-slate-200'>
      <div className='mx-10 container flex flex-col '>
        <h1 className="py-8 text-slate-700 text-6xl font-bold font-['Work_Sans']"><span className="text-teal-600">contact</span>Me_</h1>
        <p className="pb-2 text-2xl text-left text-slate-800">If you have anything you'd like to discuss, feel free to drop me an email!</p>
        <form className='p-8 bg-slate-600 drop-shadow-lg flex flex-col items-start'>
          <label>Name</label><input></input>
          <label>Email</label><input></input>
          <label>Message</label><textarea></textarea>
          <button className='bg-teal-300'>Send</button>
        </form>
      </div>
    </section>  
    </>
  );
}

export default Contact;