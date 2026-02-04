import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState('enter'); // 'enter', 'hold', 'exit'
    
    // Enhanced loading simulation with realistic progress
    useEffect(() => {
        let animationFrame;
        let startTime = null;
        
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            
            // Realistic loading simulation with variable speeds
            let newProgress;
            if (elapsed < 800) {
                // Initial fast loading (0-40%)
                newProgress = (elapsed / 800) * 40;
            } else if (elapsed < 1600) {
                // Slower middle phase (40-70%)
                newProgress = 40 + ((elapsed - 800) / 800) * 30;
            } else if (elapsed < 2500) {
                // Very slow near completion (70-95%)
                newProgress = 70 + ((elapsed - 1600) / 900) * 25;
            } else {
                // Final stretch to 100%
                newProgress = 95 + ((elapsed - 2500) / 500) * 5;
                newProgress = Math.min(newProgress, 100);
            }
            
            setProgress(newProgress);
            
            // Phase transitions
            if (elapsed < 1200) {
                setPhase('enter');
            } else if (elapsed < 2800) {
                setPhase('hold');
            } else {
                setPhase('exit');
            }
            
            if (elapsed < 3000) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                // Slight delay at 100% before exiting
                setTimeout(() => setIsVisible(false), 300);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        // Lock scroll
        document.body.style.overflow = 'hidden';
        
        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] overflow-hidden">
            {/* Background with gradient overlay */}
            <div className={`
                absolute inset-0 bg-gradient-to-br from-[#0c0a09] via-[#0c0a09] to-[#1a1614]
                transition-all duration-1000
                ${phase === 'exit' ? 'opacity-0' : 'opacity-100'}
            `} />
            
            {/* Animated noise texture overlay */}
            <div className={`
                absolute inset-0 opacity-[0.015]
                ${phase === 'exit' ? 'opacity-0' : ''}
                transition-opacity duration-1000
            `} style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px'
            }} />
            
            {/* Geometric background patterns */}
            <div className={`
                absolute inset-0 transition-all duration-1500
                ${phase === 'exit' ? 'opacity-0 scale-110' : 'opacity-30'}
            `}>
                {/* Subtle grid pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
                
                {/* Decorative corner accents */}
                <div className="absolute top-12 left-12 w-24 h-px bg-gradient-to-r from-transparent via-stone-500/30 to-transparent" />
                <div className="absolute top-12 right-12 w-24 h-px bg-gradient-to-l from-transparent via-stone-500/30 to-transparent" />
                <div className="absolute bottom-12 left-12 w-24 h-px bg-gradient-to-r from-transparent via-stone-500/30 to-transparent" />
                <div className="absolute bottom-12 right-12 w-24 h-px bg-gradient-to-l from-transparent via-stone-500/30 to-transparent" />
            </div>

            {/* Main content */}
            <div className="relative h-full flex flex-col items-center justify-center">
                {/* Logo/Brand */}
                <div className={`
                    relative mb-16 transition-all duration-1000 ease-out
                    ${phase === 'enter' ? 'translate-y-0 opacity-100' : ''}
                    ${phase === 'hold' ? 'translate-y-0 opacity-100' : ''}
                    ${phase === 'exit' ? '-translate-y-8 opacity-0' : ''}
                `}>
                    {/* Main logo text with glow effect */}
                    <h1 className={`
                        font-serif text-6xl md:text-7xl lg:text-8xl text-stone-100 font-light tracking-[0.15em]
                        transition-all duration-1000
                        ${phase === 'hold' ? 'drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]' : ''}
                    `}>
                        AMBI
                        <span className={`
                            block mt-2 text-4xl md:text-5xl lg:text-6xl tracking-[0.3em]
                            font-extralight italic text-stone-300/90
                            transition-all duration-1000 delay-300
                            ${phase === 'hold' ? 'opacity-100' : 'opacity-70'}
                        `}>
                            VINES
                        </span>
                    </h1>
                    
                    {/* Animated underline */}
                    <div className={`
                        relative h-px mt-8 overflow-hidden
                        transition-all duration-1000 delay-500
                        ${phase === 'exit' ? 'opacity-0' : 'opacity-100'}
                    `}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-400/50 to-transparent" />
                        <div className={`
                            absolute inset-0 bg-gradient-to-r from-transparent via-stone-100 to-transparent
                            animate-shimmer
                        `} />
                    </div>
                </div>

                {/* Progress indicator */}
                <div className="w-64 md:w-80 mt-16">
                    {/* Progress bar container */}
                    <div className="relative h-px bg-stone-700/50 overflow-hidden rounded-full">
                        {/* Animated glow track */}
                        <div className={`
                            absolute inset-0 bg-gradient-to-r from-stone-800/30 via-stone-400/30 to-stone-800/30
                            animate-pulse-slow
                            ${phase === 'exit' ? 'opacity-0' : ''}
                        `} />
                        
                        {/* Progress fill */}
                        <div 
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-stone-300 via-stone-100 to-stone-300 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Glowing tip */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-stone-100 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]" />
                        </div>
                    </div>
                    
                    {/* Progress percentage */}
                    <div className={`
                        mt-4 text-center transition-all duration-300
                        ${phase === 'exit' ? 'opacity-0' : 'opacity-100'}
                    `}>
                        <span className="font-mono text-sm text-stone-400 tracking-widest">
                            {Math.round(progress)}%
                        </span>
                        <span className="ml-2 text-xs text-stone-500 tracking-widest">
                            LOADING
                        </span>
                    </div>
                </div>

                {/* Tagline */}
                <div className={`
                    absolute bottom-16 left-0 right-0 text-center
                    transition-all duration-1000 delay-700
                    ${phase === 'exit' ? 'opacity-0 translate-y-4' : 'opacity-100'}
                `}>
                    <p className="text-xs tracking-[0.5em] text-stone-500 font-light uppercase">
                        Crafting Digital Excellence
                    </p>
                    <div className="flex items-center justify-center mt-4 space-x-6">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className={`
                                    w-1 h-1 rounded-full bg-stone-600
                                    animate-pulse
                                `}
                                style={{ animationDelay: `${i * 200}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Add these styles to your global CSS file or Tailwind config:
/*
*/

export default Preloader;