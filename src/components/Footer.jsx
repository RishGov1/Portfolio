import React from 'react';
import { ChevronUp, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-mono text-xs font-bold">
              &lt;R/&gt;
            </div>
            <span className="font-heading font-bold text-sm text-[var(--text-primary)]">
              {portfolioData.personal.name}
            </span>
            <span className="text-[var(--text-muted)] font-mono">
              © {new Date().getFullYear()}
            </span>
          </div>

          {/* Center: Built With Tech Badges */}
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-muted)]">
            <span>Built with</span>
            <span className="text-cyan-400 font-semibold">React</span>
            <span>•</span>
            <span className="text-indigo-400 font-semibold">Three.js</span>
            <span>•</span>
            <span className="text-violet-400 font-semibold">GSAP</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Tailwind CSS</span>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:text-[var(--text-primary)] transition-colors"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4 text-cyan-400" />
          </button>

        </div>
      </div>
    </footer>
  );
}
