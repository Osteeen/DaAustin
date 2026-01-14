import React from 'react';

export const AboutContent: React.FC = () => {
  return (
    <div className="space-y-8 py-4">
      <div className="space-y-4">
        <p className="text-neutral-400 leading-relaxed">
          When I’m not staring at dashboards or chasing weird bugs in data, I’m usually thinking about ideas, systems, and how things can be made better. I believe that data is just a story waiting to be told correctly.
        </p>

        <p className="text-neutral-400 leading-relaxed">
          Beyond the screen, I’m a dedicated athlete and gamer at heart. I love the strategic depth of soccer and the fast-paced intensity of <span className="text-white italic font-bold">Call of Duty</span>.
        </p>

        <p className="text-neutral-400 leading-relaxed">
          You can also find me at the gym regularly; because <span className="text-cyan-500 font-bold">health is wealth</span> 😉. It's where I reset and build the discipline that I carry into my professional work.
        </p>

        <p className="text-neutral-400 leading-relaxed">
          I enjoy quiet time, good conversations, exploring new tools, and occasionally disappearing into YouTube or Twitter threads that start with “I’ll just check this for 5 minutes.”
        </p>
      </div>

      <div className="pt-6 border-t border-neutral-800">
        <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em] mb-4 italic">Connect Personally</h4>
        <a
          href="https://www.instagram.com/ost_een?igsh=MWN3MWgxZXZ2cjkydQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
            <svg className="w-5 h-5 text-neutral-400 group-hover:text-cyan-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.358-2.618-6.78-6.98-6.981C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
          <div>
            <span className="block text-sm font-bold text-white group-hover:text-cyan-500 transition-colors">@ost_een</span>
            <span className="block text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Instagram</span>
          </div>
        </a>
      </div>

      <div className="pt-8 text-[10px] font-mono text-neutral-600 uppercase tracking-widest leading-relaxed">
        This site is partly a portfolio, partly a lab, and partly a personal archive.
      </div>
    </div>
  );
};
