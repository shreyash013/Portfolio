import React, { useState } from 'react';
import { Cpu, Brain, Code, Terminal, Users } from 'lucide-react';

interface SkillGroup {
  categoryName: string;
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillGroups: SkillGroup[] = [
    {
      id: 'ml',
      categoryName: "Machine Learning & Data Science",
      icon: Brain,
      skills: [
        "Python for Machine Learning",
        "NumPy & Pandas Data Analysis",
        "Scikit-Learn Framework",
        "Matplotlib & Seaborn Visualization",
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Supervised & Unsupervised Learning",
        "Classification & Regression Algorithms",
        "Model Building & Training",
        "Model Evaluation & Optimization",
        "Performance Metrics Analysis"
      ]
    },
    {
      id: 'it',
      categoryName: "Programming & Software Engineering",
      icon: Code,
      skills: [
        "Python Programming",
        "Java Programming",
        "C & C++ Programming",
        "C# Programming",
        "SQL Programming",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Software Development Lifecycle"
      ]
    },
    {
      id: 'web',
      categoryName: "Web & Database Development",
      icon: Terminal,
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "Node.js Development",
        "Express.js Framework",
        "Flask Framework",
        "MySQL Database Management",
        "SQLite Database",
        "JDBC Connectivity",
        "Responsive Web Design",
        "GitHub Collaboration"
      ]
    },
    {
      id: 'strengths',
      categoryName: "Interpersonal & Core Strengths",
      icon: Users,
      skills: [
        "Logical Problem-Solving",
        "Analytical Thinking",
        "Critical Analysis",
        "Debugging & Troubleshooting",
        "Team Collaboration",
        "Focused Listening & Communication",
        "Time Management & Leadership",
        "Adaptability & Multitasking",
        "Fast Learner & Self-Motivated"
      ]
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'it', label: 'Languages & Software' },
    { id: 'web', label: 'Web & Databases' },
    { id: 'strengths', label: 'Strengths & Soft Skills' },
  ];

  const filteredGroups = activeTab === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
          <Cpu className="w-4 h-4" />
          <span>Technical Skill Set</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-geist text-white tracking-tight">
          Skills &amp; Expertise
        </h2>

        <p className="text-slate-300 font-inter text-base sm:text-lg">
          A broad range of machine learning tools, programming languages, backend frameworks, and core engineering strengths.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-geist text-slate-100">
                  {group.categoryName}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/90 text-slate-200 text-xs font-medium border border-slate-700/80 hover:border-blue-500/50 hover:bg-blue-950/40 hover:text-blue-200 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
