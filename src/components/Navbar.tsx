import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Sun, 
  Moon, 
  X,
  Sparkles,
  FileDown,
  Menu
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const toggleTheme = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Sparkles },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Tablet Top Navbar */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 glass-panel shadow-2xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Avatar */}
          <div 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <img
                src="/profile.png"
                alt="Shreyash Gavade"
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-blue-500/50 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
            </div>
            <div>
              <span className="font-geist font-bold text-base sm:text-lg text-slate-100 tracking-tight flex items-center gap-1.5">
                SHREYASH GAVADE <span className="text-blue-400 font-normal text-[10px] px-2 py-0.5 rounded-full bg-blue-900/40 border border-blue-500/30">AI ENGINEER</span>
              </span>
              <span className="block text-[10px] text-slate-400 font-inter tracking-wider uppercase">
                AI &amp; Data Science Specialist
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50 transition-colors"
              title="Toggle Theme"
            >
              {themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>

            <a
              href="/Shreyash_Gavade_Resume.pdf"
              download="Shreyash_Gavade_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-90 shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300"
            >
              {themeMode === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-slate-800 px-4 py-4 space-y-2 mt-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full px-4 py-3 rounded-xl text-left font-medium flex items-center gap-3 ${
                    isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden glass-panel border-t border-slate-800/80 px-2 py-2">
        <div className="grid grid-cols-5 gap-1">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-blue-400 bg-blue-600/10 border border-blue-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-geist tracking-wide uppercase">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
