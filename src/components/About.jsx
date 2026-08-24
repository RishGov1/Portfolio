import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Brain, Cpu, Code, CheckCircle, Sparkles, User, Award, BookOpen } from 'lucide-react';

export default function About() {
  const { story, highlights, values } = portfolioData.about;
  const { stats } = portfolioData.personal;

  const getHighlightIcon = (title) => {
    if (title.includes('AI')) return <Brain className="w-6 h-6 text-indigo-400" />;
    if (title.includes('Systems')) return <Cpu className="w-6 h-6 text-cyan-400" />;
    return <Code className="w-6 h-6 text-violet-400" />;
  };

  return (
    <section id="about" className="py-20 relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Bridging theoretical computer science with practical, high-impact artificial intelligence software.
          </p>
        </div>

        {/* Top Grid: Bio + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Bio Story */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Engineering Journey</span>
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              {story}
            </p>

            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Core Principles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-xl text-center border-l-4 border-l-indigo-500 hover:scale-105 transition-transform"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-heading gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getHighlightIcon(item.title)}
              </div>
              <h3 className="text-lg font-bold mb-2 font-heading text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
