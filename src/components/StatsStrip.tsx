import { motion } from "framer-motion";
import { Clock, BrainCircuit, Users, Building2 } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "48-Hour",
    label: "Candidate shortlists, not weeks of waiting",
  },
  {
    icon: BrainCircuit,
    value: "AI + Human",
    label: "AI-assisted screening, rigorously human-vetted",
  },
  {
    icon: Users,
    value: "7 Practices",
    label: "Software, AI/ML, Data, Databricks, and more",
  },
  {
    icon: Building2,
    value: "US-Based",
    label: "Serving American enterprises from Kansas",
  },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-enterprise-darker border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3"
          >
            <div className="flex items-center gap-3">
              <stat.icon size={20} className="text-brand-400" />
              <span className="text-3xl font-display font-bold text-white">{stat.value}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
