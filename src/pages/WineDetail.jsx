import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { WINE_LIST, CATEGORY_INFO } from '../data/wines';
import { useWishlist } from '../context/WishlistContext.jsx';

const WineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const wineId = Number(id);
  const wine = WINE_LIST.find((item) => item.id === wineId);

  if (!wine) {
    return (
      <main className="min-h-screen bg-[#FCFBFA] flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900">
            Wine Not Found
          </h1>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 font-sans"
          >
            Return to Collection
          </button>
        </div>
      </main>
    );
  }

  const categoryKey = wine.category;
  const categoryInfo = CATEGORY_INFO[categoryKey];
  const inWishlist = isInWishlist(wine.id);

  const handleWishlistToggle = () => toggleWishlist(wine.id);

  return (
    <main className="bg-[#FCFBFA] min-h-screen text-stone-900 font-sans">
      {/* Hero / Banner */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-[#811331]/20 to-black/40" />
        </div>

        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-3 mb-6 text-stone-200 text-xs uppercase tracking-[0.3em]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Collection</span>
          </button>

          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] bg-black/40 text-[#f3d2dd]">
              {categoryInfo ? categoryInfo.title : wine.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              {wine.name}
            </h1>
            <p className="text-sm md:text-base text-stone-200/90 max-w-xl leading-relaxed">
              {wine.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Bottle / Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-stone-100 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
              <img
                src={wine.image}
                alt={wine.name}
                className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out hover:scale-105 grayscale-[0.2] hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-10">
            {/* Top meta */}
            <div className="flex items-baseline justify-between border-b border-stone-200 pb-4">
              <div className="space-y-2">
                <span
                  className="text-[10px] uppercase tracking-[0.4em] font-bold"
                  style={{ color: '#811331' }}
                >
                  {wine.category === 'rose'
                    ? 'Rosé'
                    : wine.category.toUpperCase()}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
                  {wine.name}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  Estate Price
                </p>
                <p className="text-2xl md:text-3xl font-serif italic text-stone-900">
                  {wine.price}
                </p>
              </div>
            </div>

            {/* Tasting notes / narrative */}
            <div className="space-y-6">
              <p className="text-sm md:text-base text-stone-500 leading-relaxed">
                Crafted in limited quantities, this cuvée captures the quiet
                power of our Titari plateau vineyards. Hand-harvested at dawn,
                gently pressed, and aged with restraint, it reveals layers of
                fruit, spice, and minerality that unfold slowly in the glass.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs uppercase tracking-[0.25em] text-stone-500">
                <div className="space-y-1">
                  <p className="font-bold text-stone-700">Profile</p>
                  <p className="font-light">
                    Structured • Balanced • Long Finish
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-stone-700">Best Served</p>
                  <p className="font-light">
                    14–16°C • Large Bordeaux Stem
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-stone-700">Pairing</p>
                  <p className="font-light">
                    Slow-roasted meats • Aged cheeses
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
              <button
                type="button"
                onClick={handleWishlistToggle}
                className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 border border-[#811331] text-[#811331] overflow-hidden transition-all duration-300 ease-out hover:text-white"
              >
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-bold font-sans">
                  {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </span>
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.25,1)]"
                  style={{ backgroundColor: '#811331' }}
                />
              </button>

              <button
                type="button"
                onClick={() => navigate('/book-tour')}
                className="text-[11px] uppercase tracking-[0.3em] text-stone-600 hover:text-stone-900 font-sans"
              >
                Book a cellar tasting
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WineDetail;


