import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ExternalLink, ArrowUpRight, Filter, Sparkles, Eye } from 'lucide-react';

const CATEGORIES = ['All', 'AI/ML', 'Full Stack', 'Systems/CS'];

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Hand-crafted software, distributed engines, and AI research projects demonstrating end-to-end capabilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Project Image Header */}
              <div className="relative h-48 overflow-hidden bg-[var(--bg-secondary)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-90" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 rounded-md bg-amber-500/20 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] font-mono text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-[var(--bg-primary)] text-[10px] font-mono text-[var(--text-muted)]">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Details & Arch</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-cyan-500/40 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
