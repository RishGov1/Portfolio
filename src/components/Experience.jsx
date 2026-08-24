import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work & <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Industry internships, academic research assistantships, and leadership roles.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-32 space-y-12">
          {experience.map((item, idx) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[var(--bg-primary)] border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Date Badge (Desktop Left Column) */}
              <div className="sm:absolute sm:-left-36 sm:top-1.5 mb-2 sm:mb-0 text-xs font-mono text-[var(--text-muted)] flex items-center gap-1 sm:justify-end sm:w-28">
                <Calendar className="w-3 h-3 text-cyan-400" />
                <span>{item.period}</span>
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400">
                      {item.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-mono">
                      {item.type}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] mb-4 italic">
                  {item.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-6">
                  {item.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 border-t border-[var(--border-color)] pt-4">
                  {item.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] font-mono text-[var(--text-secondary)]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
