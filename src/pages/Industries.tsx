import { useState } from "react";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Truck,
  Factory,
  Zap,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Landmark,
      title: "FinTech",
      description:
        "Digital banking, payments, trading platforms, and financial infrastructure.",
      focus: [
        "Payment processing & risk analytics",
        "Low-latency trading systems",
        "Regulatory and compliance-driven platforms",
      ],
    },
    {
      icon: HeartPulse,
      title: "HealthTech",
      description:
        "Healthcare platforms, medical devices, and health data systems.",
      focus: [
        "HIPAA-compliant architectures",
        "EHR & medical imaging platforms",
        "Telehealth & patient analytics",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Retail & eCommerce",
      description:
        "Customer-facing platforms optimized for scale and personalization.",
      focus: [
        "Personalization & recommendation engines",
        "Inventory & order management",
        "Customer data platforms",
      ],
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "Technology that powers modern supply chains and fulfillment networks.",
      focus: [
        "Route optimization systems",
        "Warehouse automation",
        "IoT-based tracking",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Industrial systems built for efficiency, reliability, and insight.",
      focus: [
        "Predictive maintenance",
        "Production analytics",
        "IoT-driven quality control",
      ],
    },
    {
      icon: Zap,
      title: "Energy",
      description:
        "Systems that support renewable integration and energy markets.",
      focus: [
        "Smart grid platforms",
        "Energy trading systems",
        "Asset monitoring & optimization",
      ],
    },
    {
      icon: Building2,
      title: "Public Sector",
      description:
        "Secure, compliant platforms for public infrastructure and services.",
      focus: [
        "Citizen service platforms",
        "Security-first data systems",
        "Regulatory compliance",
      ],
    },
    {
      icon: TrendingUp,
      title: "Media & AdTech",
      description:
        "High-throughput platforms for content and audience intelligence.",
      focus: [
        "Ad targeting systems",
        "Real-time analytics",
        "Audience segmentation",
      ],
    },
  ];

  return (
    <div className="bg-black text-white pt-32 pb-40">
      {/* INTRO */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Industries we understand
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            Domain knowledge matters. We place engineers who understand both the
            technology and the industry context.
          </p>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="mt-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {industries.map((industry) => (
            <GlowCard key={industry.title}>
              <div className="flex gap-8">
                {/* ICON */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl border border-neutral-700 flex items-center justify-center">
                    <industry.icon className="w-7 h-7 text-neutral-300" />
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <h2 className="text-2xl font-medium">{industry.title}</h2>
                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {industry.focus.map((item) => (
                      <p
                        key={item}
                        className="text-sm text-neutral-300 border-l border-neutral-700 pl-4"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 px-6">
        <div className="max-w-4xl mx-auto text-center border border-neutral-800 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-4xl font-semibold tracking-tight">
            Industry-specific hiring, done right
          </h2>
          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            We don’t just match skills — we match engineers to the realities of
            your industry.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition">
            Talk to us
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
      className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-10 transition hover:border-neutral-600"
    >
      {/* MOUSE SHINE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition"
        style={{
          background: `radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
