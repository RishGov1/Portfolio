import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2, Cpu, FileCode, FileJson, Database, Terminal, Coffee,
  BrainCircuit, Layers, Eye, Bot, Workflow, BarChart3, Boxes, Zap,
  Atom, Globe, Server, Palette, Network, Radio,
  GitBranch, Container, TerminalSquare, Cloud, Activity, HardDrive, RefreshCw,
  Search, SlidersHorizontal
} from 'lucide-react';

const ICON_MAP = {
  Code2, Cpu, FileCode, FileJson, Database, Terminal, Coffee,
  BrainCircuit, Layers, Eye, Bot, Workflow, BarChart3, Boxes, Zap,
  Atom, Globe, Server, Palette, Network, Radio,
  GitBranch, Container, TerminalSquare, Cloud, Activity, HardDrive, RefreshCw
};

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all skills for 'all' tab filtering
  const allSkills = categories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name })));

  const getFilteredSkills = () => {
    let list = activeCategory === 'all'
      ? allSkills
      : categories.find(c => c.id === activeCategory)?.items || [];

    if (searchQuery.trim()) {
      list = list.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return list;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 relative bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Core tech stack and tools I rely on to build scalable AI systems and full-stack software.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[var(--bg-card)] p-1.5 rounded-xl border border-[var(--border-color)]">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Skills
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl flex items-center gap-4 group hover:scale-[1.02] transition-transform"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors"
                  style={{ color: skill.color }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold truncate text-[var(--text-primary)]">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-indigo-500 to-cyan-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
