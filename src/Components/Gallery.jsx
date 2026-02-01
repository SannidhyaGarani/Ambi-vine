import React from 'react';
import { Play } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Golden Hour Harvest',
      aspect: 'aspect-[3/4]',
      url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      type: 'video',
      title: 'The Art of Pouring',
      aspect: 'aspect-square',
      url: 'https://images.unsplash.com/photo-1510850478920-53906660233e?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      type: 'image',
      title: 'Cellar Traditions',
      aspect: 'aspect-[9/16]',
      url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      type: 'image',
      title: 'Spring Bloom',
      aspect: 'aspect-[4/3]',
      url: 'https://images.unsplash.com/photo-1594460750222-29307c67b2fd?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      type: 'image',
      title: 'Estate Morning',
      aspect: 'aspect-square',
      url: 'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      type: 'video',
      title: 'Oak Maturation',
      aspect: 'aspect-[3/4]',
      url: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 7,
      type: 'image',
      title: 'The Collection',
      aspect: 'aspect-[2/3]',
      url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-0 md:pt-0 pb-24 md:pb-32 px-6 md:px-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-[10px] uppercase tracking-[0.6em] text-stone-400 block mb-4 font-sans">
          Visual Journal
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 italic">
          Life at AMBI VINES
        </h1>
      </div>

      {/* Masonry Grid Container */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-700 ease-out bg-stone-100"
            >
              {/* Image with Hover Zoom */}
              <div className={`${item.aspect} overflow-hidden`}>
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-colors duration-500 ease-in-out" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-between items-end">
                  <h3 className="text-white font-serif text-xl md:text-2xl lg:text-3xl tracking-wide">
                    {item.title}
                  </h3>
                  
                  {item.type === 'video' && (
                    <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/10">
                      <Play size={18} fill="white" className="text-white ml-1" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Subtle Image Vignette (Permanent) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Load More CTA */}
      <div className="text-center mt-16 md:mt-24">
        <button className="group relative py-4 px-12 overflow-hidden border border-stone-200 hover:border-stone-900 transition-colors duration-500">
          <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold text-stone-900 group-hover:text-white transition-colors duration-500 font-sans">
            Expand Archives
          </span>
          <div className="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </div>
    </main>
  );
};

export default Gallery;