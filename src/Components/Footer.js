import React from 'react';
import githubicon from './icons/SVG_Footer/github_footer.svg';
import linkedinicon from './icons/SVG_Footer/linkedin_footer.svg';

function Footer() {

  return (
    <footer className="footer md:flex-row justify-between px-16">
        <p className ="pb-2 text-center text-slate-300">© George Hornbuckle | 2023</p>
        <div className ="p-4 text-slate-300 flex flex-row">
          <a className="flex flex-row items-center pl-4" href="https://github.com/gthornbuckle" target='_blank' rel="noreferrer">
            <img className="w-4 h-4" src={githubicon} alt="github_icon"/>
            <span className='pl-2 hover:underline'>Github</span>
          </a>
          <a className="flex flex-row items-center pl-4" href="https://www.linkedin.com/in/gthornbuckle/" target='_blank' rel="noreferrer">
            <img className="w-4 h-4" src={linkedinicon} alt="linkedin_icon"/>
            <span className='pl-2 hover:underline'>LinkedIn</span>
          </a>
        </div>
    </footer>
  );
}

export default Footer;