import React, { useState, useEffect } from 'react';
import { Project } from '../types';

// Cache scrollbar width to avoid recalculation on every modal open
let cachedScrollbarWidth: number | null = null;

const getScrollbarWidth = (): number => {
  if (cachedScrollbarWidth !== null) {
    return cachedScrollbarWidth;
  }
  cachedScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return cachedScrollbarWidth;
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [active, setActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Toggle modal-open on the document body to lock scroll reliably.
  useEffect(() => {
    if (active) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('modal-open');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('modal-open');
    };
  }, [active]);

  const handleOpen = () => {
    setIsClosing(false);
    setActive(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    // Wait for the exit animation duration (300ms) before unmounting the modal content
    setTimeout(() => {
      setActive(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <div onClick={handleOpen} className="group relative flex flex-col h-full bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 border border-neutral-800 hover:border-neutral-700 overflow-hidden rounded-[2rem] theme-transition cursor-pointer">
        {/* Placeholder Header Section */}
        <div className="relative h-64 overflow-hidden bg-neutral-800 flex items-center justify-center p-8 transition-colors">
          {/* Background Image with Zoom Effect - Optimized for Safari */}
          <div
            className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:opacity-50 hover-scale-safari transition-all duration-700 ease-out will-change-transform"
            style={{ backgroundImage: `url("${(import.meta as any).env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
          <div className="absolute bottom-6 left-8 right-8 z-20">
            <h4 className="text-sm font-black text-cyan-400 uppercase tracking-[0.2em] mb-2">{project.subtitle}</h4>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic leading-none tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-3">Problem</p>
              <p className="text-sm text-neutral-400 leading-relaxed italic">{project.problem}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-3">Impact Metrics</p>
              <div className="grid grid-cols-2 gap-4">
                {project.impact.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="bg-neutral-800/50 p-3 rounded-xl border border-neutral-700/50">
                    <span className="block text-xl font-black text-cyan-500">{item.value}</span>
                    <span className="text-[9px] font-bold text-neutral-500 uppercase">{item.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tools.map(tool => (
              <span key={tool} className="px-3 py-1 bg-neutral-800 text-[10px] font-bold text-neutral-400 rounded-full border border-neutral-700 transition-colors uppercase tracking-wider">
                {tool}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
            <button
              onClick={handleOpen}
              className="text-xs font-black text-white hover:text-cyan-500 transition-colors uppercase flex items-center gap-2 group/btn"
            >
              View Case Study
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-[10px] font-bold text-neutral-400 hover:text-cyan-500 uppercase transition-colors">
                Live Link
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Deep Dive Modal */}
      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
          {/* Backdrop - Optimized for Safari */}
          <div
            className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-heavy ${isClosing ? 'animate-backdrop-exit' : 'animate-backdrop-entry'}`}
            onClick={handleClose}
          ></div>

          {/* Modal Container */}
          <div className={`modal-container relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-[#080808] border border-neutral-800 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col ${isClosing ? 'animate-modal-exit' : 'animate-modal-entry'}`}>
            <button
              onClick={handleClose}
              className="absolute top-8 right-8 z-50 p-3 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors group"
            >
              <svg className="w-5 h-5 text-neutral-500 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content Buffer */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-8 md:p-16">
                <div className="max-w-3xl mx-auto">
                  <header className="mb-16">
                    <span className="text-cyan-500 font-black tracking-[0.3em] uppercase text-xs block mb-4">Deep Dive Analysis</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight uppercase italic mb-6">
                      {project.title}
                    </h2>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-cyan-500 hover:text-cyan-400 uppercase tracking-widest mb-8 border-b border-cyan-500/30 hover:border-cyan-500 transition-all pb-1 group"
                      >
                        Visit Live System
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                    <p className="text-xl text-neutral-400 font-medium italic leading-relaxed mb-12">
                      {project.tldr}
                    </p>

                    {/* Project Main Image in Modal */}
                    <div className="mb-16 rounded-[2rem] overflow-hidden border border-neutral-800">
                      <img
                        src={(import.meta as any).env.BASE_URL + (project.image.startsWith('/') ? project.image.slice(1) : project.image)}
                        alt={project.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <section>
                      <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-4">The Situation</h4>
                      <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                        {project.deepDive.situation}
                      </p>
                    </section>
                    <section>
                      <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-4">The Task</h4>
                      <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                        {project.deepDive.task}
                      </p>
                    </section>
                  </div>

                  <div className="space-y-16">
                    <section className="bg-neutral-900/50 p-8 md:p-12 rounded-[2rem] border border-neutral-800">
                      <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-6">Execution & Architecture</h4>
                      <p className="text-sm text-neutral-300 leading-loose whitespace-pre-line font-medium mb-8">
                        {project.deepDive.action}
                      </p>

                      {/* Optional Secondary Image */}
                      {project.secondaryImage && (
                        <div className="mb-8 rounded-2xl overflow-hidden border border-neutral-800">
                          <img
                            src={(import.meta as any).env.BASE_URL + (project.secondaryImage.startsWith('/') ? project.secondaryImage.slice(1) : project.secondaryImage)}
                            alt={`${project.title} additional context`}
                            className="w-full h-auto"
                          />
                        </div>
                      )}

                      <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
                        <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest block mb-4">Pipeline Logic</span>
                        <p className="text-[12px] mono text-neutral-400 whitespace-pre-line leading-relaxed">
                          {project.deepDive.logic}
                        </p>
                      </div>
                    </section>

                    <section>
                      <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-8">Final Results & ROI</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.impact.map((item, idx) => (
                          <div key={idx} className="p-6 border border-neutral-800 rounded-3xl hover:border-cyan-500/30 transition-colors">
                            <span className="block text-3xl font-black text-white mb-1">{item.value}</span>
                            <span className="block text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-3">{item.metric}</span>
                            <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="mt-20 pt-10 border-t border-neutral-800 flex justify-end items-center">
                    <button
                      onClick={handleClose}
                      className="text-xs font-black text-neutral-500 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group/close"
                    >
                      Close Report
                      <svg className="w-4 h-4 transform group-hover/close:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};