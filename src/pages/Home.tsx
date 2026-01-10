import { ArrowRight } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Hire exceptional <br />
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              tech talent
            </span>
            <br /> without the noise
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            AI-assisted sourcing combined with rigorous human screening — built
            for U.S. companies that care about quality, speed, and fit.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition"
            >
              Start hiring
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onNavigate("services")}
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-300 hover:border-neutral-500 transition"
            >
              Explore services
            </button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          {[
            {
              title: "48-Hour Shortlists",
              desc: "Qualified candidates delivered fast — without sacrificing depth or quality."
            },
            {
              title: "AI-Assisted Sourcing",
              desc: "Smart algorithms surface the right profiles, not just more resumes."
            },
            {
              title: "Senior Screening",
              desc: "Experienced engineers vet candidates through real technical evaluation."
            },
            {
              title: "U.S. Focused Talent",
              desc: "Specialized in U.S.-based professionals for domestic teams."
            }
          ].map((item) => (
            <div key={item.title} className="space-y-4">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 px-6 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            Capabilities across modern stacks
          </h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            We help you hire talent across data, cloud, AI, and enterprise
            platforms.
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-neutral-300">
            {[
              "Data Engineering",
              "Data Science",
              "AI / ML",
              "Analytics",
              "Cloud & DevOps",
              "MLOps",
              "Cybersecurity",
              "Enterprise Platforms"
            ].map((cap) => (
              <div
                key={cap}
                className="rounded-2xl border border-neutral-800 py-6"
              >
                {cap}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "We understand your team, culture, and exact technical needs."
            },
            {
              step: "02",
              title: "Source",
              desc: "AI-driven sourcing combined with human insight finds the best match."
            },
            {
              step: "03",
              title: "Select",
              desc: "Senior engineers screen candidates before you see the shortlist."
            }
          ].map((item) => (
            <div key={item.step}>
              <div className="text-3xl font-semibold text-neutral-500 mb-6">
                {item.step}
              </div>
              <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
              <p className="text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Ready to build your team?
        </h2>
        <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
          Let’s discuss your hiring needs and deliver talent that actually fits.
        </p>

        <button
          onClick={() => onNavigate("contact")}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition"
        >
          Get started
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
