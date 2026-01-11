import React, { useState, useEffect } from 'react';
import { StatusBadge } from './components/PulsingIndicator';
import { LiveJourney } from './components/LiveJourney';
import { ProjectCard } from './components/ProjectCard';
import { ToolStack } from './components/ToolStack';
import { ThinkCard } from './components/ThinkCard';
import { Modal } from './components/Modal';
import { ResumeContent } from './components/ResumeContent';
import { ContactContent } from './components/ContactContent';
import { JOURNEY_DATA, PROJECTS, TOOLS } from './data';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'none' | 'resume' | 'contact'>('none');

  useEffect(() => {
    // Enforce dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen pb-20 px-4 md:px-12 max-w-7xl mx-auto theme-transition relative">
      {/* Header */}
      <header className="py-12 lg:py-24 flex flex-col lg:flex-row lg:items-start justify-between gap-12 animate-page-entry relative">

        {/* Top Right Actions Area - Only Social or Empty if theme removed */}
        <div className="absolute top-0 right-0 py-6 flex items-center gap-4 z-50">
          {/* Theme Switcher Removed */}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Avatar Area / Identity */}
          <div className="relative group shrink-0" onClick={() => setActiveModal('contact')}>
            <div className="absolute inset-0 bg-cyan-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity cursor-pointer"></div>
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-900 overflow-hidden relative flex items-center justify-center transition-all duration-500 shadow-2xl theme-transition cursor-pointer"
            >
              <img
                src={`${(import.meta as any).env.BASE_URL}Picture-optimized.jpg`}
                alt="Austin John"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="text-center md:text-left pt-2">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-3 md:mb-5">
              <h2 className="text-3xl font-black text-neutral-900 dark:text-white tracking-tighter uppercase italic leading-none">Austin John</h2>
              <StatusBadge />
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 dark:text-white leading-[0.85] uppercase italic transition-colors">
              Data <br />
              Analyst<span className="text-cyan-500">.</span>
            </h1>
            <p className="mt-10 text-neutral-500 dark:text-neutral-400 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mx-auto md:mx-0">
              I analyze <span className="text-neutral-900 dark:text-white">business data</span> to uncover insights, solve operational problems, and drive <span className="text-cyan-600 dark:text-cyan-400 font-bold">better decisions</span> using analytics and AI.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:items-end gap-3 w-full lg:w-auto text-center lg:text-right">
          <div className="flex gap-8 mt-6 justify-center lg:justify-end items-center">
            <button onClick={() => setActiveModal('resume')} className="text-xs font-black text-cyan-600 dark:text-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors uppercase tracking-widest h-8 flex items-center border-b-2 border-cyan-500/30 hover:border-cyan-500">Resume</button>
            <a href="https://www.linkedin.com/in/austin-john-ogbormeh-422330147/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-widest h-8 flex items-center border-b-2 border-transparent">LinkedIn</a>
            <button onClick={() => setActiveModal('contact')} className="text-xs font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-widest h-8 flex items-center border-b-2 border-transparent">Contact</button>
          </div>
        </div>
      </header>

      {/* Main Bento Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <section
            className="bg-neutral-50 dark:bg-neutral-900/10 border border-neutral-200 dark:border-neutral-800/50 rounded-3xl overflow-hidden backdrop-blur-sm theme-transition shadow-sm"
            style={{ WebkitBackdropFilter: 'blur(4px)' }}
          >
            <LiveJourney data={JOURNEY_DATA} />
          </section>

          <section className="bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-xl transition-all hover:border-cyan-500/20 theme-transition">
            <ToolStack tools={TOOLS} />
          </section>

          <section>
            <ThinkCard />
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex items-center gap-4 px-4">
            <div className="h-[1px] w-8 bg-neutral-200 dark:bg-neutral-800 transition-colors"></div>
            <h3 className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.4em] italic">Selected Projects</h3>
            <div className="h-[1px] flex-1 bg-neutral-200 dark:border-neutral-800/50 transition-colors"></div>
          </div>
          <section className="rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/5 h-fit">
            <ProjectCard project={PROJECTS[0]} />
          </section>

          {/* CTA Card */}
          <section className="min-h-48 bg-gradient-to-br from-neutral-100 via-white to-neutral-200 dark:from-neutral-900 dark:via-neutral-900 dark:to-cyan-950/20 border border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between px-10 md:px-16 py-12 gap-12 text-center md:text-left h-fit mt-auto shadow-2xl shadow-cyan-500/5 theme-transition">
            <div className="max-w-xl">
              <h4 className="text-4xl font-black text-neutral-900 dark:text-white tracking-tight uppercase italic leading-tight">Engineering <br />Decision Clarity</h4>
              <p className="text-lg text-neutral-500 mt-4 italic font-medium">Ready to bridge the gap between historical reports and operational decision systems?</p>
            </div>
            <button
              onClick={() => setActiveModal('contact')}
              className="bg-neutral-900 dark:bg-white text-white dark:text-black px-16 py-6 rounded-2xl text-lg font-black hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-black transition-all shadow-[0_0_40px_rgba(34,211,238,0.2)] active:scale-95 uppercase tracking-tighter"
            >
              HIRE ME
            </button>
          </section>
        </div>
      </main>

      <Modal
        isOpen={activeModal !== 'none'}
        onClose={() => setActiveModal('none')}
        title={activeModal === 'resume' ? 'Resume & Experience' : 'Contact Me'}
      >
        {activeModal === 'resume' && <ResumeContent />}
        {activeModal === 'contact' && <ContactContent />}
      </Modal>

      {/* Footer */}
      <footer className="mt-32 py-16 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:grid md:grid-cols-3 items-center text-[10px] font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.4em] gap-8 text-center theme-transition">
        <div className="flex items-center justify-center md:justify-start gap-3 w-full">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          System Status: Live
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://x.com/ost_een?s=21&t=vXJB1uGk7Wbz2_U6jdmKTA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 hover:scale-110 transition-all duration-300 group"
            aria-label="Follow on X"
            title="X (Twitter)"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.403z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ost_een?igsh=MWN3MWgxZXZ2cjkydQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 hover:scale-110 transition-all duration-300"
            aria-label="Follow on Instagram"
            title="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.358-2.618-6.78-6.98-6.981C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        <div className="flex md:justify-end items-center justify-center w-full">
          <span className="text-neutral-400 dark:text-neutral-500 font-black">© 2026 • BUILT FOR IMPACT</span>
        </div>
      </footer>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-100/30 dark:bg-cyan-900/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-indigo-50/20 dark:bg-indigo-900/5 blur-[180px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;