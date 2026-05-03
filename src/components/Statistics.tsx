import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteStats } from "../config/siteStats";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1800;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-lg"
    >
      {count}
      <span className="text-brand-400">{suffix}</span>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-32 relative bg-enterprise-darker border-t border-white/5 overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-600/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
            Track Record
          </h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Measurable Results</span>
          </h2>
        </motion.div>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Our track record reflects our commitment to excellence, structural integrity, and long-term partnerships with global enterprises.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-12 lg:gap-24 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          {siteStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center relative z-10"
            >
              <div className="w-48 h-48 rounded-full border border-white/5 bg-enterprise-darker/50 backdrop-blur-md flex flex-col items-center justify-center relative group">
                <div className="absolute inset-0 rounded-full border border-brand-500/20 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <p className="mt-8 text-slate-300 text-sm tracking-widest uppercase font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
