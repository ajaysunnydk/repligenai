import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Factory,
  Cloud,
  Radio,
  Zap,
  Truck,
  BookOpen,
  Building2,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Enterprise solutions for core banking, digital payments, latency-sensitive trading platforms, and financial risk infrastructure.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant platforms, health data systems, patient analytics, and robust architectures for medical imaging.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Consumer",
    description: "High-throughput commerce systems, customer intelligence platforms, and scalable inventory management networks.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial IoT systems, predictive maintenance algorithms, and operational intelligence built for reliability.",
  },
  {
    icon: Cloud,
    title: "Technology & SaaS",
    description: "Cloud-native foundations, multi-tenant architectures, and scalable infrastructures for rapidly growing software products.",
  },
  {
    icon: Radio,
    title: "Telecom & Media",
    description: "High-bandwidth content delivery networks, real-time analytics, and audience segmentation platforms.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid platforms, energy trading algorithms, and secure asset monitoring systems.",
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    description: "Route optimization platforms, warehouse automation software, and global supply chain visibility systems.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Scalable learning management systems and data-driven student success platforms.",
  },
  {
    icon: Building2,
    title: "Public Sector",
    description: "Secure, compliant, and highly available platforms for public infrastructure and citizen services.",
  },
];

export default function Industries({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-32 pb-40">
        
        {/* INTRO */}
        <section className="px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand-600/10 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10 pt-16">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase text-brand-400 tracking-[0.2em] mb-6 text-sm font-semibold"
            >
              Global Expertise
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8"
            >
              Industry Solutions <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Built for Scale</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed border-t border-white/10 pt-8"
            >
              We partner with organizations across global industries to design, architect, and deploy intelligent technology solutions tailored to sector-specific structural challenges.
            </motion.p>
          </div>
        </section>

        {/* INDUSTRY CARDS */}
        <section className="mt-32 px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {industries.map((industry, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 4) * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                key={industry.title}
              >
                <GlowCard>
                  <div className="flex flex-col sm:flex-row gap-8">
                    {/* ICON */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner relative overflow-hidden group-hover:border-brand-500/50 transition-colors">
                        <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <industry.icon className="w-8 h-8 text-brand-400 relative z-10" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h2 className="text-2xl font-display font-semibold text-white group-hover:text-brand-300 transition-colors">{industry.title}</h2>
                      <p className="mt-4 text-slate-400 leading-relaxed font-light">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-40 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center border border-white/10 rounded-3xl p-16 md:p-24 relative overflow-hidden bg-enterprise-darker"
          >
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-brand-600/10 via-blue-600/10 to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Need an industry-aligned digital platform?
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light mb-12">
                Let’s discuss how our enterprise software engineering can scale your operations.
              </p>

              <button className="bg-brand-500 hover:bg-brand-400 text-enterprise-darker px-10 py-5 text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] flex items-center gap-3 mx-auto uppercase">
                Initiate Consultation <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

/* ---------- GLOW CARD ---------- */

function GlowCard({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="group relative rounded-3xl border border-white/5 bg-enterprise-darker p-10 transition duration-500 hover:border-brand-500/30 overflow-hidden h-full"
    >
      {/* MOUSE SHINE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(45, 212, 191, 0.05), transparent 40%)`,
        }}
      />
      
      {/* SUBTLE CORNER GLOW */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/10 blur-[50px] rounded-full group-hover:bg-brand-500/20 transition duration-500 pointer-events-none"></div>

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
