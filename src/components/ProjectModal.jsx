import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Featured Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Featured Project</span>
            </span>
          )}
        </div>

        {/* Modal Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-4 text-[var(--text-primary)]">
          {project.title}
        </h2>

        {/* Image Preview Banner */}
        <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-6 border border-[var(--border-color)] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-80" />
        </div>

        {/* Overview Section */}
        <div className="mb-6">
          <h3 className="text-base font-bold mb-2 font-heading flex items-center gap-2 text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span>Project Overview</span>
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Architecture Breakdown */}
        {project.architecture && (
          <div className="mb-6">
            <h3 className="text-base font-bold mb-3 font-heading flex items-center gap-2 text-indigo-400">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Pipeline</span>
            </h3>
            <ul className="space-y-2">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Engineering Highlights */}
        {project.highlights && (
          <div className="mb-6">
            <h3 className="text-base font-bold mb-3 font-heading flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Results & Performance Metrics</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 border-t border-[var(--border-color)] pt-6">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold shadow-md hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demonstration</span>
          </a>
        </div>

      </div>
    </div>
  );
}
