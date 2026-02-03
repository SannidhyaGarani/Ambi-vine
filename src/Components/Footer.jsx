import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, ArrowUp, ChevronRight } from 'lucide-react';

const Footer = () => {
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
    <footer className="bg-[#0c0a09] text-stone-400 py-20 md:pt-32 pb-12 px-6 md:px-16 border-t border-stone-900">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section: Brand Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-serif tracking-[0.25em] text-stone-100 leading-none">
                AMBI VINES
              </h2>
              <span className="text-[10px] tracking-[0.5em] text-amber-900/60 mt-3 font-light uppercase">
                Est. MCMXXIV • Napa Valley
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs text-stone-500 font-sans italic">
              "Crafting the intersection of ancestral tradition and modern elegance in every bottle."
            </p>
            <div className="flex space-x-8 pt-4">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="hover:text-amber-200/70 transition-all duration-500 transform hover:-translate-y-1">
                  <Icon size={18} strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-8">
                <h4 className="text-stone-200 uppercase text-[10px] tracking-[0.3em] font-semibold border-b border-stone-900 pb-4">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        className="text-[12px] text-stone-500 hover:text-amber-100 transition-all duration-300 flex items-center group"
                      >
                        <ChevronRight size={10} className="mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 text-amber-900/50" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3 bg-stone-900/20 p-8 border border-stone-900/50 rounded-sm">
            <h4 className="text-stone-100 font-serif text-lg italic mb-4 text-center">The Private List</h4>
            <p className="text-[11px] leading-relaxed text-stone-500 mb-6 text-center uppercase tracking-widest">
              Exclusive releases & events
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-stone-800 py-3 text-[10px] tracking-widest focus:outline-none focus:border-amber-900/50 transition-colors text-stone-200 placeholder:text-stone-700"
              />
              <button className="w-full py-4 border border-stone-800 text-[9px] tracking-[0.4em] uppercase font-bold hover:bg-stone-100 hover:text-black transition-all duration-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-stone-900/80">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] tracking-[0.2em] font-light text-stone-600">
            <p>© 2026 AMBI VINES ESTATE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 uppercase">
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="mt-12 md:mt-0 flex flex-col items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-12 h-12 border border-stone-800 rounded-full group-hover:border-amber-900/50 transition-all duration-500">
              <ArrowUp size={16} strokeWidth={1} className="group-hover:-translate-y-1 transition-transform duration-500" />
            </div>
            <span className="text-[8px] uppercase tracking-[0.5em] text-stone-600 group-hover:text-stone-200 transition-colors">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;