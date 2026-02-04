import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
// import Header from '../components/Header';
// import Footer from './Footer';
import WineCard from './WineCard';
import { WINE_LIST, CATEGORY_INFO } from '../data/wines';

const WinesByCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Normalize category (handle 'rose' vs 'rosé')
  const normalizedCategory = category?.toLowerCase() === 'rosé' ? 'rose' : category?.toLowerCase();

  // Get category info
  const categoryInfo = CATEGORY_INFO[normalizedCategory];
  
  // Filter wines by category
  const filteredWines = WINE_LIST.filter(
    wine => wine.category === normalizedCategory
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle invalid category
  if (!categoryInfo || filteredWines.length === 0) {
    return (
      <>
        <div className="min-h-screen bg-white flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-serif text-stone-900 mb-4">Category Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="text-stone-600 hover:text-stone-900 transition-colors font-sans"
            >
              Return Home
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 transition-transform duration-[20000ms] ease-linear transform ${
              isLoaded ? 'scale-110' : 'scale-100'
            }`}
          >
            <img
              src={categoryInfo.heroImage}
              alt={categoryInfo.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-stone-300/90 font-light font-sans mb-4">
              {categoryInfo.subtitle}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
              {categoryInfo.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 mb-12 md:mb-16 text-stone-600 hover:text-stone-900 transition-colors duration-300"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm uppercase tracking-[0.2em] font-sans">Back to Our Wines</span>
          </button>

          {/* Intro Section */}
          <div className="mb-16 md:mb-24">
            <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto text-center font-sans">
              {categoryInfo.description}
            </p>
            <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-8" />
          </div>

          {/* Wine Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredWines.map((wine, index) => (
              <WineCard key={wine.id} wine={wine} index={index} />
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default WinesByCategory;

