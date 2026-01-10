import { Target, Users, MessageSquare, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Speed with rigor",
      description:
        "We move fast without cutting corners. Every candidate is evaluated thoroughly before they reach your desk.",
    },
    {
      icon: MessageSquare,
      title: "Candor",
      description:
        "Clear communication, honest feedback, and transparency throughout the process.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description:
        "We help build diverse, high-performing teams that reflect the best of U.S. tech talent.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-40">
      {/* INTRO */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            About RepligenAI
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            We’re rethinking technical recruiting by combining intelligent
            systems with experienced human judgment.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />

            <div className="relative z-10 max-w-4xl">
              <h2 className="text-4xl font-semibold tracking-tight mb-6">
                Our mission
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                RepligenAI was founded on a simple belief: hiring exceptional
                technical talent shouldn’t take months — and speed should never
                come at the cost of quality.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                We deliver shortlists of senior, pre-vetted candidates in as
                little as 48 hours by combining AI-assisted sourcing with
                rigorous, hands-on technical screening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mt-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold tracking-tight mb-4">
              Our values
            </h2>
            <p className="text-neutral-400 text-lg">
              The principles that guide how we work — with clients and
              candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <ValueCard key={value.title} icon={value.icon}>
                <h3 className="text-2xl font-medium mb-4">{value.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {value.description}
                </p>
              </ValueCard>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mt-40 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight mb-6">
              Our story
            </h2>
            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
              <p>
                RepligenAI emerged from firsthand experience hiring engineers at
                high-growth startups and enterprise companies. We watched strong
                candidates disappear into broken pipelines while weeks were
                lost evaluating poor fits.
              </p>
              <p>
                The problem wasn’t a lack of talent — it was process. Sourcing
                was manual, screening was inconsistent, and decisions were made
                with incomplete signal.
              </p>
              <p>
                Our answer was to let machines handle repetition and scale, while
                experienced recruiters and engineers focus on judgment. The
                result is a recruiting model that’s faster, clearer, and far
                more reliable.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />
            <div className="relative z-10">
              <Award className="w-10 h-10 text-neutral-300 mb-6" />
              <p className="text-neutral-300 text-lg leading-relaxed">
                Today, we partner with companies across FinTech, HealthTech, and
                other innovation-driven industries — helping them build
                world-class teams without the usual recruiting friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 px-6">
        <div className="max-w-4xl mx-auto text-center border border-neutral-800 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-4xl font-semibold tracking-tight">
            Join our mission
          </h2>
          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            We’re always looking for people who care deeply about quality,
            clarity, and long-term impact.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ---------- VALUE CARD ---------- */

function ValueCard({
  icon: Icon,
  children,
}: {
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-10 transition hover:border-neutral-600">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />
      <div className="relative z-10">
        <Icon className="w-10 h-10 text-neutral-300 mb-6" />
        {children}
      </div>
    </div>
  );
}
