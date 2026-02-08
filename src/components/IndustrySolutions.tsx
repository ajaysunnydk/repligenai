import { motion } from "framer-motion";

const industries = [
  {
    title: "Financial Services",
    desc: "AI-powered fraud detection, analytics platforms, and secure cloud infrastructure."
  },
  {
    title: "Healthcare",
    desc: "Data-driven diagnostics, intelligent automation, and secure patient platforms."
  },
  {
    title: "Retail & E-Commerce",
    desc: "Customer intelligence, recommendation engines, and scalable commerce systems."
  },
  {
    title: "Manufacturing",
    desc: "Predictive maintenance, IoT integrations, and operational intelligence."
  }
];

export default function IndustrySolutions() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center"
        >
          Industry Solutions
        </motion.h2>

        <p className="mt-6 text-neutral-600 text-center max-w-3xl mx-auto">
          We partner with organizations across industries to design and deploy
          intelligent technology solutions tailored to sector-specific challenges.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-neutral-50 p-8 border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-800">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
