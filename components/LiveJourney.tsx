import React from 'react';
import { JourneyNode } from '../types';
import { PulsingIndicator } from './PulsingIndicator';

interface LiveJourneyProps {
  data: JourneyNode[];
}

export const LiveJourney: React.FC<LiveJourneyProps> = ({ data }) => {
  return (
    <div className="flex flex-col p-8 theme-transition h-full">
      <h3 className="text-sm font-bold uppercase tracking-tighter text-neutral-500 mb-8 italic">My Journey</h3>
      <div className="relative flex flex-col gap-10 ml-3 h-full pb-4">
        {/* Vertical Track Line */}
        <div className="absolute left-[11px] top-[12px] bottom-[12px] w-[2px] bg-neutral-800 transition-colors">
        </div>

        {data.map((node) => (
          <div key={node.id} className="relative flex items-start gap-6 group z-10">
            {/* Node Circle */}
            <div className="mt-1.5 shrink-0">
              {node.status === 'present' ? (
                <PulsingIndicator />
              ) : node.status === 'future' ? (
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-emerald-500/50 bg-neutral-900 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30"></div>
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-neutral-700 bg-neutral-900 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <span className={`text-[10px] mono font-medium mb-0.5 transition-colors ${node.status === 'present' ? 'text-cyan-500' : 'text-neutral-500'}`}>
                {node.date}
              </span>
              <h4 className={`text-sm font-bold uppercase tracking-tight transition-colors ${node.status === 'present' ? 'text-cyan-400' : 'text-neutral-200'}`}>
                {node.title}
              </h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed max-w-[200px] mt-1 transition-colors">
                {node.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};