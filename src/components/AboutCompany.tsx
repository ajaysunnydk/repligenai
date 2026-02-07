import { motion } from "framer-motion";
import photo1 from "../assets/photos/photo1.jpg";

export default function AboutCompany() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={photo1}
            alt="About Company"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-blue-500 tracking-widest text-sm font-medium">
            About Company
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight">
            Empowering Businesses With
            Intelligent Software Solutions
          </h2>

          <p className="mt-8 text-neutral-600 leading-relaxed">
            For years, we have partnered with forward-thinking organizations
            to modernize infrastructure, implement artificial intelligence,
            and build scalable digital platforms.
          </p>

          <p className="mt-6 text-neutral-600 leading-relaxed">
            Our mission is to transform business operations through strategic
            technology integration — combining automation, cloud engineering,
            and advanced analytics to deliver measurable results.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              "Modernizing legacy systems with intelligent automation",
              "Building scalable enterprise applications",
              "Designing intuitive and high-performance digital platforms"
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 bg-blue-700 rounded-full mt-1" />
                <span className="text-neutral-700">{item}</span>
              </motion.li>
            ))}
          </ul>

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 font-medium transition text-white mt-10">
            About More →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
