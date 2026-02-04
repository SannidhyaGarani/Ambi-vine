import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, ArrowUp, ChevronRight } from 'lucide-react';

const Footer = () => {
  const brandColor = '#811331';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Heritage',
      links: [
        { name: 'Our Story', href: '/our-story' },
        { name: 'Our People', href: '/our-people' },
        { name: 'Our Vineyards', href: '/our-vineyards' },
        { name: 'Sustainability', href: '/sustainability' },
      ],
    },
    {
      title: 'Collection',
      links: [
        { name: 'Red Wine', href: '/wines/red' },
        { name: 'White Wine', href: '/wines/white' },
        { name: 'Rosé Wine', href: '/wines/rose' },
        { name: 'Rare Vintages', href: '/vintages' },
      ],
    },
    {
      title: 'The Estate',
      links: [
        { name: 'Book a Tour', href: '/book-tour' },
        { name: 'Private Tastings', href: '/tastings' },
        { name: 'The Club', href: '/club' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative py-24 pb-12 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: brandColor }}>
      {/* Subtle Grain Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.25em] text-white leading-none">
                AMBI VINES
              </h2>
              <span className="text-[10px] tracking-[0.5em] mt-4 font-medium uppercase text-white/60">
                Est. MCMXXIV • Napa Valley
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs text-white/80 font-sans italic">
              "Crafting the intersection of ancestral tradition and modern elegance in every bottle."
            </p>
            <div className="flex space-x-6 pt-2">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="text-white/60 hover:text-white transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon size={20} strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-8">
                <h4 className="text-white uppercase text-[10px] tracking-[0.3em] font-bold border-b border-white/20 pb-4">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 flex items-center group relative w-fit"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section (White Theme) */}
          <div className="lg:col-span-3 bg-white/10 p-10 border border-white/20 rounded-sm backdrop-blur-md">
            <h4 className="text-white font-serif text-xl italic mb-3 text-center">The Private List</h4>
            <p className="text-[10px] leading-relaxed text-white/70 mb-8 text-center uppercase tracking-[0.2em]">
              Join for exclusive vintages
            </p>
            <form className="space-y-6">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-[10px] tracking-widest focus:outline-none transition-all text-white placeholder:text-white/40"
                />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white group-focus-within:w-full transition-all duration-500"></div>
              </div>
              <button 
                className="w-full py-4 text-[10px] tracking-[0.4em] uppercase font-bold bg-white transition-all duration-500 hover:bg-stone-100 hover:shadow-xl"
                style={{ color: brandColor }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[9px] tracking-[0.3em] font-medium text-white/50">
            <p>© 2026 AMBI VINES ESTATE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="mt-12 md:mt-0 flex flex-col items-center gap-4 group"
          >
            <div className="relative flex items-center justify-center w-12 h-12 border border-white/20 rounded-full transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white"></div>
              <ArrowUp 
                size={18} 
                strokeWidth={1.5} 
                className="relative z-10 transition-colors duration-500 text-white group-hover:text-[#811331]" 
              />
            </div>
            <span className="text-[8px] uppercase tracking-[0.6em] text-white/50 group-hover:text-white transition-colors">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;