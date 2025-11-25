import React from 'react';

const TerminalBlock = () => {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-900/20 w-full max-w-lg">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-slate-400 font-mono">harsh@dell-14plus:~</span>
      </div>
      <div className="p-6 font-mono text-sm space-y-4">
        <div>
          <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> fastfetch
        </div>
        <div className="text-slate-300">
          <div className="flex gap-4">
            <div className="text-cyan-500 hidden sm:block whitespace-pre select-none">
{`      /\\
     /  \\
    /    \\
   /      \\
  /________\\`}
            </div>
            <div className="space-y-1">
              <div><span className="font-bold text-cyan-400">OS</span>: Arch Linux x86_64</div>
              <div><span className="font-bold text-cyan-400">Host</span>: Dell 14 Plus</div>
              <div><span className="font-bold text-cyan-400">Kernel</span>: 6.6.x-arch</div>
              <div><span className="font-bold text-cyan-400">WM</span>: GNOME (Wayland)</div>
              <div><span className="font-bold text-cyan-400">Terminal</span>: Kitty</div>
              <div><span className="font-bold text-cyan-400">Editor</span>: Neovim (LazyVim)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalBlock;
