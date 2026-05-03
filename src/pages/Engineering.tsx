import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Code2, Server, Database, GitBranch, TerminalSquare, ShieldAlert } from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Distributed Systems Architecture",
    description: "Designing fault-tolerant, horizontally scalable microservices that handle high-throughput enterprise workloads."
  },
  {
    icon: Database,
    title: "High-Performance Data Engineering",
    description: "Architecting low-latency data pipelines, real-time streaming architectures, and durable data lakes."
  },
  {
    icon: ShieldAlert,
    title: "Resilient Infrastructure",
    description: "Building self-healing cloud environments using immutable infrastructure patterns and advanced orchestration."
  },
  {
    icon: GitBranch,
    title: "Advanced CI/CD Pipelines",
    description: "Implementing zero-downtime deployment strategies, canary releases, and rigorous automated testing protocols."
  },
  {
    icon: Code2,
    title: "Enterprise Application Development",
    description: "Developing complex business logic layers with strong type safety, strict domain boundaries, and high test coverage."
  },
  {
    icon: TerminalSquare,
    title: "System Modernization",
    description: "Strategically decoupling monolithic legacy systems into modern, API-first architectural patterns."
  }
];

export default function Engineering({ onNavigate }: { onNavigate: (page: string) => void }) {
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
                Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
                We approach software development not as a feature factory, but as an architectural discipline. We build systems designed for structural integrity, extreme scale, and long-term maintainability.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-white">100<span className="text-brand-400">%</span></span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">In-House Expertise</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-white">0<span className="text-brand-400">%</span></span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Outsourcing</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl border border-white/10 bg-enterprise-darker p-8 overflow-hidden">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 text-xs font-mono text-slate-500">architecture_definition.yaml</div>
                </div>
                <pre className="text-sm font-mono text-brand-300 overflow-hidden leading-relaxed">
                  <code>
                    <span className="text-slate-500"># System Architecture Blueprint</span>{"\n"}
                    <span className="text-blue-400">apiVersion</span>: core.repligen.ai/v1{"\n"}
                    <span className="text-blue-400">kind</span>: EnterpriseSystem{"\n"}
                    <span className="text-blue-400">metadata</span>:{"\n"}
                    {"  "}<span className="text-blue-400">name</span>: global-transaction-router{"\n"}
                    <span className="text-blue-400">spec</span>:{"\n"}
                    {"  "}<span className="text-blue-400">availability</span>: 99.999%{"\n"}
                    {"  "}<span className="text-blue-400">redundancy</span>: active-active{"\n"}
                    {"  "}<span className="text-blue-400">components</span>:{"\n"}
                    {"    "}- <span className="text-emerald-400">type</span>: ingestion-layer{"\n"}
                    {"      "}<span className="text-emerald-400">scale</span>: dynamic{"\n"}
                    {"    "}- <span className="text-emerald-400">type</span>: event-bus{"\n"}
                    {"      "}<span className="text-emerald-400">durability</span>: strict{"\n"}
                    <span className="text-slate-500 mt-4 block"># Initiating rigorous build process...</span>
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 border-b border-white/10 pb-8">
              <h2 className="text-3xl font-display font-semibold text-white">Technical Competencies</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-2xl border border-white/5 bg-enterprise-darker hover:border-brand-500/30 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-[50px] group-hover:bg-brand-500/10 transition-colors pointer-events-none"></div>
                  
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-colors">
                    <cap.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors">
                    {cap.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed font-light text-sm">
                    {cap.description}
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
