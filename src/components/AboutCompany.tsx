import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutCompany() {
  return (
    <section className="py-32 bg-enterprise-darker relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-1/2 h-full bg-brand-500/5 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-enterprise-dark">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1740&auto=format&fit=crop"
              alt="Architecture and Structure"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-enterprise-darker via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
            About RepligenAI
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight text-white">
            Building Enterprise Products with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Structural Integrity</span>
          </h2>

          <p className="mt-8 text-slate-400 leading-relaxed text-lg">
            At RepligenAI, we engineer long-horizon SaaS platforms designed for durability, security, scale, and enterprise evolution. Our foundation is built around technical rigor, architectural integrity, and accountable innovation.
          </p>

          <p className="mt-6 text-slate-400 leading-relaxed text-lg mb-10 border-l-2 border-brand-500/30 pl-6">
            We are a platform-building ecosystem where engineering, infrastructure, governance, and product strategy operate together within a unified enterprise framework.
          </p>

          <ul className="space-y-6 mb-12">
            {[
              "Enterprise Product Development with Long-Term Thinking",
              "Structured oversight ensuring enterprise integrity",
              "Architecting scalable digital ecosystems"
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-slate-300 font-medium"
              >
                <div className="w-8 h-8 rounded bg-brand-500/10 flex items-center justify-center shrink-0 border border-brand-500/20">
                  <div className="w-2 h-2 rounded-full bg-brand-400"></div>
                </div>
                {item}
              </motion.li>
            ))}
          </ul>

          <button className="group flex items-center gap-3 text-brand-400 font-bold tracking-wide uppercase text-sm hover:text-brand-300 transition-colors">
            Discover Our Foundation
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
