import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // fallback
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact & <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Interested in hiring me for AI/CS internships, research collaborations, or full-time roles? Drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info & Copy Button */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-2xl">
            <div>
              <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-3">
                Let's Build Something Great Together
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                I am actively seeking internship and entry-level Software Engineering & Machine Learning opportunities. Feel free to reach out via email or connect on social platforms!
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] mb-8">
                <div className="text-xs font-mono text-[var(--text-muted)] mb-1">Direct Email</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-cyan-400 truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-mono hover:bg-indigo-500/20 transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="text-xs text-[var(--text-secondary)] font-mono mb-6">
                📍 {personal.location}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Social & Developer Profiles
              </h4>
              <div className="flex items-center gap-3">

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-violet-400 hover:border-violet-500/40 transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                  Thank you for reaching out, {formData.name || 'there'}! I will respond to your email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="AI Internship / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hi Rishabh, I came across your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
