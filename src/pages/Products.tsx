import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Github, ScanSearch, MessageSquareCode, Radar, LayoutDashboard, CheckCircle2 } from "lucide-react";

const products = [
  {
    icon: ScanSearch,
    name: "TalentLens",
    tagline: "AI-Powered Candidate Screening & Matching",
    status: "Private Beta",
    statusColor: "bg-brand-500/15 text-brand-300 border-brand-500/30",
    description:
      "TalentLens reads job descriptions and resumes the way a senior recruiter does. It semantically matches candidates to roles, ranks shortlists with transparent scoring, and generates tailored interview questions — cutting screening time from days to minutes.",
    capabilities: [
      "Semantic resume-to-JD matching with explainable match scores",
      "Ranked 48-hour shortlists with skill-gap analysis",
      "Auto-generated, role-specific interview question sets",
      "Bias-aware screening with configurable evaluation criteria",
    ],
    stack: ["React", "FastAPI", "PostgreSQL + pgvector", "Claude API"],
  },
  {
    icon: MessageSquareCode,
    name: "QueryPilot",
    tagline: "Natural Language Analytics Copilot",
    status: "In Development",
    statusColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    description:
      "QueryPilot lets anyone on your team ask questions of your data in plain English — \"What was churn by region last quarter?\" — and get back validated SQL, live charts, and shareable dashboards. No analyst queue, no BI training required.",
    capabilities: [
      "Plain-English questions translated into validated SQL",
      "Instant charts and dashboards from query results",
      "Schema-aware suggestions grounded in your actual warehouse",
      "Query history, saved insights, and team sharing",
    ],
    stack: ["React", "Node.js", "DuckDB", "Snowflake / Postgres connectors"],
  },
  {
    icon: Radar,
    name: "PipeWatch",
    tagline: "Data Pipeline Observability & Quality Monitoring",
    status: "In Development",
    statusColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    description:
      "PipeWatch gives data teams a single pane of glass over every pipeline. It tracks freshness, detects schema drift and volume anomalies, and alerts the right engineer before broken data reaches a dashboard or an executive report.",
    capabilities: [
      "Freshness, volume, and schema-drift monitoring out of the box",
      "Anomaly detection on row counts, nulls, and distributions",
      "Airflow and Databricks integration with lineage-aware alerts",
      "Slack and email alerting with incident timelines",
    ],
    stack: ["Python", "Airflow", "Databricks", "React"],
  },
  {
    icon: LayoutDashboard,
    name: "BenchBoard",
    tagline: "Workforce & Bench Management for Consulting Firms",
    status: "Internal — Productizing",
    statusColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    description:
      "Born from running our own staffing operation, BenchBoard tracks consultant availability, active placements, timesheets, and utilization in one place. We use it internally every day — and we're packaging it for other staffing and consulting firms.",
    capabilities: [
      "Real-time bench visibility with skills and availability tags",
      "Placement pipeline tracking from submission to onboarding",
      "Timesheet capture with utilization and margin reporting",
      "Client and vendor portals with role-based access",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Supabase"],
  },
];

export default function Products({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-32 pb-40">

        {/* HERO */}
        <section className="px-6 relative mb-28">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300 mb-8"
            >
              RepligenAI Labs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8"
            >
              Products Built by <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Our Own Engineers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
            >
              We don't just place engineers — we build with them. Our internal team of software engineers,
              data scientists, and data engineers ships real products that prove our craft. Here's what's
              in the lab right now.
            </motion.p>
          </div>
        </section>

        {/* PRODUCT LIST */}
        <section className="px-6 space-y-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-white/5 bg-enterprise-darker p-10 md:p-14 hover:border-brand-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[80px] group-hover:bg-brand-500/10 transition-colors pointer-events-none"></div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-colors shrink-0">
                      <product.icon className="w-7 h-7 text-brand-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-white">{product.name}</h2>
                      <p className="text-brand-400 text-sm font-medium mt-1">{product.tagline}</p>
                    </div>
                  </div>

                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-6 ${product.statusColor}`}>
                    {product.status}
                  </span>

                  <p className="text-slate-400 leading-relaxed text-lg">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {product.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:border-l lg:border-white/5 lg:pl-12">
                  <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-semibold">
                    Key Capabilities
                  </p>
                  <ul className="space-y-5">
                    {product.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 size={18} className="text-brand-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* OPEN ENGINEERING NOTE */}
        <section className="mt-32 px-6">
          <div className="max-w-4xl mx-auto text-center border border-white/10 bg-enterprise-darker rounded-3xl p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
                <Github className="w-7 h-7 text-brand-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white">
                We Build in the Open
              </h2>
              <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Our engineering team ships fast using AI-assisted development workflows, and we're
                progressively opening our product repositories on GitHub. Want early access, a demo,
                or the same team building something for you?
              </p>

              <button
                onClick={() => onNavigate("contact")}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-500 text-enterprise-darker px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)]"
              >
                Request Early Access
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
