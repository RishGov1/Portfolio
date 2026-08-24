import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;
  const edu = education[0];

  return (
    <section id="education" className="py-20 relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education & <span className="gradient-text">Coursework</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Rigorous Computer Science curriculum and academic honors.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="glass-panel p-8 rounded-2xl mb-12 border-l-4 border-l-emerald-500">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-extrabold font-heading text-[var(--text-primary)]">
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                {edu.specialization}
              </p>
              <p className="text-xs text-[var(--text-secondary)] font-mono mt-0.5">
                {edu.institution}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-2">
              <span className="flex items-center gap-1 text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-primary)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                <Calendar className="w-3 h-3 text-cyan-400" />
                <span>{edu.period}</span>
              </span>
              <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                GPA: {edu.gpa}
              </div>
            </div>
          </div>

          

          {/* Relevant Coursework */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Relevant Computer Science Coursework</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {edu.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)] flex items-center gap-2 hover:border-indigo-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  <span className="truncate">{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
