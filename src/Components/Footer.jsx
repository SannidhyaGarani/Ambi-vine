import React from 'react';
import { Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Collection',
      links: ['The Cellar', 'Private Reserve', 'Gift Sets', 'Wine Club'],
    },
    {
      title: 'Estate',
      links: ['Our Story', 'Vineyards', 'Sustainability', 'Visit Us'],
    },
  ];

  return (
    <footer className="bg-[#0c0a09] text-stone-500 py-15 md:pt-32 px-6 md:px-12 border-t border-stone-900/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Compact & Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16 md:mb-24">
          
          {/* Newsletter Section - 5 Columns */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-stone-100 font-serif text-2xl md:text-3xl italic mb-4 md:mb-6">
                Join the Private List
              </h3>
              <p className="text-xs md:text-sm font-light leading-relaxed max-w-sm mb-8 text-stone-400 font-sans">
                Receive exclusive access to vintage releases and invitation-only events at the estate.
              </p>
              <form className="relative flex items-center group max-w-sm">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-stone-800 py-4 text-xs focus:outline-none focus:border-amber-900/50 transition-colors text-stone-200 placeholder:text-stone-600"
                />
                <button className="absolute right-0 flex items-center gap-2 group">
                  <span className="uppercase text-[9px] tracking-[0.3em] font-bold text-stone-100 group-hover:text-amber-200 transition-colors font-sans">
                    Join
                  </span>
                  <div className="w-6 h-[0.5px] bg-amber-200/50 group-hover:w-10 transition-all duration-500" />
                </button>
              </form>
            </div>
            
            {/* Social Icons for Desktop */}
            <div className="hidden md:flex space-x-6 mt-12 text-stone-600">
              <Instagram size={16} className="hover:text-amber-200 cursor-pointer transition-colors" />
              <Facebook size={16} className="hover:text-amber-200 cursor-pointer transition-colors" />
              <Twitter size={16} className="hover:text-amber-200 cursor-pointer transition-colors" />
              <Mail size={16} className="hover:text-amber-200 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Brand Mark - Center 2 Columns */}
          <div className="md:col-span-2 flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-stone-900/50 py-12 md:py-0">
             <h1 className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-stone-100 mb-1">
               AMBI VINES
             </h1>
             <div className="w-8 h-[1px] bg-amber-900/40 mb-2" />
             <span className="text-[8px] tracking-[0.4em] uppercase opacity-40 font-sans">
               MCMXXIV
             </span>
          </div>

          {/* Links Section - 5 Columns */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8 md:pl-16">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-stone-100 uppercase text-[10px] tracking-[0.4em] font-bold mb-6 font-sans">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[11px] uppercase tracking-widest font-light hover:text-amber-100 transition-colors duration-300 font-sans">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 md:pt-16 border-t border-stone-900/50">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[9px] tracking-[0.2em] uppercase opacity-40 font-sans">
            <p>© 2026 AMBI VINES Estate.</p>
            <div className="hidden md:block w-px h-3 bg-stone-800" />
            <div className="flex gap-6">
              <a href="#" className="hover:text-stone-100 transition-colors">Privacy</a>
              <a href="#" className="hover:text-stone-100 transition-colors">Terms</a>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="mt-8 md:mt-0 group flex items-center gap-4 text-stone-100 transition-all"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity font-sans">Back to top</span>
            <div className="p-3 border border-stone-800 rounded-full group-hover:border-amber-900/50 transition-colors">
              <ArrowUp size={14} strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;