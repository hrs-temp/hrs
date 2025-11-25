import { Terminal, Cpu, Code2, Globe, Wifi } from 'lucide-react';

export const personalInfo = {
  name: "Harsh",
  role: "ECE Student & Linux Enthusiast",
  tagline: "I break things to see how they work. And yes, I use Arch btw.",
  bio: "I am an Electronics and Communication Engineering student bridging the gap between hardware and software. Currently mastering C++, Python, and low-level system configuration on my Dell 14 Plus.",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:harsh@example.com"
  }
};

export const skills = [
  { name: "Arch Linux", icon: <Terminal size={20} />, level: "Daily Driver" },
  { name: "C++", icon: <Code2 size={20} />, level: "Intermediate" },
  { name: "Embedded Systems", icon: <Cpu size={20} />, level: "Arduino/Sensors" },
  { name: "Neovim", icon: <Code2 size={20} />, level: "LazyVim Config" },
  { name: "Python", icon: <Code2 size={20} />, level: "Scripting/AI" },
  { name: "Networking", icon: <Wifi size={20} />, level: "Basics" },
];

export const projects = [
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
