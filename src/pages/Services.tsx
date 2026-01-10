import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    title: "Data & AI",
    description:
      "Build modern data platforms and intelligent systems that turn data into decisions.",
    roles: [
      "Data Engineers",
      "Data Scientists",
      "ML Engineers",
      "Analytics Engineers",
      "MLOps Engineers",
    ],
    outcomes: [
      "Production-grade data platforms",
      "Scalable ML pipelines",
      "Real-time & batch analytics",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Design resilient, cloud-native infrastructure optimized for speed and reliability.",
    roles: [
      "DevOps Engineers",
      "Cloud Architects",
      "Platform Engineers",
      "SREs",
      "AWS / Azure / GCP Specialists",
    ],
    outcomes: [
      "Secure cloud foundations",
      "CI/CD & Kubernetes platforms",
      "High-availability systems",
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "Enterprise backend systems built to scale, perform, and last.",
    roles: [
      "Java Engineers",
      ".NET Engineers",
      "Backend Architects",
      "API Developers",
      "Microservices Engineers",
    ],
    outcomes: [
      "Distributed architectures",
      "High-performance APIs",
      "Scalable microservices",
    ],
  },
  {
    title: "Enterprise Platforms",
    description:
      "Specialists who modernize mission-critical enterprise platforms.",
    roles: [
      "SAP Consultants",
      "ServiceNow Developers",
      "ERP Architects",
      "Integration Specialists",
    ],
    outcomes: [
      "SAP S/4HANA & BTP delivery",
      "ServiceNow ITSM & ITOM",
      "Complex system integrations",
    ],
  },
  {
    title: "Cybersecurity & QA",
    description:
      "Secure systems and maintain quality across the delivery lifecycle.",
    roles: [
      "Security Engineers",
      "QA Engineers",
      "Penetration Testers",
      "Compliance Specialists",
    ],
    outcomes: [
      "Security audits & testing",
      "Compliance readiness",
      "Automated quality pipelines",
    ],
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="bg-black text-white pt-32 pb-40">
      {/* INTRO */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            What we help you build
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            Specialized technical staffing aligned to outcomes — not just resumes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-32 px-6 space-y-24">
        {services.map((service) => (
          <GlowCard key={service.title}>
            <div className="grid md:grid-cols-2 gap-16">
              {/* LEFT */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-10 space-y-4">
                  {service.outcomes.map((item) => (
                    <p
                      key={item}
                      className="text-sm text-neutral-300 border-l border-neutral-700 pl-4"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <p className="text-sm text-neutral-500 mb-4">
                  Roles we place
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 transition"
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
        <div className="max-w-4xl mx-auto text-center border border-neutral-800 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-4xl font-semibold tracking-tight">
            Need something more specific?
          </h2>
          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            Tell us what you’re building — we’ll find the right talent to match.
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition"
          >
            Contact us
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
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
      className="relative max-w-6xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-950 p-12 transition hover:border-neutral-600"
    >
      {/* MOUSE SHINE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition"
        style={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
