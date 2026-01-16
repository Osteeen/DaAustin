import React from 'react';

export const PulsingIndicator: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'md' }) => {
  const containerClasses = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  const dotClasses = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3';

  return (
    <div className={`relative flex items-center justify-center ${containerClasses}`}>
      <div className="absolute w-full h-full rounded-full bg-cyan-400 opacity-75 pulse-ring"></div>
      <div className={`relative ${dotClasses} rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] pulse-dot`}></div>
    </div>
  );
};

export const StatusBadge: React.FC = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full w-fit theme-transition shadow-none self-center">
      <PulsingIndicator size="sm" />
      <span className="text-[14px] font-black uppercase tracking-[0.05em] text-neutral-100 leading-none">Open to Work</span>
    </div>
  );
};