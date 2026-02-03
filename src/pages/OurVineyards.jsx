import React, { useEffect, useRef, useState } from 'react';

// Custom Hook for Scroll Reveal
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

const VineyardSection = ({ title, subtitle, description, image, reversed, label }) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`py-24 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-[1200ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative group overflow-hidden rounded-[2rem] shadow-sm">
            <img 
              src={image} 
              alt={title} 
              className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.5em] text-stone-400 font-bold block">
              {label}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 leading-tight">
              {title}
            </h2>
            <p className="text-stone-400 font-serif italic text-lg">{subtitle}</p>
          </div>
          <div className="h-px w-16 bg-stone-200"></div>
          <p className="text-stone-500 font-light leading-relaxed text-lg max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

const OurVineyards = () => {
  return (
    <main className="bg-[#F9F8F6] min-h-screen font-sans text-stone-900 overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO / TITLE SECTION */}
      <section
        className="relative pt-40 pb-24 px-6 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1474844331793-c25076ecdf6d?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/55"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-4 block font-bold">
            Origin & Earth
          </span>

          <h1 className="text-5xl md:text-7xl font-serif mb-8 italic text-white">
            Our Vineyards
          </h1>

          <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-white/70">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">Our Vineyards</span>
          </nav>
        </div>
      </section>

      {/* 2. ALTERNATING SHOWCASE */}
      <div className="space-y-12">
        <VineyardSection 
          label="The Location"
          title="The Titari Plateau"
          subtitle="Sun-Drenched High Altitudes"
          description="Perched on the elevated plains of Central India, our primary estate benefits from intense UV exposure tempered by cooling evening breezes. This thermal amplitude ensures a slow, balanced ripening process that preserves acidity while developing deep fruit complexity."
          image="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=1200"
          reversed={false}
        />

        <VineyardSection 
          label="The Terroir"
          title="Volcanic Foundations"
          subtitle="Ancient Stones, Modern Character"
          description="Our soil is a rare composition of crumbly basalt and rich clay, remnants of ancient volcanic activity. This mineral-heavy foundation forces our vines to dig deep, imparting a distinctive flinty minerality and structural elegance that defines every Ambi vintage."
          image="https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1200"
          reversed={true}
        />

        <VineyardSection 
          label="Philosophy"
          title="Living Viticulture"
          subtitle="Respecting the Natural Cycle"
          description="We practice a philosophy of minimal intervention. By encouraging local biodiversity and using organic composting, we maintain a vibrant ecosystem where the vines thrive in harmony with the local flora, resulting in grapes that are a pure expression of their environment."
          image="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200"
          reversed={false}
        />
      </div>

      {/* 3. VISUAL STORYTELLING (Cinematic Break) */}
      <section className="relative mt-32 h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Full-width Image */}
        <img 
          src="https://images.unsplash.com/photo-1474844331793-c25076ecdf6d?q=80&w=2000" 
          alt="Panoramic Vineyard View" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-stone-900/40"></div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h3 className="text-white font-serif text-3xl md:text-5xl italic leading-tight mb-8">
            "We do not inherit the land from our ancestors; we borrow it from our children."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/30"></div>
            <span className="text-white/80 text-[10px] uppercase tracking-[0.5em] font-bold">The Ambi Promise</span>
            <div className="h-px w-12 bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING STATEMENT */}
      <section className="py-40 px-6 text-center max-w-2xl mx-auto">
        <h4 className="text-[11px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-6">Experience the Source</h4>
        <p className="text-stone-800 font-serif text-2xl italic leading-relaxed">
          Every bottle of Ambi tells the story of our soil. We invite you to taste the landscape of Central India, distilled into its finest form.
        </p>
      </section>

    </main>
  );
};

export default OurVineyards;