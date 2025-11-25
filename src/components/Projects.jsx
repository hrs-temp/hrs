import React, { useState } from 'react';
import { ExternalLink, Cpu, Monitor } from 'lucide-react';
import { projects } from '../data/config';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Extract unique categories dynamically
  const categories = ['all', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-white transition-colors">
                    {project.category === 'Hardware' ? <Cpu size={20}/> : <Monitor size={20}/>}
                  </div>
                  <a href={project.link} className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono rounded bg-slate-950 text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
