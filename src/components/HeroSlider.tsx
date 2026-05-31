import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSliderProps {
  onNavigate: (page: string) => void;
}

import slide1 from '../assets/videos/slide1.mp4';
import slide2 from '../assets/videos/slide2.mp4';
import slide3 from '../assets/videos/slide3.mp4';

const slides = [
  {
    video: slide1,
    title: "Empowering Your Business with AI-Driven Solutions",
    subtitle: "Accelerate your business with cutting-edge artificial intelligence and software innovations."
  },
  {
    video: slide2,
    title: "Intelligent Systems Integration",
    subtitle: "Seamlessly integrate intelligent systems to optimize operations, enhance customer experiences, and drive sustainable growth."
  },
  {
    video: slide3,
    title: "Tailored Technology Capabilities",
    subtitle: "We provide the right talent and technology capabilities needed to succeed in today’s competitive landscape."
  }
];

export default function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-enterprise-darker">

      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Video */}
          <video
            src={slides[current].video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Overlays for dark tech aesthetic */}
          <div className="absolute inset-0 bg-enterprise-darker/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-darker via-enterprise-darker/80 to-transparent" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-6 w-full mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-6 text-sm font-semibold flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-400"></span>
                Innovation & Excellence
              </h4>

              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white mb-6 drop-shadow-lg">
                {slides[current].title}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl border-l-2 border-brand-500/30 pl-6">
                {slides[current].subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate("services")}
                  className="bg-brand-500 hover:bg-brand-400 text-enterprise-darker px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
                >
                  Explore Services
                </button>

                <button
                  onClick={() => onNavigate("about")}
                  className="glass hover:bg-white/10 px-8 py-4 text-sm font-bold text-white tracking-wide transition-all duration-300"
                >
                  About Us
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 md:left-1/2 md:-translate-x-1/2 flex items-center gap-6 z-30 max-w-7xl mx-auto">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="group relative py-4"
            >
              <div className={`h-1 transition-all duration-500 ${
                index === current 
                  ? "w-16 bg-brand-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]" 
                  : "w-8 bg-white/20 group-hover:bg-white/40"
              }`} />
            </button>
          ))}
        </div>
        <div className="text-slate-400 font-mono text-sm">
          0{current + 1} <span className="text-slate-600 mx-2">/</span> 0{slides.length}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-6 md:right-12 z-30 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-brand-400 uppercase tracking-widest font-mono" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
