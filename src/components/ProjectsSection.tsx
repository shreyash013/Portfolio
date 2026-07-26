import React, { useState } from 'react';
import { Sparkles, Layers, ArrowUpRight, X, CheckCircle, ShieldCheck, Award } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "trusttrip",
      title: "TrustTrip – AI-Powered Smart Travel Assistant",
      subtitle: "Flask Web App & AI Assistant",
      date: "04/2026 – Present",
      description: "Developed a Flask-based web application for travel assistance with complaint tracking, crowd analysis, and chatbot support. Integrated SQLite and smart features like price checking and priority detection to improve the travel experience.",
      highlights: [
        "Flask-based backend architecture with SQLite relational database",
        "AI Chatbot integration for real-time traveler support",
        "Crowd analysis engine and complaint tracking dashboard",
        "Smart price checking and priority detection algorithms"
      ],
      tags: ["Python", "Flask", "SQLite", "Chatbot", "Crowd Analysis", "Priority Detection"],
      githubUrl: "https://github.com/shreyash013/Portfolio",
      liveUrl: "https://github.com/shreyashgavade7"
    },
    {
      id: "insurance-prediction",
      title: "Insurance Prediction System",
      subtitle: "Machine Learning Regression Model",
      date: "12/2025 – 01/2026",
      description: "Developed regression model to predict insurance costs. Applied feature engineering and model optimization techniques to improve prediction performance.",
      highlights: [
        "Supervised Machine Learning regression algorithm training",
        "Data cleaning, imputation, and categorical feature encoding",
        "Hyperparameter tuning and cross-validation for model accuracy",
        "Feature importance assessment and model evaluation"
      ],
      tags: ["Python", "Scikit-Learn", "Regression", "Feature Engineering", "Pandas"],
      githubUrl: "https://github.com/shreyashgavade7"
    },
    {
      id: "nagar-seva",
      title: "Nagar-Seva-Complaint-Register",
      subtitle: "Machine Learning & Public Complaint Intelligence",
      date: "02/2026 – 05/2026",
      description: "Developed a regression model to predict insurance charges based on factors such as age, BMI, smoking status, and region. Applied feature engineering, data preprocessing, and model optimization techniques to improve prediction accuracy and overall model performance.",
      highlights: [
        "End-to-end data preprocessing and scaling pipeline",
        "Multivariate regression modeling based on demographic parameters",
        "Model evaluation metrics optimization (RMSE, MAE, R² score)",
        "Feature scaling and outlier handling"
      ],
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Regression"],
      githubUrl: "https://github.com/shreyashgavade7"
    }
  ];

  const certifications = [
    { title: "AI-ML Virtual Internship", issuer: "EduSkill", date: "11/2025" },
    { title: "McKinsey Forward", issuer: "McKinsey & Company", date: "07/2026" },
    { title: "Foundation of Feature Engineering", issuer: "CodeSignal", date: "09/2025" },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte", date: "03/2026" },
    { title: "Data Visualization: Empowering Business with Effective Insights", issuer: "TATA", date: "03/2026" },
    { title: "Design Technology and Innovation", issuer: "NPTEL", date: "Active" }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Projects &amp; Certifications</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-geist text-white tracking-tight">
          Featured AI Projects
        </h2>

        <p className="text-slate-300 font-inter text-base sm:text-lg">
          Hands-on machine learning models, Flask web platforms, and data analysis applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover p-7 rounded-3xl border border-slate-800 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  {project.subtitle}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {project.date}
                </span>
              </div>

              <h3 className="text-xl font-bold font-geist text-slate-100 mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 font-inter text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  View Details <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mt-16 pt-12 border-t border-slate-800/80">
        <h3 className="text-2xl font-bold font-geist text-slate-100 mb-6 flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <span>Professional Certifications &amp; Internships</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100 font-geist leading-tight">{cert.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{cert.issuer}</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-400 text-xs font-mono border border-slate-700 shrink-0">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">
                {selectedProject.subtitle} • {selectedProject.date}
              </span>
              <h3 className="text-2xl font-bold font-geist text-white mt-1">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 font-geist flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Key Implementation Highlights</span>
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
