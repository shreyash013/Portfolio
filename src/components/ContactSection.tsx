import React, { useState } from 'react';
import { Mail, MapPin, Send, Download, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Resume Banner CTA */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-slate-900/60 to-purple-950/40 flex flex-col items-center text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Download className="w-8 h-8 animate-bounce" />
        </div>

        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-4xl font-bold font-geist text-white">
            Download Shreyash's Resume
          </h2>
          <p className="text-slate-300 font-inter text-base">
            Get the official PDF technical resume detailing machine learning projects, Sunbeam Infotech internship, and academic scores.
          </p>
        </div>

        <a
          href="/Shreyash_Gavade_Resume.pdf"
          download="Shreyash_Gavade_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-geist font-bold text-sm tracking-widest uppercase shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
        >
          <span>DOWNLOAD OFFICIAL RESUME (PDF)</span>
          <Download className="w-4 h-4" />
        </a>
      </div>

      {/* Main Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
            <MessageSquare className="w-4 h-4" />
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-geist text-white tracking-tight">
            Send a Message
          </h2>
          <p className="text-slate-300 text-sm">
            Have a project, job opportunity, or technical inquiry? Feel free to reach out directly.
          </p>

          <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold font-geist text-emerald-200">Message Sent!</h4>
                <p className="text-xs text-slate-300">Thank you for reaching out to Shreyash Gavade. I will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:border-blue-500 focus:outline-none transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:border-blue-500 focus:outline-none transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:border-blue-500 focus:outline-none transition-colors placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-geist font-bold text-xs tracking-widest uppercase shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>

        {/* Right Column: Contact Details */}
        <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-12">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email</span>
              <a href="mailto:shreyashgavade7@gmail.com" className="text-base font-semibold text-slate-100 font-geist hover:text-blue-400 transition-colors block">
                shreyashgavade7@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone</span>
              <a href="tel:+919356997428" className="text-base font-semibold text-slate-100 font-geist hover:text-emerald-400 transition-colors block">
                +91 9356997428
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location</span>
              <p className="text-base font-semibold text-slate-100 font-geist">
                Kolhapur, Maharashtra 416103
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Connect Online
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/shreyash013"
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/shreyash-gavade-957608"
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors text-sm font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
