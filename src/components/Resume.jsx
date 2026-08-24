import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Download, Eye, CheckCircle2, Sparkles, Printer } from 'lucide-react';

export default function Resume() {
  const { personal, experience, education, skills } = portfolioData;
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleDownload = () => {
    // Generate clean printable document print window for instantaneous save-as-PDF
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personal.name} - Resume</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.5; color: #1e293b; padding: 40px; max-width: 800px; margin: 0 auto; }
            h1 { margin: 0; font-size: 28px; color: #0f172a; }
            .subtitle { font-size: 16px; color: #4f46e5; font-weight: bold; margin-bottom: 5px; }
            .contact { font-size: 12px; color: #64748b; margin-bottom: 20px; border-b: 1px solid #e2e8f0; padding-bottom: 10px; }
            h2 { font-size: 16px; color: #4f46e5; border-bottom: 2px solid #6366f1; padding-bottom: 4px; margin-top: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
            .item { margin-bottom: 12px; }
            .item-title { font-weight: bold; font-size: 14px; display: flex; justify-content: space-between; }
            .item-sub { font-size: 13px; color: #0284c7; font-weight: 500; }
            ul { margin: 4px 0 0 18px; padding: 0; font-size: 12px; }
            li { margin-bottom: 3px; }
            .skills-group { font-size: 12px; margin-bottom: 6px; }
            .skills-group strong { color: #0f172a; }
          </style>
        </head>
        <body>
          <h1>${personal.name}</h1>
          <div class="subtitle">${personal.title}</div>
          <div class="contact">Email: ${personal.email} | Location: ${personal.location}</div>
          
          <h2>Education</h2>
          <div class="item">
            <div class="item-title"><span>${education[0].degree}</span><span>${education[0].period}</span></div>
            <div class="item-sub">${education[0].institution} | GPA: ${education[0].gpa}</div>
            <div style="font-size:12px; margin-top:4px;">Honors: ${education[0].honors}</div>
          </div>

          <h2>Technical Skills</h2>
          <div class="skills-group"><strong>Languages:</strong> ${skills.categories[0].items.map(i => i.name).join(', ')}</div>
          <div class="skills-group"><strong>AI / ML:</strong> ${skills.categories[1].items.map(i => i.name).join(', ')}</div>
          <div class="skills-group"><strong>Web Dev:</strong> ${skills.categories[2].items.map(i => i.name).join(', ')}</div>
          <div class="skills-group"><strong>Tools & Cloud:</strong> ${skills.categories[3].items.map(i => i.name).join(', ')}</div>

          <h2>Work & Research Experience</h2>
          ${experience.map(exp => `
            <div class="item">
              <div class="item-title"><span>${exp.role}</span><span>${exp.period}</span></div>
              <div class="item-sub">${exp.company} (${exp.location})</div>
              <ul>
                ${exp.bulletPoints.map(pt => `<li>${pt}</li>`).join('')}
              </ul>
            </div>
          `).join('')}

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section id="resume" className="py-20 relative bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Official <span className="gradient-text">Resume</span>
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-sm sm:text-base">
            Download or view a complete summary of technical experience, projects, and academic background.
          </p>
        </div>

        {/* Resume Card Container */}
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Column: Summary */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Format: PDF / ATS Friendly</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-3">
                {personal.name} — Technical Resume
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Tailored for AI Engineering, Machine Learning Research, and Full-Stack Software Engineering roles. Updated for Summer 2026 placements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>8.55 CGPA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>PyTorch & CUDA Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Industry Internship Tested</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Published Research Paper</span>
                </div>
              </div>
            </div>

            {/* Right Column: Download & Preview Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-700 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl glass-panel text-sm font-semibold text-[var(--text-primary)] hover:border-indigo-500/40 hover:scale-[1.02] transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Quick View Preview</span>
              </button>
            </div>

          </div>
        </div>

        {/* Quick View Modal */}
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                    Resume Quick Preview
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {personal.name} • {personal.title}
                  </p>
                </div>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="px-3 py-1 rounded-lg border border-[var(--border-color)] text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  Close
                </button>
              </div>

              {/* Resume Body */}
              <div className="space-y-6 text-sm text-[var(--text-secondary)]">
                <div>
                  <h4 className="font-bold text-indigo-400 font-mono text-xs uppercase mb-2">Education</h4>
                  <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <div className="font-bold text-[var(--text-primary)]">{education[0].degree}</div>
                    <div className="text-xs text-cyan-400">{education[0].institution} ({education[0].period})</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">GPA: {education[0].gpa} • {education[0].honors}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-400 font-mono text-xs uppercase mb-2">Work & Research Experience</h4>
                  <div className="space-y-3">
                    {experience.map(exp => (
                      <div key={exp.id} className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                        <div className="flex justify-between items-start">
                          <span className="font-bold text-[var(--text-primary)]">{exp.role}</span>
                          <span className="text-xs font-mono text-[var(--text-muted)]">{exp.period}</span>
                        </div>
                        <div className="text-xs text-cyan-400 mb-2">{exp.company}</div>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          {exp.bulletPoints.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 border-t border-[var(--border-color)] pt-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
