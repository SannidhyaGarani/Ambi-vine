import React, { useEffect, useRef, useState } from 'react';

const TeamMemberCard = ({ name, role, description, image, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-stone-200">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
      </div>
      <div className="space-y-2 px-1">
        <h3 className="text-2xl font-serif italic text-stone-900 leading-tight">{name}</h3>
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">{role}</p>
        <p className="pt-3 text-sm text-stone-500 font-light leading-relaxed border-t border-stone-100 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const OurPeople = () => {
  const team = [
    {
      name: "Motilal Patidar",
      role: "Founder & Visionary",
      description: "With a deep reverence for the land, Motilal guides the estate with a focus on long-term sustainability and world-class viticulture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Elena Rossi",
      role: "Chief Winemaker",
      description: "Elena brings a decade of international expertise, blending traditional European techniques with the unique terroir of Central India.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Viticulture",
      description: "Our vineyard's health is Rajesh's life work. He ensures every vine is nurtured to produce the high-consistency grapes Ambi is known for.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900 pb-24">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section
        className="relative pt-40 pb-24 px-6 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/55"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-4 block font-bold">
            The Hands Behind the Harvest
          </span>

          <h1 className="text-5xl md:text-7xl font-serif mb-8 italic text-white">
            Our People
          </h1>

          <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-white/70">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">Our People</span>
          </nav>
        </div>
      </section>

      {/* 2. TEAM GRID */}
      <section className="px-6 max-w-7xl mx-auto mt-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {team.map((person, index) => (
            <TeamMemberCard 
              key={person.name}
              {...person}
              delay={index * 150}
            />
          ))}
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="mt-30 bg-stone-900 text-stone-100 py-32 px-6 overflow-hidden relative">
        {/* Subtle Grain Texture Placeholder */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold mb-8 block">
            Our Culture
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-12">
            "Craftsmanship is an act <br className="hidden md:block" /> of patience and integrity."
          </h2>
          <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-stone-800">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-stone-300">Unity</h4>
              <p className="text-sm text-stone-500 font-light leading-relaxed">We work as a single ecosystem, where every role is vital to the final pour.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-stone-300">Stewardship</h4>
              <p className="text-sm text-stone-500 font-light leading-relaxed">We are temporary guardians of this land, committed to its health for future eras.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-stone-300">Excellence</h4>
              <p className="text-sm text-stone-500 font-light leading-relaxed">Good is never enough. We chase the world-class standard in every bottle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global CSS for subtle animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OurPeople;