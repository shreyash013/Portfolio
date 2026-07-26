import React from 'react';
import { Sparkles, ArrowRight, Brain, Database, ShieldCheck, MapPin, Mail } from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Portrait Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

            {/* Main Portrait Frame */}
            <div className="relative w-64 sm:w-80 h-72 sm:h-96 rounded-3xl overflow-hidden glass-panel border-2 border-white/10 shadow-2xl">
              <img
                src="/profile.png"
                alt="Shreyash Gavade - AI & Data Science Engineer"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl glass-panel border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold font-geist text-white">Shreyash Gavade</h4>
                  <p className="text-[10px] text-cyan-300 font-mono">AI &amp; Data Science Engineer</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-semibold text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Headlines & Actions */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Location & Name strip */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-slate-300 text-xs font-medium shadow-lg shadow-blue-500/10">
            <span className="flex items-center gap-1 text-cyan-400 font-semibold">
              <Sparkles className="w-4 h-4 animate-pulse" />
              SHREYASH GAVADE
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" /> Kolhapur, MH 416103
            </span>
            <span className="text-slate-600">•</span>
            <a href="mailto:shreyashgavade7@gmail.com" className="flex items-center gap-1 text-blue-300 hover:underline">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-geist text-slate-100 tracking-tight leading-[1.15]">
            AI &amp; Data Science <span className="text-gradient">Engineer.</span>
            <span className="block mt-2 text-slate-200 text-xl sm:text-3xl font-semibold">
              Predictive Modeling • Data Preprocessing • API Development
            </span>
          </h1>

          {/* Bio Subtitle */}
          <p className="text-slate-300 font-inter text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Aspiring AI &amp; Data Science Engineer with hands-on experience in machine learning, data analysis, and backend development. Proficient in building predictive models, data preprocessing, and working with real-world datasets to extract actionable insights.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-2xl glass-panel text-slate-200 font-semibold text-sm border border-slate-700/80 hover:bg-slate-800/80 hover:text-white transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              Contact Me
            </button>

            <a
              href="https://linkedin.com/in/shreyash-gavade-957608"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-2xl glass-panel text-slate-300 font-medium text-xs border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              LinkedIn Profile
            </a>
          </div>

          {/* Key Skill Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            {['Python', 'Java', 'Scikit-learn', 'NumPy', 'Pandas', 'Flask', 'MySQL', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-slate-900/80 text-slate-300 text-xs font-mono border border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                #{tech}
              </span>
            ))}
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="glass-panel p-4 rounded-2xl text-left border border-slate-800/90">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-2">
                <Brain className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold font-geist text-white">Sunbeam Infotech</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                ML Intern (12/2025 – 01/2026)
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border border-slate-800/90">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2">
                <Database className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold font-geist text-white">3 Major AI Projects</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                TrustTrip, Insurance, Nagar-Seva
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border border-slate-800/90">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold font-geist text-white">6 Certifications</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                McKinsey, Deloitte, TATA, EduSkill
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
