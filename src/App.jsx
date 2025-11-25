import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Monitor, 
  Zap 
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Personal Information based on your profile
  const me = {
    name: "Harsh",
    role: "ECE Student & Linux Enthusiast",
    tagline: "I break things to see how they work. And yes, I use Arch btw.",
    bio: "I am an Electronics and Communication Engineering student bridging the gap between hardware and software. Currently mastering the art of C++, Python, and low-level system configuration on my Dell 14 Plus.",
  };

  // Projects based on your history
  const projects = [
    {
      id: 1,
      title: "Indoor Air Quality Monitor",
      category: "Hardware",
      description: "An Arduino-based environmental station using GP2Y Dust Sensors and MQ135 Gas Sensors. Features real-time LCD output for dust density and gas levels.",
      tech: ["Arduino", "C++", "Sensors", "I2C"],
      link: "#"
    },
    {
      id: 2,
      title: "AI Surveillance System",
      category: "Software",
      description: "A C++ application integrating Ollama (Gemma3) to process webcam feeds every 50 seconds for automated change detection and security monitoring.",
      tech: ["C++", "Ollama", "AI", "Computer Vision"],
      link: "#"
    },
    {
      id: 3,
      title: "Arch Linux Rice",
      category: "Config",
      description: "Custom customized development environment featuring Neovim (LazyVim), Tmux, Kitty terminal, and Fastfetch on GNOME.",
      tech: ["Bash", "Lua", "Linux", "Neovim"],
      link: "#"
    }
  ];

  const skills = [
    { name: "Arch Linux", icon: <Terminal size={20} />, level: "Daily Driver" },
    { name: "C++", icon: <Code2 size={20} />, level: "Intermediate" },
    { name: "Electronics (ECE)", icon: <Cpu size={20} />, level: "Academic" },
    { name: "Neovim", icon: <Code2 size={20} />, level: "Preferred Editor" },
    { name: "Python", icon: <Code2 size={20} />, level: "Basics" },
    { name: "Git", icon: <Github size={20} />, level: "Version Control" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* --- NAV --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            HARSH.DEV
          </div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                <Terminal size={14} />
                <span>System.ready()</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I'm {me.name}. <br />
                <span className="text-slate-500">I build stuff.</span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                {me.role}. {me.tagline}
              </p>

              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2">
                  View Work <ExternalLink size={18} />
                </button>
                <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-lg font-medium transition-all hover:bg-slate-900 flex items-center gap-2">
                  <Github size={18} /> GitHub
                </button>
              </div>
            </div>

            {/* Visual Element - "The Terminal" */}
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-900/20">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-slate-400 font-mono">harsh@dell-14plus:~</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-4">
                  <div>
                    <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> neofetch
                  </div>
                  <div className="text-slate-300">
                    <div className="flex gap-4">
                      <div className="text-cyan-500 hidden sm:block">
                        {/* ASCII Art simplified */}
                        &nbsp;&nbsp;&nbsp;&nbsp;/\<br/>
                        &nbsp;&nbsp;&nbsp;/  \<br/>
                        &nbsp;&nbsp;/    \<br/>
                        &nbsp;/      \<br/>
                        /________\
                      </div>
                      <div>
                        <span className="font-bold text-cyan-400">OS</span>: Arch Linux x86_64<br/>
                        <span className="font-bold text-cyan-400">Host</span>: Dell 14 Plus<br/>
                        <span className="font-bold text-cyan-400">Shell</span>: zsh 5.9<br/>
                        <span className="font-bold text-cyan-400">WM</span>: GNOME (Wayland)<br/>
                        <span className="font-bold text-cyan-400">Editor</span>: Neovim (LazyVim)<br/>
                        <span className="font-bold text-cyan-400">Tools</span>: yt-dlp, mpv, tmux<br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS & ABOUT --- */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors group">
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

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>
            {/* Filter Tabs */}
            <div className="flex gap-2 mt-4 md:mt-0">
              {['all', 'Hardware', 'Software'].map((tab) => (
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => activeTab === 'all' || p.category === activeTab)
              .map((project) => (
              <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-white transition-colors">
                      {project.category === 'Hardware' ? <Cpu size={20}/> : <Monitor size={20}/>}
                    </div>
                    <a href={project.link} className="text-slate-500 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
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
                {/* Gradient Border Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-20 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you want to discuss Embedded Systems, Linux configs, or just want to chat about why Arch is superior to Windows, my inbox is open.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:harsh@example.com" className="p-4 bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>Built with React & Tailwind. Configured on Neovim.</p>
        <p className="mt-2 text-xs opacity-50">© 2025 Harsh. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Portfolio;
