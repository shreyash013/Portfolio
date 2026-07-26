import React from 'react';
import { School, GraduationCap, Award, BookOpen, User, CheckCircle2 } from 'lucide-react';

export const AboutEducation: React.FC = () => {
  const educationItems = [
    {
      title: "Bachelor of Technology: Artificial Intelligence and Data Science",
      institution: "DKTE Society's Textile and Engineering College, Ichalkaranji",
      location: "Ichalkaranji, India",
      date: "05/2027 (Expected)",
      badge: "B.Tech AI & DS",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      icon: GraduationCap,
      desc: "Specialized in Artificial Intelligence, Machine Learning algorithms, Data Structures & Algorithms, Data Mining, and Database Systems."
    },
    {
      title: "12th (HSC) — Science",
      institution: "Shri Balaji Madhyamik Vidyalaya Ichalkaranji",
      location: "Ichalkaranji, India",
      date: "04/2023",
      badge: "GPA: 59.00%",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      icon: BookOpen,
      desc: "Higher Secondary Education in Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      title: "10th (SSC)",
      institution: "Shri Padmaraje Vidyalaya Shirol",
      location: "Shirol, India",
      date: "04/2021",
      badge: "GPA: 87.20%",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      icon: Award,
      desc: "Secondary School Certificate with distinction in Science and Mathematics."
    }
  ];

  const coreStrengths = [
    { title: "Logical Problem-Solving", desc: "Approaching engineering challenges with methodical algorithms." },
    { title: "Analytical & Critical Thinking", desc: "Extracting insights and patterns from complex structured datasets." },
    { title: "Debugging & Troubleshooting", desc: "Efficiently diagnosing API errors, database queries, and ML bottlenecks." },
    { title: "Model Evaluation & Tuning", desc: "Hyperparameter tuning, cross-validation, and metrics optimization." },
    { title: "Database & Backend API", desc: "Designing MySQL/SQLite schemas and building RESTful APIs in Flask & Node.js." },
    { title: "Fast Learner & Team Player", desc: "Adaptable, self-motivated, and committed to continuous learning." }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: About & Core Strengths */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
            <User className="w-4 h-4" />
            <span>Profile &amp; Objective</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-geist text-white tracking-tight">
            Shreyash Gavade
          </h2>

          <p className="text-slate-300 font-inter leading-relaxed">
            Passionate about leveraging data-driven decision-making to solve complex problems and develop scalable, efficient solutions. Seeking an entry-level opportunity to contribute to innovative projects while continuously enhancing technical and analytical skills.
          </p>

          {/* Core Strengths Grid */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold font-geist text-slate-100 mb-4">
              Core Strengths &amp; Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreStrengths.map((item, idx) => (
                <div key={idx} className="glass-panel p-3.5 rounded-xl border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-slate-100 font-geist">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
            <School className="w-4 h-4" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-geist text-white tracking-tight">
            Education
          </h2>

          <div className="space-y-4">
            {educationItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/90 relative overflow-hidden group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-100 font-geist">
                          {item.title}
                        </h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-slate-300 mb-1">
                        {item.institution} • <span className="text-slate-400">{item.location}</span>
                      </p>

                      <p className="text-[11px] font-mono text-cyan-400 mb-2">
                        {item.date}
                      </p>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
