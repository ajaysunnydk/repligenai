import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, Lock, FileKey, CheckCircle2, Activity, DatabaseBackup } from "lucide-react";

export default function Governance({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-32 pb-40">
        
        {/* HERO */}
        <section className="px-6 relative mb-32">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 pt-16">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase text-brand-400 tracking-[0.2em] mb-6 text-sm font-semibold flex justify-center items-center gap-2"
            >
              <Shield size={16} /> Security & Compliance
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8"
            >
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-500">Governance</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 font-light leading-relaxed border-t border-white/10 pt-8 max-w-3xl mx-auto"
            >
              Scale cannot come at the cost of security. We implement rigorous governance frameworks, continuous compliance pipelines, and zero-trust architectures to protect your most critical intellectual property.
            </motion.p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-8">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl border border-white/10 bg-enterprise-darker relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Lock size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10">
                  <Lock className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4 relative z-10">Zero-Trust Security</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8 relative z-10">
                  We operate on the principle that no actor, system, or network is trusted by default. Every transaction is authenticated, authorized, and continuously validated.
                </p>
                <ul className="space-y-4 relative z-10">
                  {["Identity-Aware Proxies (IAP)", "Mutual TLS (mTLS) everywhere", "Ephemeral credentials"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl border border-white/10 bg-enterprise-darker relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FileKey size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10">
                  <FileKey className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4 relative z-10">Continuous Compliance</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8 relative z-10">
                  Compliance is treated as code. We integrate automated compliance checks directly into the CI/CD pipeline, preventing non-compliant infrastructure from ever reaching production.
                </p>
                <ul className="space-y-4 relative z-10">
                  {["SOC 2 & ISO 27001 mapping", "Policy-as-Code (OPA/Rego)", "Automated audit trailing"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl border border-white/10 bg-enterprise-darker relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Activity size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10">
                  <Activity className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4 relative z-10">Observability & Threat Detection</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8 relative z-10">
                  Comprehensive visibility across the entire stack. We aggregate logs, metrics, and traces to provide real-time alerting on anomalous behavior and potential security incidents.
                </p>
                <ul className="space-y-4 relative z-10">
                  {["Distributed Tracing", "SIEM Integration", "Runtime Threat Defense"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl border border-white/10 bg-enterprise-darker relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <DatabaseBackup size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10">
                  <DatabaseBackup className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4 relative z-10">Data Sovereignty & Privacy</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8 relative z-10">
                  Strict controls over data residency and privacy. We implement column-level encryption, rigorous access logging, and anonymization pipelines for analytics data.
                </p>
                <ul className="space-y-4 relative z-10">
                  {["GDPR & CCPA Architecture", "Key Management Systems (KMS)", "Data masking & tokenization"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

          </div>
        </section>

      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
