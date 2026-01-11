import React, { useEffect, useState, ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

// Cache scrollbar width to avoid recalculation on every modal open
let cachedScrollbarWidth: number | null = null;

const getScrollbarWidth = (): number => {
    if (cachedScrollbarWidth !== null) {
        return cachedScrollbarWidth;
    }
    cachedScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return cachedScrollbarWidth;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const [active, setActive] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setActive(true);
            setIsClosing(false);
            const scrollbarWidth = getScrollbarWidth();
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.classList.add('modal-open');
        } else if (active) { // Only trigger close animation if it was active
            handleClose();
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setActive(false);
            setIsClosing(false);
            // The parent's onClose should already have set isOpen to false.
            // This function manages the internal state for animation.
            document.body.style.paddingRight = '';
            document.body.classList.remove('modal-open');
        }, 300); // Updated to match new animation duration
    };

    if (!active && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6`}>
            {/* Backdrop - Optimized for Safari */}
            <div
                className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-heavy transition-opacity duration-300 ${isClosing ? 'animate-backdrop-exit' : 'animate-backdrop-entry'}`}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`modal-container relative w-full max-w-4xl max-h-[90vh] bg-[#09090b] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col ${isClosing ? 'animate-modal-exit' : 'animate-modal-entry'}`}>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-[#09090b] shrink-0 z-10">
                    <h2 className="text-xl font-bold text-white uppercase italic tracking-tighter">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors group"
                    >
                        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
};

