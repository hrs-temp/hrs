import React from 'react';
import { skills } from '../data/config';

const Skills = () => {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors group cursor-default">
              <div className="text-cyan-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-bold text-slate-200">{skill.name}</h3>
              <p className="text-xs text-slate-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
