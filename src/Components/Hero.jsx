import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0a09]">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 transition-transform duration-[20000ms] ease-linear transform ${
            loaded ? 'scale-110 translate-x-4' : 'scale-100 translate-x-0'
          }`}
        >
          <img 
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=2070" 
            alt="Vineyard at sunset"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Multilayered Overlay for Depth */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl px-8 flex flex-col items-center">
        
        {/* Subtle Accent Line & Label */}
        <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 delay-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-8 h-[1px] bg-amber-200/50" />
          <span className="uppercase tracking-[0.6em] text-[9px] md:text-[11px] text-amber-100/90 font-light font-sans">
            Established 1924
          </span>
          <div className="w-8 h-[1px] bg-amber-200/50" />
        </div>

        {/* Hero Title with staggered reveal */}
        <h1 className="text-center mb-10 md:mb-16 overflow-hidden">
          <span className={`block font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] transition-all duration-[1800ms] ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            The Art of
          </span>
          <span className={`block font-serif text-5xl md:text-6xl lg:text-7xl italic text-amber-50 transition-all duration-[1800ms] delay-500 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Exceptional Terroir
          </span>
        </h1>

        {/* Description */}
        <p className={`max-w-xl text-center text-stone-300/90 font-light leading-relaxed tracking-wide mb-14 md:mb-16 transition-all duration-1000 delay-700 font-sans text-sm md:text-base ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          A masterclass in viticulture. Born from ancient soils and nurtured by 
          the Pacific breeze, AMBI VINES captures the soul of the valley in every pour.
        </p>

        {/* Premium CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center gap-8 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className="group relative px-12 py-5 bg-white text-stone-900 overflow-hidden transition-all duration-500">
            <span className="relative z-10 uppercase text-[11px] tracking-[0.4em] font-semibold font-sans">
              The Collection
            </span>
            <div className="absolute inset-0 bg-amber-50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
          
          <button className="group px-12 py-5 border border-white/20 text-white backdrop-blur-sm hover:border-white transition-all duration-500 uppercase text-[11px] tracking-[0.4em] font-sans">
            Our Legacy
          </button>
        </div>
      </div>

      {/* Elegant Vertical Scroll Indicator */}
      <div className={`absolute bottom-12 flex flex-col items-center gap-4 transition-opacity duration-[2000ms] delay-[1500ms] ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="uppercase text-[9px] tracking-[0.5em] text-white/40 rotate-180 [writing-mode:vertical-lr] font-sans">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-200/40 to-transparent" />
      </div>

      {/* Border Frame (The "Premium" Touch) */}
      <div className="absolute inset-8 border border-white/5 pointer-events-none hidden md:block" />
    </section>
  );
};

export default Hero;