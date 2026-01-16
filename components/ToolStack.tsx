import React from 'react';
import { Tool } from '../types';

interface ToolStackProps {
  tools: Tool[];
}

export const ToolStack: React.FC<ToolStackProps> = ({ tools }) => {
  const categories: Tool['category'][] = [
    'Data & Storage',
    'Automation & Pipelines',
    'Analytics & BI',
    'INTELLIGENT SYSTEMS',
    'Modeling & Architecture'
  ];

  return (
    <div className="p-8 flex flex-col h-full bg-neutral-900/20 theme-transition">
      <h3 className="text-sm font-bold uppercase tracking-tighter text-neutral-500 mb-8 italic">My Technical Stack</h3>
      <div className="space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {categories.map((cat) => {
          const catTools = tools.filter(t => t.category === cat);
          if (catTools.length === 0) return null;

          return (
            <div key={cat} className="space-y-3">
              <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] border-b border-neutral-800 pb-2">
                {cat}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {catTools.map(tool => (
                  <div key={tool.name} className="flex items-center justify-between group py-1">
                    <span className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">{tool.name}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-cyan-500 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 pt-6 text-[10px] font-bold text-neutral-600 uppercase flex items-center justify-between border-t border-neutral-800 transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          Full Proficiency Verified
        </div>
      </div>
    </div>
  );
};