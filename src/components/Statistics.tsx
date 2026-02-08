import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteStats } from "../config/siteStats";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0); // reset when out of view
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
      className="text-5xl md:text-6xl font-bold text-white"
    >
      {count}
      {suffix}
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-28 bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold"
        >
          Delivering Measurable Results
        </motion.h2>

        <p className="mt-6 text-blue-200 max-w-3xl mx-auto">
          Our track record reflects our commitment to excellence,
          innovation, and long-term partnerships with global enterprises.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-12">

          {siteStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />

              <p className="mt-4 text-blue-300 text-sm tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
