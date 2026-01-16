import React from 'react';

export const ThinkCard: React.FC = () => {
  const steps = [
    { title: 'Business First', desc: 'Start from the decision, not the tool' },
    { title: 'Data Reality', desc: 'Understand the data mess before building' },
    { title: 'System Design', desc: 'Build pipelines and metrics, not just charts' },
    { title: 'AI Where It Makes Sense', desc: 'Use AI for leverage, not hype' },
    { title: 'Decision Impact', desc: 'Measure success by business outcomes, not visuals' },
  ];

  return (
    <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-[2rem] h-full flex flex-col group hover:border-cyan-500/30 transition-all shadow-none theme-transition">
      <h3 className="text-sm font-bold uppercase tracking-tighter text-neutral-500 mb-8 italic">How I Think</h3>
      <div className="space-y-6 flex-1">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="text-cyan-500 font-mono text-xs pt-1 font-bold">0{i + 1}</span>
            <div>
              <p className="text-sm font-black text-neutral-100 uppercase tracking-tight leading-tight transition-colors">
                {s.title}
              </p>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-4 border-t border-neutral-800/50">
        <p className="text-[10px] mono text-neutral-600 uppercase">Framework: Decision-First Engineering</p>
      </div>
    </div>
  );
};