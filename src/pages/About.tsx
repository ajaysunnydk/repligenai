import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";

export default function About({ onNavigate }: AboutProps) {
  return (
    <MainLayout onNavigate={onNavigate}>
      <div className="bg-white text-neutral-900">

        {/* HERO */}
        <section className="bg-blue-900 text-white py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold"
            >
              About RepliGenAI
            </motion.h1>

            <p className="mt-8 text-blue-200 max-w-3xl mx-auto text-lg">
              Delivering intelligent software and AI-driven solutions
              that empower organizations to innovate, scale, and compete globally.
            </p>
          </div>
        </section>

        {/* COMPANY STORY */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/about-team.jpg"
                alt="Company"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-semibold">
                Our Journey
              </h2>

              <p className="mt-8 text-neutral-600 leading-relaxed">
                RepliGenAI was founded with a vision to bridge the gap between
                artificial intelligence and real-world business transformation.
                We combine engineering excellence with strategic insight to
                deliver scalable, future-ready digital platforms.
              </p>

              <p className="mt-6 text-neutral-600 leading-relaxed">
                Over the years, we’ve partnered with enterprises across industries,
                helping them modernize infrastructure, implement AI solutions,
                and build high-performance technology ecosystems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-28 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

            <div className="bg-white p-12 shadow-md border">
              <h3 className="text-2xl font-semibold text-blue-800">
                Our Mission
              </h3>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                To deliver intelligent, scalable, and secure technology solutions
                that enable organizations to unlock new levels of efficiency,
                innovation, and measurable growth.
              </p>
            </div>

            <div className="bg-white p-12 shadow-md border">
              <h3 className="text-2xl font-semibold text-blue-800">
                Our Vision
              </h3>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                To become a global leader in AI-powered digital transformation,
                recognized for engineering excellence, integrity, and long-term
                strategic partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-semibold">
              Our Core Values
            </h2>

            <div className="mt-16 grid md:grid-cols-4 gap-12">

              {[
                "Innovation",
                "Integrity",
                "Excellence",
                "Collaboration"
              ].map((value) => (
                <div
                  key={value}
                  className="border p-10 hover:shadow-lg transition"
                >
                  <h4 className="text-xl font-semibold text-blue-700">
                    {value}
                  </h4>
                  <p className="mt-4 text-neutral-600 text-sm">
                    We are committed to delivering measurable impact through
                    forward-thinking technology and ethical business practices.
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* TEAM
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold">
            Leadership Team
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-12">

            {[
              {
                name: "David Carter",
                role: "Chief Executive Officer",
                image: "/leader1.jpg"
              },
              {
                name: "Sophia Martinez",
                role: "Chief Technology Officer",
                image: "/leader2.jpg"
              },
              {
                name: "Michael Lee",
                role: "Head of Engineering",
                image: "/leader3.jpg"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white shadow-md p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg mb-6"
                />
                <h4 className="text-lg font-semibold">
                  {member.name}
                </h4>
                <p className="text-blue-600 text-sm mt-2">
                  {member.role}
                </p>
              </div>
            ))} */}

        {/* </div>
        </div>
      </section> */}

        {/* CTA */}
        <section className="py-24 bg-blue-900 text-white text-center">
          <h2 className="text-4xl font-semibold">
            Ready to Work With Us?
          </h2>
          <p className="mt-6 text-blue-200">
            Let’s build intelligent systems that power your next phase of growth.
          </p>

          <button className="mt-10 bg-white text-blue-900 px-8 py-3 font-medium hover:bg-blue-100 transition">
            Contact Us →
          </button>
        </section>

      </div>
    </MainLayout>
  );
}
