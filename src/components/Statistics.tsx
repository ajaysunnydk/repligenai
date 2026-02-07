import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
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
    <div ref={ref} className="text-5xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-28 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          Delivering Measurable Results
        </motion.h2>

        <p className="mt-6 text-blue-100 max-w-3xl mx-auto">
          Our track record reflects our commitment to excellence, innovation,
          and long-term partnerships with businesses worldwide.
        </p>

        <div className="mt-16 grid md:grid-cols-4 gap-12">

          <div>
            <Counter value={12} suffix="+" />
            <p className="mt-4 text-blue-200 text-sm tracking-wide uppercase">
              Years Experience
            </p>
          </div>

          <div>
            <Counter value={250} suffix="+" />
            <p className="mt-4 text-blue-200 text-sm tracking-wide uppercase">
              Projects Delivered
            </p>
          </div>

          <div>
            <Counter value={98} suffix="%" />
            <p className="mt-4 text-blue-200 text-sm tracking-wide uppercase">
              Client Satisfaction
            </p>
          </div>

          <div>
            <Counter value={40} suffix="+" />
            <p className="mt-4 text-blue-200 text-sm tracking-wide uppercase">
              Enterprise Clients
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
