import React, { useEffect, useRef } from 'react';
import ThreeCanvas from './ThreeCanvas';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Mail, Sparkles, ChevronDown, Award } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Subtle GSAP entrance reveal animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* 3D Background Canvas */}
      <ThreeCanvas />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Badge */}
        <div className="hero-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Seeking AI & CS Summer 2026 Opportunities</span>
        </div>

        {/* Headline */}
        <h1 className="hero-reveal text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
        </h1>

        {/* Dynamic Tagline */}
        <h2 className="hero-reveal text-xl sm:text-3xl font-medium text-[var(--text-secondary)] mb-6 tracking-wide font-heading">
          {portfolioData.personal.title}
        </h2>

        {/* Short Bio */}
        <p className="hero-reveal max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed font-sans">
          {portfolioData.personal.bio}
        </p>

        {/* CTAs */}
        <div className="hero-reveal flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-700 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('resume');
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-panel text-[var(--text-primary)] font-medium text-sm hover:border-indigo-500/40 hover:scale-[1.02] transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Social & Contact Links */}
        <div className="hero-reveal flex items-center justify-center gap-4 text-[var(--text-muted)]">

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[var(--border-color)] hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2.5 rounded-full border border-[var(--border-color)] hover:text-violet-400 hover:border-violet-500/40 transition-colors"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-[var(--text-muted)] animate-bounce">
          <span className="text-xs font-mono">Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-cyan-400" />
        </div>
      </div>
    </section>
  );
}
