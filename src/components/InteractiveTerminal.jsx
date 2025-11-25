import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square, Terminal as TerminalIcon } from 'lucide-react';
import { projects, skills, personalInfo } from '../data/config';

const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Arch Linux (Kernel 6.6.x-arch)' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [currentPath, setCurrentPath] = useState('~');
  
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Focus input on click anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Command Logic
  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      const newHistory = [...history, { type: 'command', path: currentPath, content: command }];
      
      // Process Command
      let output = null;
      const args = command.split(' ');
      const cmd = args[0].toLowerCase();

      switch (cmd) {
        case 'help':
          output = (
            <div className="text-slate-300 space-y-1">
              <p>Available commands:</p>
              <div className="grid grid-cols-2 gap-2 max-w-xs text-cyan-400">
                <span>fastfetch</span> <span>Show system info</span>
                <span>ls</span> <span>List directory</span>
                <span>cat [file]</span> <span>Read file</span>
                <span>cd [dir]</span> <span>Change directory</span>
                <span>clear</span> <span>Clear terminal</span>
                <span>whoami</span> <span>Current user</span>
                <span>date</span> <span>Show time</span>
                <span>sudo</span> <span>???</span>
              </div>
            </div>
          );
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return; // Special case to avoid adding null output

        case 'ls':
          if (currentPath === '~') {
            output = (
              <div className="flex gap-4 text-cyan-400 font-bold">
                <span>projects/</span>
                <span className="text-slate-300 font-normal">about.txt</span>
                <span className="text-slate-300 font-normal">skills.txt</span>
                <span className="text-slate-300 font-normal">contact.md</span>
              </div>
            );
          } else if (currentPath === '~/projects') {
             output = (
              <div className="flex flex-col text-cyan-400 font-bold">
                {projects.map(p => <span key={p.id}>{p.title.replace(/\s+/g, '_').toLowerCase()}*</span>)}
              </div>
            );
          }
          break;

        case 'cd':
          const target = args[1];
          if (!target || target === '~') {
            setCurrentPath('~');
          } else if (target === 'projects' && currentPath === '~') {
            setCurrentPath('~/projects');
          } else if (target === '..' && currentPath !== '~') {
            setCurrentPath('~');
          } else {
            output = <span className="text-red-400">cd: no such file or directory: {target}</span>;
          }
          break;

        case 'cat':
          const file = args[1];
          if (currentPath === '~') {
            if (file === 'about.txt') output = <p className="text-slate-300">{personalInfo.bio}</p>;
            else if (file === 'skills.txt') {
              output = (
                <div className="text-slate-300">
                  {skills.map(s => <div key={s.name}>- {s.name} ({s.level})</div>)}
                </div>
              );
            }
            else if (file === 'contact.md') {
               output = (
                <div className="text-slate-300">
                  <p>GitHub: {personalInfo.socials.github}</p>
                  <p>LinkedIn: {personalInfo.socials.linkedin}</p>
                  <p>Email: {personalInfo.socials.email}</p>
                </div>
              );
            } else {
              output = <span className="text-red-400">cat: {file}: No such file or directory</span>;
            }
          } else {
             output = <span className="text-red-400">cat: {file}: No such file or directory</span>;
          }
          break;

        case 'fastfetch':
        case 'neofetch':
          output = (
             <div className="flex gap-4 text-sm font-mono mt-2">
                <div className="text-cyan-500 hidden sm:block whitespace-pre select-none leading-tight">
{` 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣷⣤⣙⢻⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⡿⠛⠛⠿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⠿⣆⠀⠀⠀⠀
⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀
⠀⢀⣾⣿⣿⠿⠟⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠻⠿⣿⣿⣷⡀⠀
⣠⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣄

`}
                </div>
                <div className="space-y-1 text-slate-300">
                  <div><span className="font-bold text-cyan-400">harsh</span>@<span className="font-bold text-cyan-400">dell-14plus</span></div>
                  <div>-------------------</div>
                  <div><span className="font-bold text-cyan-400">OS</span>: Arch Linux x86_64</div>
                  <div><span className="font-bold text-cyan-400">Host</span>: Dell Inspiron 14 Plus</div>
                  <div><span className="font-bold text-cyan-400">Kernel</span>: 6.6.1-arch1-1</div>
                  <div><span className="font-bold text-cyan-400">Uptime</span>: 4 hours, 20 mins</div>
                  <div><span className="font-bold text-cyan-400">Packages</span>: 694 (pacman)</div>
                  <div><span className="font-bold text-cyan-400">Shell</span>: zsh 5.9</div>
                  <div><span className="font-bold text-cyan-400">WM</span>: GNOME (Wayland)</div>
                  <div><span className="font-bold text-cyan-400">Terminal</span>: kitty</div>
                  <div><span className="font-bold text-cyan-400">Editor</span>: nvim (LazyVim)</div>
                  <div><span className="font-bold text-cyan-400">Media</span>: yt-dlp, mpv</div>
                </div>
              </div>
          );
          break;

        case 'whoami':
          output = "harsh";
          break;
        
        case 'date':
          output = new Date().toString();
          break;

        case 'sudo':
          output = <span className="text-red-500 italic">harsh is not in the sudoers file. This incident will be reported.</span>;
          break;

        case '':
          break;

        default:
          output = <span className="text-red-400">zsh: command not found: {cmd}</span>;
      }

      if (output) {
        newHistory.push({ type: 'output', content: output });
      }
      
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div 
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden bg-[#1e1e2e] border border-slate-700 shadow-2xl shadow-cyan-900/20 font-mono text-sm"
      onClick={handleTerminalClick}
    >
      {/* Kitty Window Bar */}
      <div className="bg-[#181825] px-4 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2 text-slate-400">
          <TerminalIcon size={14} />
          <span className="text-xs">harsh@dell-14plus: {currentPath}</span>
        </div>
        <div className="flex gap-2">
          <Minus size={14} className="text-slate-500 hover:text-slate-300 cursor-pointer" />
          <Square size={12} className="text-slate-500 hover:text-slate-300 cursor-pointer" />
          <X size={14} className="text-slate-500 hover:text-red-400 cursor-pointer" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[400px] overflow-y-auto custom-scrollbar cursor-text" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        
        {/* History */}
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === 'command' ? (
              <div className="flex gap-2 text-slate-300">
                <span className="text-green-400">➜</span>
                <span className="text-cyan-400">{line.path}</span>
                <span>{line.content}</span>
              </div>
            ) : (
              <div className="text-slate-400 ml-4">{line.content}</div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex gap-2 items-center text-slate-300">
          <span className="text-green-400">➜</span>
          <span className="text-cyan-400">{currentPath}</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-slate-200 w-full caret-transparent"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
            {/* Custom Block Cursor implementation */}
            <span className="absolute top-0 left-0 pointer-events-none whitespace-pre">
              {input}
              <span className="inline-block w-2.5 h-5 bg-slate-400 align-middle animate-pulse ml-0.5" />
            </span>
          </div>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default InteractiveTerminal;
