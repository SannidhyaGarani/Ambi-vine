import React, { useRef, useState, useEffect } from 'react';
import { motion as Motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const images = [
  {
    id: 1,
    subtitle: "The Terroir",
    title: "Sun-Kissed Slopes",
    description: "Our vines thrive in volcanic soil, nurtured by the unique microclimate of the Sahyadri range.",
    src: "https://plus.unsplash.com/premium_photo-1680086880881-442721afe30c?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    subtitle: "The Aging",
    title: "Patient Perfection",
    description: "Time is our most precious ingredient, whispered through French oak barrels in our cool cellars.",
    src: "https://images.unsplash.com/photo-1621462647729-e8543be91c0e?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    subtitle: "The Experience",
    title: "Soul in a Bottle",
    description: "Every pour tells a story of heritage, a symphony of taste that defines the modern Indian spirit.",
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=1200",
  }
];

const StorySection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [index, setIndex] = useState(0);
  const activeIndex = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 2]);

  useEffect(() => {
    return activeIndex.onChange((latest) => {
      setIndex(Math.round(latest));
    });
  }, [activeIndex]);

  const y2 = useTransform(scrollYProgress, [0.3, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.9], ["100%", "0%"]);
  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[400vh] bg-[#F4F1EE]">
      <div className="sticky top-0 h-screen w-full flex flex-col py-12 md:py-20 overflow-visible">

        {/* Progress Bar */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-stone-300 hidden md:block">
          <Motion.div
            style={{ scaleY: scrollYProgress }}
            className="w-full bg-stone-800 origin-top h-full"
          />
        </div>

        {/* TEXT AREA */}
        <div className="flex-none w-full max-w-4xl mx-auto px-6 text-center z-40 mb-10">
          <AnimatePresence mode="wait">
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-3"
            >
              {/* <span className="block text-[10px] tracking-[0.6em] uppercase text-stone-500 font-medium">
                {images[index].subtitle}
              </span> */}

              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 lowercase italic">
                {images[index].title}
              </h2>

              <p className="text-stone-600 font-light max-w-md mx-auto text-xs md:text-sm leading-relaxed">
                {images[index].description}
              </p>
            </Motion.div>
          </AnimatePresence>
        </div>

        {/* IMAGE AREA – FIXED HEIGHT */}
        <div className="flex-1 relative w-full max-w-5xl mx-auto px-4 flex items-center justify-center overflow-visible">
          <div className="relative w-full h-[70vh]">
            
            {/* Base Layer */}
            <Motion.div style={{ scale: scaleBackground }} className="absolute inset-0">
              <div className="w-full h-full rounded-sm overflow-hidden shadow-xl">
                <img
                  src={images[0].src}
                  className="w-full h-full object-cover"
                  alt="Layer 1"
                />
              </div>
            </Motion.div>

            {/* Layer 2 */}
            <Motion.div style={{ y: y2 }} className="absolute inset-0 z-10">
              <div className="w-full h-full rounded-sm overflow-hidden shadow-2xl border-t border-white/20">
                <img
                  src={images[1].src}
                  className="w-full h-full object-cover"
                  alt="Layer 2"
                />
              </div>
            </Motion.div>

            {/* Layer 3 */}
            <Motion.div style={{ y: y3 }} className="absolute inset-0 z-20">
              <div className="w-full h-full rounded-sm overflow-hidden shadow-2xl border-t border-white/20">
                <img
                  src={images[2].src}
                  className="w-full h-full object-cover"
                  alt="Layer 3"
                />
              </div>
            </Motion.div>

          </div>
        </div>

        {/* ACTION AREA */}
        

      </div>
    </section>
  );
};

export default StorySection;
