
import React, { useState, useMemo } from 'react';

export const FinancialCalculator: React.FC = () => {
  const [mrr, setMrr] = useState(500000);
  const [churnRate, setChurnRate] = useState(5);
  const [reduction, setReduction] = useState(1);

  const potentialSavings = useMemo(() => {
    const currentLost = mrr * (churnRate / 100);
    const newLost = mrr * ((churnRate - reduction) / 100);
    return (currentLost - newLost) * 12; // Annualized
  }, [mrr, churnRate, reduction]);

  return (
    <div className="flex flex-col h-full p-6 bg-neutral-900/50 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-tighter text-neutral-500">ROI Calculator</h3>
          <p className="text-xs text-neutral-400 mt-1">Impact of Data-Driven Retention</p>
        </div>
        <div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold border border-emerald-500/20">
          VALUE DRIVEN
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <label className="text-[10px] font-bold text-neutral-500 uppercase flex justify-between">
            Monthly Recurring Revenue (MRR)
            <span className="text-neutral-300 font-mono">${mrr.toLocaleString()}</span>
          </label>
          <input 
            type="range" min="100000" max="2000000" step="50000" 
            value={mrr} onChange={(e) => setMrr(Number(e.target.value))}
            className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 mt-2"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold text-neutral-500 uppercase flex justify-between">
            Current Churn Rate
            <span className="text-neutral-300 font-mono">{churnRate}%</span>
          </label>
          <input 
            type="range" min="1" max="20" step="0.5" 
            value={churnRate} onChange={(e) => setChurnRate(Number(e.target.value))}
            className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 mt-2"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold text-neutral-500 uppercase flex justify-between">
            Target Reduction
            <span className="text-emerald-400 font-mono">-{reduction}%</span>
          </label>
          <input 
            type="range" min="0.5" max="5" step="0.5" 
            value={reduction} onChange={(e) => setReduction(Number(e.target.value))}
            className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-2"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-800/50">
        <p className="text-[10px] font-bold text-neutral-500 uppercase mb-2">Annualized Preserved Revenue</p>
        <div className="text-3xl font-bold text-white tracking-tighter">
          ${potentialSavings.toLocaleString()}
          <span className="text-emerald-400 text-sm ml-2">/year</span>
        </div>
        <p className="text-xs text-neutral-500 mt-1">Estimates based on direct MRR impact.</p>
      </div>
    </div>
  );
};
