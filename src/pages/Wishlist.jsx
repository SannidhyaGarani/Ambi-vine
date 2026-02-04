import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartOff } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext.jsx';
import { WINE_LIST } from '../data/wines';
import WineCard from '../Components/WineCard.jsx';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistIds, count } = useWishlist();

  const wines = WINE_LIST.filter((wine) => wishlistIds.includes(wine.id));

  const hasItems = wines.length > 0;

  return (
    <main className="bg-[#FCFBFA] min-h-screen text-stone-900 font-sans">
      {/* Hero / Header */}
      <section className="relative pt-40 pb-20 px-6 text-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#811331_0,_transparent_45%),_radial-gradient(circle_at_bottom,_#0b0b0b_0,_transparent_55%)]" />

        <div className="relative max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#f3d2dd] mb-4 block font-bold">
            Curated Favourites
          </span>

          <h1 className="text-4xl md:text-6xl font-serif mb-4 italic text-white">
            Wishlist
          </h1>

          <p className="text-sm md:text-base text-stone-200/80 max-w-2xl mx-auto leading-relaxed">
            A quiet collection of bottles you&apos;re considering for the next
            occasion. Saved across visits, always ready when you return.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {hasItems ? (
            <>
              <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-stone-900">
                  Saved Wines
                </h2>
                <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
                  {count.toString().padStart(2, '0')} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {wines.map((wine, index) => (
                  <WineCard key={wine.id} wine={wine} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-24 flex flex-col items-center text-center gap-6">
              <div className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center">
                <HeartOff className="text-stone-300" size={24} />
              </div>
              <div className="space-y-3 max-w-md">
                <p className="text-sm uppercase tracking-[0.4em] font-bold text-stone-400">
                  Nothing Saved Yet
                </p>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                  Browse the collection and tap the heart icon on any bottle to
                  add it to your wishlist. We&apos;ll keep it here until
                  you&apos;re ready to decide.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/wines/red')}
                className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 border border-[#811331] text-[#811331] overflow-hidden transition-all duration-300 ease-out hover:text-white mt-4"
              >
                <span className="relative z-10 text-[11px] uppercase tracking-[0.35em] font-bold font-sans">
                  Explore Wines
                </span>
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.25,1)]"
                  style={{ backgroundColor: '#811331' }}
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;


