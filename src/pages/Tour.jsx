import React from "react";
import { FaWineGlassAlt, FaLeaf, FaWarehouse, FaUtensils, FaClock, FaMapMarkedAlt, FaChevronRight } from "react-icons/fa";

const TourPage = () => {
    return (
        <div className="bg-[#FCFBFA] min-h-screen text-stone-900 font-sans">

            {/* 1. TOUR HERO BREADCRUMB */}
            <section
  className="relative pt-40 pb-24 px-6 text-center bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=2000')",
  }}
>
  {/* Light Overlay */}
  <div className="absolute inset-0 bg-stone-900/55"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto">
    <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-4 block font-bold">
      Sensory Experience
    </span>

    <h1 className="text-5xl md:text-7xl font-serif mb-8 italic text-white">
      Vineyard Tour & Tasting
    </h1>

    <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-white/70">
      <a href="/" className="hover:text-white transition-colors">
        Home
      </a>
      <span className="opacity-40">/</span>
      <span className="text-white font-bold">Tours</span>
    </nav>
  </div>
</section>


            {/* 2. THE JOURNEY PHASES (Asymmetric Editorial Layout) */}
            <section className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* PHASE 1: THE VINES */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 relative">
                            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=2000" alt="Vineyard" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute -bottom-6 -left-6 text-[120px] font-serif italic text-stone-100 -z-10 leading-none">01</span>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-9">
                            <FaLeaf className="text-stone-300 mb-6 text-3xl" />
                            <h3 className="text-3xl md:text-4xl font-serif mb-6 italic">Vineyard & Orchard Tour</h3>
                            <p className="text-stone-500 font-light leading-relaxed mb-8">
                                Explore the lush terroir of Titari. Witness the careful handling of Red and White varietals and learn our sustainable farming practices.
                            </p>
                            <ul className="space-y-4 border-l border-stone-100 pl-6">
                                {['Wine vs Table varietals classification', 'Snapshot-ready grape bunches', 'In-depth orchard management'].map((item) => (
                                    <li key={item} className="text-xs uppercase tracking-widest text-stone-400 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-stone-300 rounded-full mr-4" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* PHASE 2: THE WINERY (Reversed) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4 order-2 lg:order-1 lg:col-start-1">
                            <FaWarehouse className="text-stone-300 mb-6 text-3xl" />
                            <h3 className="text-3xl md:text-4xl font-serif mb-6 italic">Vinification Art</h3>
                            <p className="text-stone-500 font-light leading-relaxed mb-8">
                                Enter the heart of our production. From the crushing unit to the fermentation tanks, follow the journey of transformation.
                            </p>
                            <ul className="space-y-4 border-l border-stone-100 pl-6">
                                {['Processing & Fermentation units', 'Filtering & Storing science', 'Bottling & Packaging'].map((item) => (
                                    <li key={item} className="text-xs uppercase tracking-widest text-stone-400 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-stone-300 rounded-full mr-4" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2 relative">
                            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2000" alt="Winery" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute -bottom-6 -right-6 text-[120px] font-serif italic text-stone-100 -z-10 leading-none">02</span>
                        </div>
                    </div>

                    {/* PHASE 3: THE TASTING */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 relative">
                            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000" alt="Wine Tasting" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute -bottom-6 -left-6 text-[120px] font-serif italic text-stone-100 -z-10 leading-none">03</span>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-9">
                            <FaWineGlassAlt className="text-stone-300 mb-6 text-3xl" />
                            <h3 className="text-3xl md:text-4xl font-serif mb-6 italic">The Tasting Lounge</h3>
                            <p className="text-stone-500 font-light leading-relaxed mb-8">
                                A 60-90 minute curated session set to soothing music. Taste 5 signature varietals guided by our professionals.
                            </p>
                            <ul className="space-y-4 border-l border-stone-100 pl-6">
                                {['5 Varietals complimentary tasting', 'Professional Food pairing', 'Personal Selection Guide'].map((item) => (
                                    <li key={item} className="text-xs uppercase tracking-widest text-stone-400 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-stone-300 rounded-full mr-4" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. RATES & LOGISTICS (Minimalist Cards) */}
            <section className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-[1.5rem] border border-stone-100">
                        <FaUtensils className="text-stone-400 mb-6" />
                        <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-4">Estate Dining</h4>
                        <div className="text-3xl font-serif mb-2 italic text-stone-900">₹1,250 <span className="text-xs uppercase tracking-widest font-sans font-bold text-stone-400">/ Person</span></div>
                        <p className="text-xs text-stone-400 tracking-wider">Student Rate: ₹1,100</p>
                    </div>

                    <div className="bg-stone-900 p-10 rounded-[1.5rem] text-white">
                        <FaClock className="text-stone-500 mb-6" />
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 text-stone-400">Daily Slots</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-xs uppercase tracking-widest">Morning</span>
                                <span className="text-xs font-bold">10:00 – 01:30</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-xs uppercase tracking-widest">Afternoon</span>
                                <span className="text-xs font-bold">03:30 – 07:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[1.5rem] border border-stone-100">
                        <FaMapMarkedAlt className="text-stone-400 mb-6" />
                        <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-4">Location</h4>
                        <p className="text-xs leading-relaxed text-stone-500 uppercase tracking-widest">NH-39, Jhabua Road, Village Titari, Ratlam (M.P.)</p>
                    </div>
                </div>
            </section>

            {/* 4. RESERVATION FORM (Boutique Concierge Style) */}
            <section className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto bg-[#FDFCFB] border border-stone-100 p-10 md:p-20 rounded-[3rem]">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-4">Reservation</span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900">Secure Your Visit</h2>
                    </div>

                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">First Name</label>
                                <input type="text" placeholder="John" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Last Name</label>
                                <input type="text" placeholder="Doe" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Mobile Number</label>
                                <input type="tel" placeholder="+91" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Group Type</label>
                            <div className="flex flex-wrap gap-4">
                                {['Family', 'Student', 'Business', 'Farmer', 'Social'].map(type => (
                                    <label key={type} className="group cursor-pointer">
                                        <input type="radio" name="groupType" className="hidden peer" />
                                        <span className="px-6 py-2 border border-stone-200 rounded-full text-[10px] uppercase tracking-widest peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all duration-300">
                                            {type}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="text-center pt-10">
                            <button className="group relative px-12 py-5 bg-stone-900 text-white overflow-hidden rounded-full">
                                <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold">Request Booking</span>
                                <div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default TourPage;