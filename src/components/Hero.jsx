import React from 'react';
import { Terminal, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/config';
import InteractiveTerminal from './InteractiveTerminal'; // CHANGED

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <Terminal size={14} />
              <span>System.ready()</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Hi, I'm {personalInfo.name}. <br />
              <span className="text-slate-500">I build stuff.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2">
                View Work <ExternalLink size={18} />
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-700 text-white hover:border-slate-500 rounded-lg font-medium transition-all hover:bg-slate-900 flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Interactive Terminal Visual */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <InteractiveTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
