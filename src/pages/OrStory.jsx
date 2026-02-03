import React, { useEffect, useState } from 'react';

const OurStory = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section
        className="relative pt-40 pb-24 px-6 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/55"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-4 block font-bold">
            The Heritage
          </span>

          <h1 className="text-5xl md:text-7xl font-serif mb-8 italic text-white">
            Our Story
          </h1>

          <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-white/70">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">Our Story</span>
          </nav>
        </div>
      </section>

      {/* 2. THE NARRATIVE SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Visual Anchor - Left Side */}
            <div className="lg:col-span-5 relative">
              <div className={`aspect-[4/5] overflow-hidden rounded-t-full transition-all duration-[1.5s] delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ambi Vineyards Estate" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#F9F8F6] p-8 border border-stone-100 hidden md:block">
                <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold rotate-90 origin-left translate-x-4">
                  Titari Estate
                </p>
              </div>
            </div>

            {/* Editorial Content - Right Side */}
            <div className="lg:col-span-7 pt-12 lg:pt-24">
              <div className={`space-y-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                
                {/* Paragraph 1 - Leading Statement */}
                <div className="space-y-6">
                  <div className="h-px w-12 bg-stone-300 mb-8" />
                  <p className="text-2xl md:text-3xl font-serif leading-relaxed italic text-stone-800">
                    At Ambi Vineyards, our journey is guided by a simple yet powerful vision, to become one of the most respected names in the wine and spirits industry while adding meaningful value to every consumer’s experience.
                  </p>
                </div>

                {/* Paragraph 2 - The Process */}
                <div className="max-w-xl">
                  <p className="text-stone-500 font-light leading-[1.8] text-base md:text-lg">
                    Rooted in passion and inspired by legacy, we combine quality-driven production, modern technology, and an unwavering commitment to excellence to craft wines that stand apart. Every bottle reflects our dedication to consistency, authenticity, and world-class standards.
                  </p>
                </div>

                {/* Paragraph 3 - The Ambition */}
                <div className="max-w-xl">
                  <p className="text-stone-500 font-light leading-[1.8] text-base md:text-lg">
                    As we continue to grow, our focus remains clear: to create exceptional wines that resonate with our customers and place Central India firmly on the global wine map.
                  </p>
                </div>

                {/* 3. SIGNATURE BLOCK */}
                <div className="pt-16">
                  <div className="flex flex-col space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">
                      Founder & Visionary
                    </span>
                    <span className="text-4xl font-serif italic text-stone-900 tracking-tight">
                      Motilal Patidar
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPTIONAL FOOTER DIVIDER */}
      <section className="py-10 px-6">
        <div className="max-w-xl mx-auto border-t border-stone-200" />
      </section>

      {/* Custom Styles for Typography */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;600&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
};

export default OurStory;