import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Plus, Minus, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const navigate = useNavigate();
  const { count } = useWishlist();

  /* ================= Scroll Effect ================= */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ================= Lock Background Scroll ================= */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [mobileMenuOpen]);

  /* ================= Navigation Data ================= */
  const navLinks = {
    left: [
      { name: 'Book a Tour', href: '/book-tour' },
      { name: 'Stores', href: '/stores' },
      {
        name: 'About Us',
        subLinks: [
          { name: 'Our Story', href: '/our-story' },
          { name: 'Our People', href: '/our-people' },
          { name: 'Our Vineyards', href: '/our-vineyards' },
        ],
      },
    ],
    right: [
      {
        name: 'Our Wines',
        subLinks: [
          { name: 'Red Wine', href: '/wines/red' },
          { name: 'White Wine', href: '/wines/white' },
          { name: 'Rosé Wine', href: '/wines/rose' },
          { name: 'Beer', href: '/wines/beer' },
        ],
      },
      { name: 'Open Your Store', href: '/partner' },
    ],
  };

  /* ================= Desktop Nav Item ================= */
  const NavItem = ({ link }) => (
    <div className="relative group py-2">
      <Link
        to={link.href || '#'}
        className={`text-[11px] uppercase tracking-[0.2em] font-serif flex items-center gap-1 transition-colors ${
          isScrolled ? 'text-stone-800' : 'text-white'
        }`}
      >
        {link.name}
        {link.subLinks && (
          <ChevronDown
            size={10}
            className="opacity-40 transition-transform group-hover:rotate-180"
          />
        )}
      </Link>

      {link.subLinks && (
        <div className="absolute top-full left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px]">
          <div className="bg-white shadow-2xl py-6 border-t-2 border-stone-800">
            {link.subLinks.map((sub) => (
              <Link
                key={sub.name}
                to={sub.href}
                className="block px-8 py-2.5 text-[10px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition"
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
    <>
      {/* ================= Header ================= */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-md'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Desktop Left */}
          <div className="hidden lg:flex flex-1 gap-8">
            {navLinks.left.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex-1">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={isScrolled ? 'text-stone-800' : 'text-white'}
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>

          {/* Logo */}
          <div className="text-center flex-shrink-0">
            <Link to="/">
              <h1
                className={`text-xl md:text-3xl font-serif tracking-[0.2em] ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                AMBI VINES
                <span className="block text-[7px] tracking-[0.6em] mt-1 italic uppercase font-sans">
                  Estate
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
            {navLinks.right.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </div>

          {/* Wishlist (extreme right) */}
          <div className="hidden lg:flex items-center ml-6">
            <button
              type="button"
              onClick={() => navigate('/wishlist')}
              className={`relative inline-flex items-center justify-center w-8 h-8 rounded-full border transition ${
                isScrolled
                  ? 'border-stone-200 text-stone-800 hover:bg-stone-100'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Heart
                size={14}
                className={count > 0 ? 'fill-[#811331] text-[#811331]' : ''}
              />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] rounded-full bg-[#811331] text-[9px] text-white flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Spacer */}
          <div className="lg:hidden flex-1" />
        </div>
      </nav>

      {/* ================= Mobile Sidebar ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-stone-50 transform transition-transform duration-700 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ height: '100dvh' }}
      >
        <div className="h-full flex flex-col p-8 overflow-y-auto overscroll-contain">

          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">
              Navigation
            </span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={28} strokeWidth={1} />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="space-y-6">
            {[...navLinks.left, ...navLinks.right, { name: 'Wishlist', href: '/wishlist' }].map((link) => (
              <div key={link.name} className="border-b border-stone-200 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    link.subLinks &&
                    setExpandedSection(
                      expandedSection === link.name ? null : link.name
                    )
                  }
                >
                  <Link
                    to={link.subLinks ? '#' : link.href}
                    className="text-2xl font-serif text-stone-900"
                    onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {link.subLinks && (
                    expandedSection === link.name ? (
                      <Minus size={20} className="text-stone-500" />
                    ) : (
                      <Plus size={20} className="text-stone-500" />
                    )
                  )}
                </div>

                {link.subLinks && expandedSection === link.name && (
                  <div className="mt-4 pl-4 space-y-4 animate-in fade-in slide-in-from-top-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block text-sm uppercase tracking-widest text-stone-500"
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

          {/* Sidebar Footer */}
          <div className="mt-auto pt-10 border-t border-stone-200">
            <p className="text-[9px] tracking-widest uppercase text-stone-400">
              AMBI VINES Estate © 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
