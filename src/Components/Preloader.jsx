import React, { useState, useEffect, useRef } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState('enter'); // 'enter', 'hold', 'exit'
    
    const brandColor = '#811331';
    
    useEffect(() => {
        let animationFrame;
        let startTime = null;
        
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            
            let newProgress;
            if (elapsed < 800) {
                newProgress = (elapsed / 800) * 40;
            } else if (elapsed < 1600) {
                newProgress = 40 + ((elapsed - 800) / 800) * 30;
            } else if (elapsed < 2500) {
                newProgress = 70 + ((elapsed - 1600) / 900) * 25;
            } else {
                newProgress = 95 + ((elapsed - 2500) / 500) * 5;
                newProgress = Math.min(newProgress, 100);
            }
            
            setProgress(newProgress);
            
            if (elapsed < 1200) {
                setPhase('enter');
            } else if (elapsed < 2800) {
                setPhase('hold');
            } else {
                setPhase('exit');
            }
            
            if (elapsed < 3200) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setTimeout(() => setIsVisible(false), 500);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        document.body.style.overflow = 'hidden';
        
        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center">
            {/* Background Layer with Brand Color */}
            <div className={`
                absolute inset-0 transition-all duration-1000 ease-in-out
                ${phase === 'exit' ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
            `} style={{ backgroundColor: brandColor }}>
                {/* Radial Vignette for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>
            
            {/* Texture Overlay */}
            <div className={`
                absolute inset-0 opacity-[0.03] pointer-events-none
                ${phase === 'exit' ? 'opacity-0' : ''}
                transition-opacity duration-1000
            `} style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")` }} />
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center w-full px-6">
                
                {/* Brand Logo Section */}
                <div className={`
                    text-center transition-all duration-1000 ease-out
                    ${phase === 'enter' ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}
                    ${phase === 'exit' ? '-translate-y-12 opacity-0' : ''}
                `}>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-[0.2em] mb-2">
                        AMBI VINES
                    </h1>
                    <p className="text-[10px] md:text-xs tracking-[0.6em] text-white/60 uppercase font-light">
                        Estate • Napa Valley • Est. 1924
                    </p>
                    
                    {/* Elegant Divider */}
                    <div className="flex items-center justify-center mt-8 gap-4">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30" />
                        <div className="w-1.5 h-1.5 rounded-full border border-white/40" />
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/30" />
                    </div>
                </div>

                {/* Progress Section */}
                <div className={`
                    mt-20 w-64 md:w-96 transition-all duration-700 delay-300
                    ${phase === 'exit' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                `}>
                    {/* Percentage Display */}
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase font-bold">Vintage Loading</span>
                        <span className="font-mono text-sm text-white tracking-widest">{Math.round(progress)}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-[2px] w-full bg-white/10 overflow-hidden">
                        <div 
                            className="absolute left-0 top-0 h-full bg-white transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Subtle Glow at the edge of progress */}
                            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-white shadow-[10px_0_15px_rgba(255,255,255,0.5)]" />
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline */}
                <div className={`
                    absolute bottom-12 transition-all duration-1000 delay-500
                    ${phase === 'exit' ? 'opacity-0 translate-y-4' : 'opacity-100'}
                `}>
                    <p className="text-[8px] md:text-[9px] tracking-[0.4em] text-white/30 uppercase text-center italic">
                        The intersection of tradition and elegance
                    </p>
                </div>
            </div>

            {/* Curtain Exit Effect (Optional - adds a luxurious slide out) */}
            <div className={`
                absolute inset-0 bg-stone-900 transition-transform duration-[1200ms] ease-in-out z-[-1]
                ${phase === 'exit' ? 'translate-y-0' : 'translate-y-full'}
            `} />
        </div>
    );
};

export default Preloader;