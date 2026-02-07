import { motion } from "framer-motion";

const features = [
  {
    title: "Scalable Architecture",
    desc: "Our systems are designed to evolve with your business. We build modular, cloud-ready architectures that scale seamlessly while maintaining performance and reliability."
  },
  {
    title: "Agile Delivery Model",
    desc: "We adopt structured Agile methodologies to ensure rapid iterations, continuous improvement, and faster time-to-market without compromising quality."
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Security is embedded at every layer. From encrypted data flows to secure coding standards, we ensure your applications meet the highest compliance standards."
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          Key Features of Our Services
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-neutral-200 p-10 bg-neutral-50 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-6">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
