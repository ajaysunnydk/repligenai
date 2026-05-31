import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    title: "Software Developer",
    description: "We bring ideas to life through cutting-edge software development. Our expertise lies in building applications that solve complex problems and deliver exceptional user experiences.",
    roles: ["Frontend Engineers", "Backend Developers", "Full Stack Engineers", "Mobile Developers"],
    outcomes: ["Custom software applications", "Scalable web platforms", "Seamless user interfaces"]
  },
  {
    title: "AI/ML Engineer",
    description: "Our AI and machine learning solutions span industries like healthcare and finance, empowering businesses to maximize their data's potential effectively and efficiently.",
    roles: ["Machine Learning Engineers", "AI Researchers", "Deep Learning Specialists", "NLP Experts"],
    outcomes: ["Predictive models", "Automated processes", "Intelligent data systems"]
  },
  {
    title: "Databricks Engineer",
    description: "Expert in building scalable data pipelines, optimizing analytics solutions, integrating big data tools, and delivering actionable insights using unified platforms.",
    roles: ["Databricks Architects", "Big Data Engineers", "Cloud Analytics Experts"],
    outcomes: ["High-performance data pipelines", "Optimized cloud analytics", "Unified data lakehouses"]
  },
  {
    title: "Data Analyst",
    description: "Our data analysis services empower businesses by utilizing advanced tools to uncover valuable insights, trends, patterns, and correlations for strategic decision-making.",
    roles: ["Business Intelligence Analysts", "Data Visualizers", "Quantitative Analysts"],
    outcomes: ["Actionable business insights", "Interactive dashboards", "Data-driven strategy"]
  },
  {
    title: "Programmer Analyst",
    description: "Utilizes coding expertise and business insights to create, develop, and deploy software solutions tailored to meet organizational goals and requirements effectively.",
    roles: ["Systems Analysts", "Application Programmers", "Integration Specialists"],
    outcomes: ["Optimized workflows", "Tailored software systems", "Efficient process automation"]
  },
  {
    title: "Data Scientist",
    description: "Data Scientists drive innovation by combining programming, statistical analysis, and expertise to address complex business challenges and deliver impactful, data-driven solutions.",
    roles: ["Data Modeling Experts", "Statisticians", "Data Strategists"],
    outcomes: ["Advanced statistical models", "Innovative data solutions", "Deep analytical insights"]
  },
  {
    title: "Data Engineer",
    description: "Data Engineers are vital to modern businesses, designing frameworks that ensure seamless data flow across systems, enabling efficient analysis and decision-making.",
    roles: ["Data Architecture Specialists", "ETL Developers", "Data Integration Engineers"],
    outcomes: ["Robust data architectures", "Seamless data integration", "Reliable data infrastructure"]
  }
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark text-white pt-32 pb-40 min-h-screen">
        {/* INTRO */}
        <section className="px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">IT Services</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
              We provide exceptional technology solutions and expert talent tailored for the modern enterprise, accelerating your path to innovation.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-32 px-6 space-y-16 max-w-7xl mx-auto">
          {services.map((service) => (
            <GlowCard key={service.title}>
              <div className="grid md:grid-cols-2 gap-16">
                {/* LEFT */}
                <div>
                  <h2 className="text-3xl font-display font-semibold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-10 space-y-4">
                    {service.outcomes.map((item) => (
                      <p
                        key={item}
                        className="text-sm text-slate-300 border-l border-brand-500/50 pl-4"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">
                    Core Roles
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.roles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-brand-500/50 hover:text-white transition"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-40 px-6">
          <div className="max-w-4xl mx-auto text-center border border-white/10 bg-enterprise-darker rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none" />

            <h2 className="text-4xl font-display font-semibold tracking-tight text-white">
              Need specialized technical talent?
            </h2>
            <p className="mt-6 text-slate-400 max-w-xl mx-auto">
              Let us help you connect with the perfect engineers and analysts to drive your digital transformation.
            </p>

            <button
              onClick={() => onNavigate("contact")}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-500 text-enterprise-darker px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)]"
            >
              Contact Us
              <ArrowRight size={16} />
            </button>
          </div>
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
      className="relative rounded-3xl border border-white/5 bg-enterprise-darker p-12 transition-all hover:border-brand-500/30 overflow-hidden"
    >
      {/* MOUSE SHINE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(20, 184, 166, 0.05), transparent 40%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
