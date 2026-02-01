import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 1,
    name: "Red",
    description: "Robust & Earthy",
    details: "Hand-picked Sangiovese and Cabernet.",
    image: "https://images.unsplash.com/photo-1510850402719-e4c78a483946?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "White",
    description: "Crisp & Mineral",
    details: "Sun-drenched Chardonnay and Grigio.",
    image: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Rosé",
    description: "Fresh & Floral",
    details: "Elegant Provencal-style summer blends.",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Beer",
    description: "Artisan & Cold",
    details: "Small-batch craft ales from our valley.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
  }
];

const CategoryCard = ({ item, index, isVisible, onNavigate }) => {
  const handleClick = () => {
    const categorySlug = item.name.toLowerCase() === 'rosé' ? 'rose' : item.name.toLowerCase();
    onNavigate(`/wines/${categorySlug}`);
  };

  return (
    <div 
      onClick={handleClick}
      className={`group cursor-pointer flex flex-col transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
    {/* Visual Stage */}
    <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-stone-100">
      <img 
        src={item.image} 
        alt={item.name}
        className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
      />
      
      {/* Overlay: Text appears on hover */}
      <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
        <p className="text-white text-center text-xs tracking-[0.2em] leading-relaxed uppercase font-sans">
          {item.details}
        </p>
      </div>
    </div>

    {/* Typography - Bold but compact spacing */}
    <div className="flex justify-between items-baseline border-b border-stone-200 pb-2">
      <h3 className="text-2xl md:text-3xl font-serif text-stone-900">{item.name}</h3>
      <span className="text-[10px] uppercase tracking-[0.2em] text-amber-800/60 font-bold font-sans">
        {item.description}
      </span>
    </div>
  </div>
  );
};

const OurWines = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Large font, tight vertical gaps */}
        <div className="flex items-baseline justify-between mb-16 md:mb-24 border-b border-stone-900 pb-4">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Our <span className="italic">Wines</span>
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.5em] text-stone-400 font-sans">
            Selection 2026
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((item, index) => (
            <CategoryCard 
              key={item.id} 
              item={item} 
              index={index} 
              isVisible={isVisible}
              onNavigate={navigate}
            />
          ))}
        </div>

        {/* Minimalist Bottom CTA */}
        <div className="mt-16 md:mt-24 flex justify-end">
          <button className="group flex items-center gap-4">
            <span className="text-stone-900 uppercase text-[11px] tracking-[0.4em] font-bold font-sans">
              View Full Menu
            </span>
            <div className="w-12 h-px bg-stone-300 group-hover:w-20 group-hover:bg-amber-800 transition-all duration-500" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurWines;