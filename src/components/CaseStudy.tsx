import { motion } from "framer-motion";
import photo3 from "../assets/photos/photo3.jpg";

export default function CaseStudy() {
  return (
    <section className="py-28 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={photo3}
            alt="Case Study"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase text-blue-600 text-sm tracking-widest font-medium">
            Case Study
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight">
            Accelerating Digital Transformation
            for a Global Enterprise
          </h2>

          <p className="mt-8 text-neutral-600 leading-relaxed">
            We partnered with a Fortune 500 organization to modernize their
            legacy systems and implement AI-driven analytics across operations.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-700">40%</h3>
              <p className="text-sm text-neutral-600 mt-2">
                Operational Efficiency Gain
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-700">3x</h3>
              <p className="text-sm text-neutral-600 mt-2">
                Faster Deployment
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-700">99.9%</h3>
              <p className="text-sm text-neutral-600 mt-2">
                System Uptime
              </p>
            </div>
          </div>

          <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-medium transition">
            View Full Case Study →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
