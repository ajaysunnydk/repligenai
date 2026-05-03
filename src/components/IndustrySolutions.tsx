import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  { title: "Financial Services", bg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" },
  { title: "Healthcare & Life Sciences", bg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" },
  { title: "Retail & Consumer", bg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" },
  { title: "Manufacturing", bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
  { title: "Technology & SaaS", bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
  { title: "Telecom & Media", bg: "https://images.unsplash.com/photo-1517420704952-d9f39741e815?q=80&w=800&auto=format&fit=crop" },
  { title: "Energy & Utilities", bg: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop" },
  { title: "Transportation", bg: "https://images.unsplash.com/photo-1586528116311-ad8ed7c159ad?q=80&w=800&auto=format&fit=crop" }
];

export default function IndustrySolutions() {
  return (
    <section className="py-32 bg-enterprise-dark border-t border-white/5 relative">
      <div className="absolute left-0 top-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
              Global Relevance
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Industry Solutions <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Built for Scale</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="flex items-center gap-3 text-brand-400 font-bold tracking-wide uppercase text-sm hover:text-brand-300 transition-colors">
              View All Industries <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-[300px] overflow-hidden rounded-xl border border-white/10 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60"
                style={{ backgroundImage: `url(${item.bg})` }}
              ></div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-enterprise-darker via-enterprise-darker/60 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 border border-brand-500/30">
                  <ArrowRight size={18} className="text-brand-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
