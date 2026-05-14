import React from 'react';

export const ThinkCard: React.FC = () => {
  const steps = [
    { title: 'Start with the problem', desc: 'Map the real workflow before touching any tool or model' },
    { title: 'Design the system', desc: 'Architect the full pipeline — inputs, logic, outputs, edge cases — before building' },
    { title: 'AI as the engine', desc: 'Use AI for the hard reasoning and pattern work. Keep humans for judgment calls' },
    { title: 'Build to run itself', desc: 'If it needs babysitting, it is not done. Automation should be autonomous' },
    { title: 'Measure by outcome', desc: 'Does it save time, make money, or reduce risk? That is the only metric that matters' },
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
        <p className="text-[10px] mono text-neutral-600 uppercase">Framework: Systems-First AI</p>
      </div>
    </div>
  );
};