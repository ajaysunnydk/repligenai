import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog({ onNavigate }: { onNavigate: (page: string) => void }) {
  const blogs = [
    {
      title: "Quantum Computing",
      description: "Explore the profound impact of quantum mechanics on computational power and how it promises to revolutionize problem-solving across various industries.",
      date: "October 12, 2024",
      tag: "Technology"
    },
    {
      title: "No Code Low Code",
      description: "Discover how low code and no code platforms are democratizing software development, enabling faster innovation without deep technical expertise.",
      date: "November 5, 2024",
      tag: "Development"
    }
  ];

  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Blog</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Stay updated with the latest insights on Quantum Computing, No Code / Low Code development, and enterprise technology trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group relative rounded-3xl border border-white/5 bg-enterprise-darker p-10 hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-4 block">
                    {blog.tag} • {blog.date}
                  </span>
                  <h3 className="text-3xl font-display font-semibold text-white mb-6 group-hover:text-brand-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {blog.description}
                  </p>
                  
                  <button className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-400 transition-colors">
                    Read Article &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
