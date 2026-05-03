import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Layers, Network, Workflow, ShieldCheck } from "lucide-react";

export default function Platforms({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-32 pb-40">
        
        {/* HERO */}
        <section className="px-6 relative mb-32">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 pt-16">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase text-brand-400 tracking-[0.2em] mb-6 text-sm font-semibold flex justify-center items-center gap-2"
            >
              <Layers size={16} /> Base Infrastructure
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8"
            >
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Platforms</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 font-light leading-relaxed border-t border-white/10 pt-8 max-w-3xl mx-auto"
            >
              We don't just build applications; we build the foundational platforms that power them. Internal developer platforms, data streaming fabrics, and identity gateways that standardize operations across the enterprise.
            </motion.p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-32">
            
            {/* PLATFORM 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Workflow className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-3xl font-display font-semibold text-white mb-6">Internal Developer Platforms (IDP)</h3>
                <p className="text-slate-400 leading-relaxed font-light text-lg mb-6">
                  Accelerate engineering velocity by providing standardized, self-service infrastructure. We construct custom IDPs that abstract away operational complexity, allowing product teams to focus purely on business logic while enforcing global compliance and security policies automatically.
                </p>
                <ul className="space-y-3">
                  {["Automated environment provisioning", "Standardized CI/CD templates", "Unified observability and logging"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 relative aspect-[4/3] rounded-2xl border border-white/10 bg-enterprise-darker overflow-hidden flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1634&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-darker via-transparent to-transparent"></div>
              </motion.div>
            </div>

            {/* PLATFORM 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-enterprise-darker overflow-hidden flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1772&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-darker via-transparent to-transparent"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-3xl font-display font-semibold text-white mb-6">Data & Event Platforms</h3>
                <p className="text-slate-400 leading-relaxed font-light text-lg mb-6">
                  Transform organizational data flow with central nervous systems built on Kafka or modern event meshes. We design data platforms that guarantee exactly-once processing, high-throughput ingestion, and democratized data access for analytics and ML workloads.
                </p>
                <ul className="space-y-3">
                  {["Real-time stream processing architectures", "Decoupled microservice communication", "Centralized schema registries"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* PLATFORM 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-3xl font-display font-semibold text-white mb-6">Identity & Access Gateways</h3>
                <p className="text-slate-400 leading-relaxed font-light text-lg mb-6">
                  Secure your entire organizational perimeter with unified identity platforms. We implement Zero Trust architectures, API gateways with rate limiting, and centralized authentication brokers that seamlessly manage internal and external access controls.
                </p>
                <ul className="space-y-3">
                  {["Zero Trust Network Architecture (ZTNA)", "Centralized OAuth2 / OIDC brokering", "Unified API security and routing"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 relative aspect-[4/3] rounded-2xl border border-white/10 bg-enterprise-darker overflow-hidden flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-darker via-transparent to-transparent"></div>
              </motion.div>
            </div>

          </div>
        </section>

      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
