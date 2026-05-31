import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Box, Shield, Zap } from "lucide-react";

export default function About({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen">
        
        {/* HERO */}
        <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-enterprise-darker via-enterprise-dark/90 to-enterprise-dark"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-8 drop-shadow-lg"
            >
              Accelerating Innovation <br className="hidden md:block"/> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">AI & IT Solutions</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-8 text-slate-300 max-w-3xl mx-auto text-xl font-light leading-relaxed"
            >
              Accelerate your business with cutting-edge artificial intelligence and software innovations. Seamlessly integrate intelligent systems to optimize operations.
            </motion.p>
          </div>
        </section>

        {/* DEFINING THE COMPANY */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1769&auto=format&fit=crop"
                alt="Corporate Architecture"
                className="relative rounded-2xl shadow-2xl border border-white/10 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
                What Defines Us
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Exceptional IT Staffing and <span className="italic font-light">Technology Solutions</span>
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg mb-6">
                We help organizations accelerate innovation by delivering exceptional IT staffing and technology solutions tailored for the modern digital enterprise.
              </p>

              <p className="text-slate-400 leading-relaxed text-lg mb-8 border-l-2 border-brand-500/30 pl-6">
                As a specialized IT staffing and consulting company, we excel in connecting businesses with highly skilled technology professionals who drive transformation, efficiency, and long-term growth. Our expertise spans Artificial Intelligence, Generative AI, software development, cloud computing, cybersecurity, DevOps, data engineering, and enterprise technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* OUR FOUNDATION */}
        <section className="py-32 bg-enterprise-darker relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h4 className="uppercase text-brand-400 tracking-[0.2em] mb-4 text-sm font-semibold">
                Core Principles
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                How We Deliver Value
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Box size={32} className="text-brand-400" />,
                  title: "Scalable Architecture",
                  desc: "Build software that grows with your business. Our solutions are designed with scalability in mind, ensuring seamless adaptation without sacrificing performance."
                },
                {
                  icon: <Zap size={32} className="text-brand-400" />,
                  title: "Agile Methodology",
                  desc: "We use Agile practices to ensure flexibility and rapid delivery of high-quality software, adjusting quickly to changing requirements with iterative development."
                },
                {
                  icon: <Shield size={32} className="text-brand-400" />,
                  title: "Advanced Security",
                  desc: "Security is at the core of our development. We integrate best practices for data protection and secure coding to ensure your software is safe from vulnerabilities."
                }
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="glass-dark p-10 hover:border-brand-500/30 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-8 p-4 rounded-lg bg-white/5 inline-block border border-white/5">
                      {value.icon}
                    </div>
                    <h4 className="text-2xl font-display font-semibold text-white mb-4">
                      {value.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900/20"></div>
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Partner with Us Today
            </h2>
            <p className="text-xl text-slate-300 font-light mb-12">
              Empower your business with AI-driven software solutions and connect with the right talent to succeed in today’s competitive landscape.
            </p>

            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-500 hover:bg-brand-400 text-enterprise-darker px-10 py-5 text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] flex items-center gap-3 mx-auto uppercase"
            >
              Contact Us <ArrowRight size={18} />
            </button>
          </div>
        </section>

      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
