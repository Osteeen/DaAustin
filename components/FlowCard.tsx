
import React from 'react';

export const FlowCard: React.FC = () => {
  const steps = [
    { label: 'Ingestion', color: 'bg-neutral-800' },
    { label: 'Refinement', color: 'bg-neutral-700' },
    { label: 'Embedding', color: 'bg-neutral-600' },
    { label: 'Inference', color: 'bg-cyan-900 text-cyan-400' },
    { label: 'Agent Action', color: 'bg-cyan-600 text-white' },
    { label: 'Business ROI', color: 'bg-emerald-500 text-black font-black' },
  ];

  return (
    <div className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl h-full flex flex-col group hover:border-emerald-500/20 transition-colors">
      <h3 className="text-sm font-bold uppercase tracking-tighter text-neutral-500 mb-6 italic">Agentic Pipeline Flow</h3>
      <div className="flex flex-col gap-2 flex-1 justify-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3">
            <div className={`text-[10px] px-3 py-1.5 rounded uppercase tracking-[0.15em] font-black flex-1 text-center ${step.color} border border-white/5 transition-transform group-hover:scale-[1.02]`}>
              {step.label}
            </div>
            {i < steps.length - 1 && (
              <div className="flex flex-col items-center opacity-30">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="rotate-90">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
         <span className="text-[9px] font-mono text-neutral-600">INPUT: MULTIMODAL</span>
         <span className="text-[9px] font-mono text-neutral-600">OUTPUT: REVENUE</span>
      </div>
    </div>
  );
};
