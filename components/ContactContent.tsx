import React from 'react';

export const ContactContent: React.FC = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-4 py-1">

            <div className="space-y-2">
                <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-full flex items-center justify-center text-cyan-500 mb-3">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-bold text-white uppercase italic tracking-tight">Location</h3>
                <p className="text-base text-neutral-400 font-medium">Abuja, Nigeria</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 rounded-full border border-green-900/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Available Remotely</span>
                </div>
            </div>

            <div className="w-full h-px bg-neutral-800 max-w-xs mx-auto"></div>

            <div className="space-y-2">
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Connect</h3>
                <div className="flex flex-col gap-2">
                    <a href="https://www.linkedin.com/in/austin-john-ogbormeh-422330147/" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg font-black text-white hover:text-cyan-500 transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/ost_een?igsh=MWN3MWgxZXZ2cjkydQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg font-black text-white hover:text-cyan-500 transition-colors">
                        Instagram
                    </a>
                    <a href="https://x.com/ost_een?s=21&t=vXJB1uGk7Wbz2_U6jdmKTA" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg font-black text-white hover:text-cyan-500 transition-colors">
                        X (Twitter)
                    </a>
                </div>
            </div>

            <div className="w-full h-px bg-neutral-800 max-w-xs mx-auto"></div>

            <div className="space-y-2">
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Direct Contact</h3>
                <a href="tel:+2347057585612" className="block text-base md:text-lg font-black text-white hover:text-cyan-500 transition-colors font-mono">
                    +234 705 758 5612
                </a>

                <a href="mailto:austinjohn337@gmail.com" className="block text-base md:text-lg font-black text-white hover:text-cyan-500 transition-colors mt-1">
                    austinjohn337@gmail.com
                </a>
            </div>

            <div className="pt-2 w-full max-w-sm">
                <a href="mailto:austinjohn337@gmail.com" className="block w-full bg-white text-black font-black uppercase tracking-widest py-2.5 rounded-xl hover:bg-cyan-400 transition-all active:scale-95 text-sm">
                    Send Email
                </a>
            </div>
        </div>
    );
};
