import React, { useEffect, useRef, useState } from 'react';

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#fcfaf8] py-24 md:py-32 px-6 md:px-12 overflow-hidden relative"
    >
      {/* Background Subtle Texture/Watermark */}
      <div className="absolute top-20 right-[-5%] opacity-[0.03] pointer-events-none hidden lg:block">
        <h2 className="text-[20rem] font-serif italic leading-none">AMBI VINES</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8 items-center">
          
          {/* Visual Side: Multi-layered images */}
          <div className="lg:col-span-6 relative">
            <div className={`relative z-10 transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}>
              {/* Main Image with refined shadow */}
              <div className="aspect-[4/5] overflow-hidden shadow-[30px_30px_80px_-15px_rgba(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1500" 
                  alt="Vineyard Detail" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[2000ms] hover:scale-105"
                />
              </div>
            </div>

            {/* Floating Accent Image (The Premium Touch) */}
            <div className={`absolute -bottom-16 -right-12 md:-right-20 w-1/2 aspect-square z-20 transition-all duration-[1800ms] delay-500 ease-out hidden sm:block ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <div className="w-full h-full p-2 bg-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hands holding grapes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Geometry */}
            <div className="absolute top-12 -left-12 w-48 h-48 border-[0.5px] border-amber-900/10 -z-0" />
          </div>

          {/* Text Side */}
          <div className={`lg:col-span-5 lg:col-start-8 flex flex-col transition-all duration-[1500ms] delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-[1px] bg-amber-900/30" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-medium font-sans">
                Our Heritage
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1] mb-10 md:mb-16">
              A Legacy Poured <br /> 
              <span className="italic text-amber-900/80">With Intention</span>
            </h2>

            <div className="space-y-8">
              <p className="text-stone-600/90 leading-relaxed font-light text-base md:text-lg italic font-sans">
                "We believe that great wine isn't made—it's listened to."
              </p>
              
              <div className="w-12 h-[1px] bg-stone-200" />

              <p className="text-stone-500 leading-relaxed font-light tracking-wide text-sm md:text-base font-sans">
                Nestled within the rolling foothills, our estate spans three distinct 
                micro-climates. From the hand-harvesting of our sun-drenched grapes 
                to the patient maturation in French oak, every bottle tells the story of 
                a season, a soil, and a soul.
              </p>

              <div className="pt-10">
                <a 
                  href="#" 
                  className="inline-flex flex-col group"
                >
                  <span className="text-stone-900 uppercase text-[11px] tracking-[0.4em] font-bold transition-colors group-hover:text-amber-900 font-sans">
                    Discover Our Philosophy
                  </span>
                  <div className="mt-2 h-[1px] w-full bg-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-stone-900 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;