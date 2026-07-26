import React from 'react';
import { Briefcase, Calendar, Building2, Terminal, Database, Activity } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "Sunbeam Infotech",
      location: "Pune, India",
      period: "12/2025 – 01/2026",
      type: "Internship",
      highlights: [
        {
          title: "ML Model Development on Real Datasets",
          desc: "Developed machine learning classification & regression models using Python (NumPy, Pandas, Scikit-learn) on production-grade datasets.",
          icon: Terminal
        },
        {
          title: "Data Preprocessing & Feature Engineering",
          desc: "Performed data cleaning, missing value imputation, categorical feature encoding, and model performance evaluation.",
          icon: Database
        },
        {
          title: "Efficient Data Handling & Database Integration",
          desc: "Applied data structures for efficient data manipulation and worked with structured datasets with database connectivity.",
          icon: Activity
        }
      ],
      skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Feature Engineering", "Model Evaluation", "Database Connectivity"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
          <Briefcase className="w-4 h-4" />
          <span>Professional Experience</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-geist text-white tracking-tight">
          Work Experience
        </h2>

        <p className="text-slate-300 font-inter text-base sm:text-lg max-w-2xl">
          Practical industry experience building machine learning models, feature pipelines, and database integration.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-950 shadow-lg shadow-blue-600/50 group-hover:scale-125 transition-transform" />

            {/* Experience Card */}
            <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">
                    {exp.type}
                  </span>
                  <h3 className="text-2xl font-bold font-geist text-white mt-0.5">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>{exp.company}</span> • <span className="text-slate-400">{exp.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-slate-300 text-xs font-mono border border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-4">
                {exp.highlights.map((item, hIdx) => {
                  const Icon = item.icon;
                  return (
                    <div key={hIdx} className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-blue-950/60 text-blue-400 shrink-0 mt-0.5 border border-blue-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-100 font-geist">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800 hover:border-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
