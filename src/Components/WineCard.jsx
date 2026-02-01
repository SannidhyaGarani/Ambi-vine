import React, { useState } from 'react';

const WineCard = ({ wine, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group cursor-pointer flex flex-col transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-stone-100">
        <img
          src={wine.image}
          alt={wine.name}
          className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
        />
        
        {/* Hover Overlay with Description */}
        <div className="absolute inset-0 bg-stone-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
          <p className="text-white text-center text-xs md:text-sm tracking-[0.1em] leading-relaxed font-sans">
            {wine.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Info */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-baseline border-b border-stone-200 pb-2">
          <h3 className="text-2xl md:text-3xl font-serif text-stone-900">
            {wine.name}
          </h3>
          <span className="text-lg md:text-xl font-serif text-stone-600">
            {wine.price}
          </span>
        </div>
        
        <span className="text-[10px] uppercase tracking-[0.2em] text-amber-800/60 font-bold font-sans">
          {wine.category === 'rose' ? 'Rosé' : wine.category.charAt(0).toUpperCase() + wine.category.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default WineCard;

