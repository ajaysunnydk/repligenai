import { motion } from "framer-motion";
import { Server, Shield, Layers, Activity } from "lucide-react";

const features = [
  {
    icon: <Server className="w-8 h-8 text-brand-400" />,
    title: "Product-Led Engineering Environment",
    desc: "We engineer long-horizon SaaS platforms designed for durability, security, and scale, rather than short-term projects."
  },
  {
    icon: <Layers className="w-8 h-8 text-brand-400" />,
    title: "Architecture-First Technical Culture",
    desc: "Our ecosystem operates through structured engineering governance and architecture-first principles to ensure operational maturity."
  },
  {
    icon: <Activity className="w-8 h-8 text-brand-400" />,
    title: "Long-Term Platform Impact",
    desc: "Our professionals build systems designed to evolve over years, not weeks. The work contributes to enduring infrastructure."
  },
  {
    icon: <Shield className="w-8 h-8 text-brand-400" />,
    title: "Ownership & Accountability",
    desc: "Clean, modular, and secure systems are baseline expectations. We expect ownership, responsibility, and follow-through at every level."
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-32 bg-enterprise-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
              The RepligenAI Standard
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              A Culture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Technical Rigor</span> and Architectural Integrity
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-400 leading-relaxed">
              At RepligenAI, we are not building short-term projects. We are engineering long-horizon SaaS platforms designed for durability, security, scale, and enterprise evolution. We seek professionals who are energized by structural thinking, disciplined execution, and meaningful long-term impact.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="glass-dark p-10 hover:border-brand-500/30 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-lg bg-white/5 inline-block border border-white/5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
