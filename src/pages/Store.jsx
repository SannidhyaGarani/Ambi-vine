import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaUserTie, FaChevronRight } from "react-icons/fa";

const outletData = [
  { id: 1, city: "Ratlam", name: "Ambi The Wine Shop", address: "Jhabua Road, Village & Post – Titari, Ratlam (M.P)", type: "Company Outlet", manager: "Jitendra Patidar", phone: "90090 77255" },
  { id: 2, city: "Ratlam", name: "Ambi The Wine Shop", address: "Shop No. 06, RIAN MFC Building. Station Road, Ratlam (M.P.)", type: "Company Outlet", manager: "Ghanshyam Patidar", phone: "9753677455" },
  { id: 3, city: "Indore", name: "Ambi The Wine Shop", address: "Shop No. UG – 01, Royal Glory Bldg, Opp. Hotel Sayaji, Sayaji Sqare, Scheme No. 54, Vijay Nagar, Indore (M.P.)", type: "Company Outlet", manager: "Vinay Bangar", phone: "77720 10555" },
  { id: 4, city: "Indore", name: "Ambi The Wine Shop", address: "B- 3 Sona Palace Building, Baikunthdham Colony, Khajrana Road, Indore", type: "Franchisee Outlet", manager: "Vikas Patidar", phone: "98275 70060" },
  { id: 5, city: "Indore", name: "Ambi The Wine Shop", address: "Schm No 94, Ring Road, Indore (M.P.)", type: "Franchisee Outlet", manager: "Jitendra Patidar", phone: "96300 92244" },
  { id: 10, city: "Bhopal", name: "Ambi The Wine Shop", address: "7 No. Stop, B.D.A. Complex, Near Sagar Gaire Rest. Shivaji Nagar, Bhopal (M.P.)", type: "Franchisee Outlet", manager: "Swadeep Singh Bais", phone: "97133 46940" },
  { id: 14, city: "Ujjain", name: "Ambi The Wine Shop", address: "A/9, Divine Valley, Nr. ICICI Bank, Dewas Road, Ujjain (M.P.)", type: "Franchisee Outlet", manager: "Nilesh Parmar", phone: "98260 18165" },
  { id: 18, city: "Gwalior", name: "Ambi The Wine Shop", address: "Shop No. 68, Railway Station, Badaria, Race Course Road, Gwalior (M.P.)", type: "Franchisee Outlet", manager: "Amit Nigam", phone: "98260 14171" },
];

const cities = ["All", "Ratlam", "Indore", "Bhopal", "Ujjain", "Gwalior"];

const OutletPage = () => {
  const [activeCity, setActiveCity] = useState("All");

  const filteredOutlets = activeCity === "All" 
    ? outletData 
    : outletData.filter(item => item.city === activeCity);

  return (
    <div className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900">
      
      {/* 1. HERO SECTION (Light & Airy) */}
     <section
  className="relative pt-40 pb-24 px-6 text-center border-b border-stone-900/20 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-stone-900/55"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto">
    <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-4 block font-bold">
      Find Our Vintages
    </span>

    <h1 className="text-5xl md:text-7xl font-serif mb-8 italic text-white">
      Store Locator
    </h1>

    <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-white/70">
      <a
        href="/"
        className="hover:text-white transition-colors"
      >
        Home
      </a>
      <span className="opacity-40">/</span>
      <span className="text-white font-bold">Outlets</span>
    </nav>
  </div>
</section>


      {/* 2. CITY FILTER (Minimal Horizontal) */}
      <section className="sticky top-[70px] z-40 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex items-center justify-center py-6 space-x-8 md:space-x-12 min-w-max">
            {cities.map(city => (
              <button 
                key={city} 
                onClick={() => setActiveCity(city)}
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative pb-1
                  ${activeCity === city ? "text-stone-900" : "text-stone-400 hover:text-stone-600"}`}
              >
                {city}
                {activeCity === city && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUTLET GRID */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredOutlets.map((shop) => (
              <div 
                key={shop.id}
                className="group flex flex-col bg-white border border-stone-200 p-8 rounded-[1.5rem] hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500"
              >
                {/* Header: Type & Icon */}
                <div className="flex justify-between items-start mb-8">
                  <span className={`text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border ${
                    shop.type.includes('Company') 
                    ? 'border-amber-200 bg-amber-50 text-amber-800' 
                    : 'border-stone-200 bg-stone-50 text-stone-600'
                  }`}>
                    {shop.type}
                  </span>
                  <FaMapMarkerAlt className="text-stone-300 group-hover:text-stone-900 transition-colors duration-500" />
                </div>
                
                {/* Body: Text Info */}
                <div className="flex-grow">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2 font-medium">
                    {shop.city}
                  </span>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 leading-tight group-hover:text-stone-800 transition-colors">
                    {shop.name}
                  </h3>
                  <p className="text-sm text-stone-500 font-light leading-relaxed mb-8">
                    {shop.address}
                  </p>
                </div>

                {/* Footer: Manager & CTA */}
                <div className="pt-8 border-t border-stone-100 mt-auto">
                  <div className="flex flex-col space-y-3 mb-8">
                    <div className="flex items-center text-xs text-stone-600">
                      <FaUserTie className="mr-3 text-stone-300" size={12} />
                      <span className="tracking-wide font-medium">{shop.manager}</span>
                    </div>
                    <div className="flex items-center text-xs text-stone-800">
                      <FaPhoneAlt className="mr-3 text-stone-400" size={12} />
                      <span className="font-bold tracking-widest">{shop.phone}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center justify-between w-full group/btn text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 pt-2">
                    Get Directions
                    <span className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover/btn:bg-stone-900 group-hover/btn:text-white transition-all duration-300">
                      <FaChevronRight size={10} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredOutlets.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif italic text-stone-400 text-xl">Coming soon to this location...</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default OutletPage;