import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, ShieldCheck, FileCheck, ExternalLink, Sparkles } from 'lucide-react';

export default function Achievements() {
  const { achievements } = portfolioData;

  const getBadgeIcon = (badge) => {
    if (badge === 'Trophy') return <Trophy className="w-6 h-6 text-amber-400" />;
    if (badge === 'Award') return <Award className="w-6 h-6 text-blue-400" />;
    return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
  };

  return (
    <section id="achievements" className="py-20 relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Recognitions from hackathons, cloud providers, research manuscripts, and competitive programming.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 rounded-2xl flex gap-5 group hover:border-amber-500/40 hover:scale-[1.01] transition-all"
            >
              {/* Icon Container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--bg-primary)] border border-[var(--border-color)] group-hover:scale-110 transition-transform flex-shrink-0"
              >
                {getBadgeIcon(item.badge)}
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[var(--text-primary)] group-hover:text-amber-400 transition-colors mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-cyan-400 mb-2">
                  {item.issuer}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
