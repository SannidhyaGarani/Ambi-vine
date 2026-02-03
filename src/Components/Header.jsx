import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown, Plus, Minus } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    left: [
      { name: 'Book a Tour', href: '/book-tour' },
      { name: 'Stores', href: '/stores' },
    ],
    right: [
      { 
        name: 'About Us', 
        href: '#',
        subLinks: [
          { name: 'Our Story', href: '/our-story' },
          { name: 'Our People', href: '/our-people' },
          { name: 'Our Vineyards', href: '/our-vineyards' },
        ]
      },
      { 
        name: 'Our Wines', 
        href: '#',
        subLinks: [
          { name: 'Red Wine', href: '/wines/red' },
          { name: 'White Wine', href: '/wines/white' },
          { name: 'Rosé Wine', href: '/wines/rose' },
          { name: 'Beer', href: '/wines/beer' },
        ]
      },
      { name: 'Open Your Store', href: '/partner' },
    ]
  };

  const NavItem = ({ link }) => (
    <div className="relative group py-2">
      <Link
        to={link.href}
        className={`text-[11px] uppercase tracking-[0.2em] font-serif transition-colors duration-300 flex items-center gap-1.5 ${
          isScrolled ? 'text-stone-800' : 'text-white'
        }`}
      >
        {link.name}
        {link.subLinks && <ChevronDown size={10} className="opacity-40 group-hover:rotate-180 transition-transform" />}
      </Link>
      
      {link.subLinks && (
        <div className="absolute top-full left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px]">
          <div className="bg-white shadow-2xl py-6 flex flex-col border-t-2 border-stone-800">
            {link.subLinks.map((sub) => (
              <Link
                key={sub.name}
                to={sub.href}
                className="px-8 py-2.5 text-[10px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-md' 
          : 'bg-transparent py-8'
      }`}
    >
      {/* Previous Width Constraint: max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Desktop Left */}
        <div className="hidden lg:flex items-center space-x-10 flex-1">
          {navLinks.left.map((link) => (
            <NavItem key={link.name} link={link} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex-1">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={isScrolled ? 'text-stone-800' : 'text-white'}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Central Logo */}
        <div className="flex-shrink-0 text-center">
          <Link to="/" className="block">
            <h1 className={`text-xl md:text-3xl font-serif tracking-[0.2em] transition-all duration-500 ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}>
              AMBI VINES <span className="block text-[7px] tracking-[0.6em] mt-1 italic font-sans uppercase">Estate</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center justify-end space-x-10 flex-1">
          {navLinks.right.map((link) => (
            <NavItem key={link.name} link={link} />
          ))}
         
        </div>

        {/* Mobile Shopping Bag */}
        <div className="lg:hidden flex-1 flex justify-end">
         
        </div>
      </div>

      {/* Improved Responsive Mobile Overlay */}
      <div className={`fixed inset-0 bg-stone-50 transition-transform duration-700 ease-in-out transform z-[60] ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-stone-900">
              <X size={28} strokeWidth={1} />
            </button>
          </div>

          <div className="flex flex-col space-y-6 overflow-y-auto">
            {[...navLinks.left, ...navLinks.right].map((link) => (
              <div key={link.name} className="border-b border-stone-200 pb-4">
                <div 
                  className="flex justify-between items-center"
                  onClick={() => link.subLinks && setExpandedSection(expandedSection === link.name ? null : link.name)}
                >
                  <Link
                    to={link.subLinks ? '#' : link.href}
                    className="text-2xl font-serif text-stone-900 tracking-tight"
                    onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <button className="text-stone-400">
                      {expandedSection === link.name ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                  )}
                </div>
                
                {link.subLinks && expandedSection === link.name && (
                  <div className="mt-4 flex flex-col space-y-4 pl-4 animate-in fade-in slide-in-from-top-2">
                    {link.subLinks.map(sub => (
                      <Link 
                        key={sub.name} 
                        to={sub.href} 
                        className="text-stone-500 text-sm uppercase tracking-widest font-light"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-stone-200">
             <p className="text-[9px] tracking-widest text-stone-400 uppercase">AMBI VINES Estate © 2026</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;