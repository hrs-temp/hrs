import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/config';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/30 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Whether you want to discuss Embedded Systems, Linux configs, or just want to chat about why Arch is superior, my inbox is open.
        </p>
        
        <div className="flex justify-center gap-6">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 text-white rounded-full hover:bg-cyan-600 transition-all hover:scale-110">
            <Github size={24} />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 text-white rounded-full hover:bg-blue-600 transition-all hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href={personalInfo.socials.email} className="p-4 bg-slate-800 text-white rounded-full hover:bg-red-500 transition-all hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <div className="mt-16 text-slate-600 text-sm">
          <p>Built with React & Tailwind. Configured on Neovim.</p>
          <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
