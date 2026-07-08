import { motion } from "framer-motion";
import { ArrowRight, ScanSearch, MessageSquareCode, Radar, LayoutDashboard } from "lucide-react";

interface ProductsShowcaseProps {
  onNavigate: (page: string) => void;
}

const products = [
  {
    icon: ScanSearch,
    name: "TalentLens",
    tagline: "AI-powered candidate screening and matching — ranked shortlists with explainable scores in minutes.",
    status: "Private Beta",
    statusColor: "bg-brand-500/15 text-brand-300 border-brand-500/30",
  },
  {
    icon: MessageSquareCode,
    name: "QueryPilot",
    tagline: "Ask your data questions in plain English and get validated SQL, charts, and dashboards back.",
    status: "In Development",
    statusColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    icon: Radar,
    name: "PipeWatch",
    tagline: "Pipeline observability that catches schema drift and data anomalies before they hit your dashboards.",
    status: "In Development",
    statusColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  {
    icon: LayoutDashboard,
    name: "BenchBoard",
    tagline: "Bench, placement, and utilization management for staffing firms — the tool we run our own business on.",
    status: "Internal — Productizing",
    statusColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
];

export default function ProductsShowcase({ onNavigate }: ProductsShowcaseProps) {
  return (
    <section className="py-32 bg-enterprise-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
              RepligenAI Labs
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Products We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Building In-House</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              The same engineers, data scientists, and data engineers we place with clients
              ship real products internally. Proof of craft, not just promises.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() => onNavigate("products")}
            className="group flex items-center gap-3 text-brand-400 font-bold tracking-wide uppercase text-sm hover:text-brand-300 transition-colors shrink-0"
          >
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              onClick={() => onNavigate("products")}
              className="glass-dark p-10 hover:border-brand-500/30 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-lg bg-white/5 inline-block border border-white/5 group-hover:border-brand-500/30 transition-colors">
                    <product.icon className="w-8 h-8 text-brand-400" />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-brand-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {product.tagline}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
