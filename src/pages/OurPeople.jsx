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
      className={`group transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: '#811331' }}>{role}</p>
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
      name: "Mr. Motilal Ji Patidar",
      role: "MD & CEO",
      description: "As the Managing Director and CEO, Mr. Motilal Ji Patidar leads the organization with a clear vision, strategic foresight, and a strong commitment to sustainable growth and excellence.",
      image: "img/1.jpeg"
    },
    {
      name: "Dr. Jitendra Patidar",
      role: "Director Production & Chief Winemaker",
      description: "Dr. Jitendra Patidar oversees production and winemaking, combining scientific expertise with innovative techniques to ensure consistent quality and world-class standards.",
      image: "img/2.jpeg"
    },
    {
      name: "Mr. Amrit Patidar",
      role: "Director Finance",
      description: "Mr. Amrit Patidar manages the financial strategy and operations, ensuring fiscal discipline, transparency, and long-term financial stability for the organization.",
      image: "img/3.jpeg"
    },
    {
      name: "Rajesh Patidar",
      role: "Director Marketing and Sales",
      description: "Rajesh Patidar drives brand growth and market expansion through strategic marketing and sales leadership, strengthening the company’s presence across domestic and global markets.",
      image: "img/4.jpeg"
    },
    {
      name: "Dr. Amit Nigam",
      role: "Manager – Events & International Sales",
      description: "Dr. Amit Nigam manages high-impact events and international sales initiatives, building strong global relationships and promoting the brand on international platforms.",
      image: "img/5.jpeg"
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
      <section className="bg-[#811331] text-white py-22 px-6 overflow-hidden relative mt-20">
        {/* Sophisticated Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* Radial Glow for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold mb-4 opacity-80">
              Our Culture
            </span>
            {/* Short Vertical Divider */}
            <div className="w-[1px] h-10 bg-white/30 mb-8" />
          </div>

          {/* Main Quote */}
          <h2 className="text-3xl md:text-6xl font-serif italic mb-20 leading-[1.2] text-stone-50">
            "Craftsmanship is an act <br className="hidden md:block" />
            of patience and integrity."
          </h2>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-16 pt-16 border-t border-white/20">
            <div className="group">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-white">
                Unity
              </h4>
              <p className="text-[13px] text-stone-200 font-light leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                We work as a single ecosystem, where every role is vital to the final pour.
              </p>
            </div>

            <div className="group relative">
              {/* Subtle Side Borders for Desktop */}
              <div className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-[1px] bg-white/10" />
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-white">
                Stewardship
              </h4>
              <p className="text-[13px] text-stone-200 font-light leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                We are temporary guardians of this land, committed to its health for future eras.
              </p>
              <div className="hidden md:block absolute right-[-2rem] top-0 bottom-0 w-[1px] bg-white/10" />
            </div>

            <div className="group">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-white">
                Excellence
              </h4>
              <p className="text-[13px] text-stone-200 font-light leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                Good is never enough. We chase the world-class standard in every bottle.
              </p>
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