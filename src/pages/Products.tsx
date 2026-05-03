import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppWindow, Cpu, Users, BarChart3, Globe, Smartphone } from "lucide-react";

const products = [
  {
    icon: AppWindow,
    title: "B2B SaaS Portals",
    description: "Complex, multi-tenant SaaS applications with granular role-based access control and high-performance UI."
  },
  {
    icon: BarChart3,
    title: "Data Visualization Suites",
    description: "Custom charting and analytics dashboards that render millions of data points smoothly in the browser."
  },
  {
    icon: Users,
    title: "Internal Operational Tools",
    description: "Bespoke back-office applications that automate complex workflows and unify disjointed enterprise systems."
  },
  {
    icon: Cpu,
    title: "AI-Integrated Interfaces",
    description: "Conversational UIs and copilot integrations that securely leverage LLMs within enterprise boundaries."
  },
  {
    icon: Globe,
    title: "High-Traffic Web Applications",
    description: "Consumer-facing web properties built for global scale, extreme SEO performance, and core web vitals."
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Ecosystems",
    description: "Unified digital experiences spanning web, mobile, and connected devices with shared underlying state."
  }
];

export default function Products({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-32 pb-40">
        
        {/* HERO */}
        <section className="px-6 relative mb-32">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 pt-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-6 text-sm font-semibold">
                Core Capability
              </h4>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8">
                Product <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Engineering</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
                We transform complex business requirements into elegant, highly performant digital products. Our approach bridges the gap between sophisticated engineering architecture and intuitive user experience.
              </p>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-brand-500/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl border border-white/10 bg-enterprise-darker p-8 overflow-hidden aspect-[4/3] flex items-center justify-center">
                
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative z-10 w-full max-w-sm space-y-4">
                  <div className="h-4 w-1/3 bg-brand-500/20 rounded"></div>
                  <div className="h-24 w-full bg-white/5 rounded-lg border border-white/10"></div>
                  <div className="flex gap-4">
                    <div className="h-20 w-1/2 bg-white/5 rounded-lg border border-white/10"></div>
                    <div className="h-20 w-1/2 bg-white/5 rounded-lg border border-white/10"></div>
                  </div>
                  <div className="h-10 w-full bg-brand-500/20 rounded-lg border border-brand-500/30 mt-4"></div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 border-b border-white/10 pb-8">
              <h2 className="text-3xl font-display font-semibold text-white">Digital Product Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((prod, index) => (
                <motion.div
                  key={prod.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-2xl border border-white/5 bg-enterprise-darker hover:border-brand-500/30 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-[50px] group-hover:bg-brand-500/10 transition-colors pointer-events-none"></div>
                  
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-colors">
                    <prod.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors">
                    {prod.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed font-light text-sm">
                    {prod.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
