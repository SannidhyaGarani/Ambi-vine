import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // The brand color provided
  const themeColor = '#811331';

  useEffect(() => {
    // Trigger animations after mount
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#0c0a09]">
      {/* --- Cinematic Background Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Image with slow zoom/pan effect */}
        <div 
          className={`absolute inset-0 transition-transform duration-[20000ms] ease-linear transform will-change-transform ${
            loaded ? 'scale-110 translate-x-4' : 'scale-100 translate-x-0'
          }`}
        >
          <img 
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=2070" 
            alt="Vineyard at sunset"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* --- Multilayered Overlays for Depth & Theme Color --- */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[#811331]/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#811331]/20 to-black/40" />
      </div>

      {/* --- Content Container --- */}
      <div className="relative z-10 max-w-5xl px-8 flex flex-col items-center text-center">
        
        {/* Subtle Accent Line & Label */}
        <div className={`flex items-center gap-6 mb-10 transition-all duration-1000 delay-300 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="w-12 h-[1px] bg-white/30" />
          <span className="uppercase tracking-[0.6em] text-[10px] text-white/80 font-medium font-sans">
            Estate Established 1924
          </span>
          <div className="w-12 h-[1px] bg-white/30" />
        </div>

        {/* Hero Title */}
        <h1 className="mb-8 md:mb-14 overflow-hidden drop-shadow-lg">
          <span className={`block font-serif 
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
            text-white leading-[1.1] 
            transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
            }`}>
            The Art of
          </span>

          <span className={`block font-serif italic 
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
            text-stone-100 leading-[1.1] 
            transition-all duration-[1500ms] delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
            }`}>
            Exceptional Terroir
          </span>
        </h1>

        {/* Description */}
        <p className={`max-w-lg text-stone-200/90 font-light leading-relaxed tracking-wider mb-16 transition-all duration-1000 delay-700 font-sans text-sm md:text-base ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Born from ancient soils and nurtured by the Pacific breeze, AMBI VINES captures the soul of the valley in every nuanced pour.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            className="group relative min-w-[200px] px-8 py-4 overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: themeColor }}
          >
            <span className="relative z-10 uppercase text-[11px] tracking-[0.4em] font-bold font-sans text-white">
              Explore Wines
            </span>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group relative min-w-[200px] px-8 py-4 border-[1px] border-white/40 text-white overflow-hidden transition-all duration-300 ease-out hover:border-transparent">
            <span className="relative z-10 uppercase text-[11px] tracking-[0.4em] font-bold font-sans">
              Book A Tasting
            </span>
            <div 
              className="absolute inset-0 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.25,1)]"
              style={{ backgroundColor: themeColor }}
            />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 flex flex-col items-center gap-6 transition-all duration-[2000ms] delay-[1800ms] ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <span className="uppercase text-[9px] tracking-[0.4em] text-white/60 font-sans animate-pulse">
          Scroll to Discover
        </span>
        <ChevronDown className="text-white/60 animate-bounce" size={20} strokeWidth={1} />
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 via-[#811331] to-transparent" />
      </div>

      {/* Border Frame */}
      <div className="absolute inset-6 md:inset-10 border border-white/10 pointer-events-none z-20 hidden md:block" />
    </section>
  );
};

export default Hero;
