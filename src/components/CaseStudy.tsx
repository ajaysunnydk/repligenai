import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="py-32 bg-enterprise-dark relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <p className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
            Enterprise Impact
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight text-white">
            Accelerating Digital Transformation for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Global Enterprise</span>
          </h2>

          <p className="mt-8 text-slate-400 leading-relaxed text-lg border-l-2 border-brand-500/30 pl-6">
            We partnered with a Fortune 500 organization to modernize their legacy systems and implement AI-driven analytics across operations, fundamentally changing how they scale and secure data.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">40<span className="text-brand-400">%</span></h3>
              <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                Efficiency Gain
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">3<span className="text-brand-400">x</span></h3>
              <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                Faster Deployment
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">99<span className="text-brand-400">.9%</span></h3>
              <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                System Uptime
              </p>
            </div>
          </div>

          <button className="mt-12 group flex items-center gap-3 text-brand-400 font-bold tracking-wide uppercase text-sm hover:text-brand-300 transition-colors">
            View Full Case Study
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-brand-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square bg-enterprise-dark">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1740&auto=format&fit=crop"
              alt="Case Study Dashboard"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-enterprise-darker via-transparent to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
