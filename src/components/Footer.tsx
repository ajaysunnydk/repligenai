import { Linkedin, Twitter, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-enterprise-darker border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Company Info */}
        <div className="lg:pr-8">
          <div className="text-2xl font-display font-bold text-white flex items-center gap-2 mb-6 cursor-pointer" onClick={(e) => handleNav(e, 'home')}>
            <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <span className="text-enterprise-darker text-sm">R</span>
            </div>
            RepligenAI
          </div>

          <p className="text-slate-400 leading-relaxed text-sm">
            Building enterprise-grade products, cloud-native platforms, and resilient SaaS infrastructure systems designed for long-term scalability and global enterprise impact.
          </p>

          <div className="flex gap-3 mt-8">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Offerings */}
        <div>
          <h4 className="text-white font-display font-semibold mb-6 tracking-wide">
            OFFERINGS
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" onClick={(e) => handleNav(e, 'platforms')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Platforms</a></li>
            <li><a href="#" onClick={(e) => handleNav(e, 'products')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Products</a></li>
            <li><a href="#" onClick={(e) => handleNav(e, 'engineering')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Engineering</a></li>
            <li><a href="#" onClick={(e) => handleNav(e, 'industries')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Industries</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Innovation</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-display font-semibold mb-6 tracking-wide">
            COMPANY
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" onClick={(e) => handleNav(e, 'about')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</a></li>
            <li><a href="#" onClick={(e) => handleNav(e, 'governance')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Governance</a></li>
            <li><a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Insights</a></li>
            <li><a href="#" onClick={(e) => handleNav(e, 'careers')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Careers</a></li>
            <li><a href="#" onClick={(e) => handleNav(e, 'contact')} className="hover:text-brand-400 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-semibold mb-6 tracking-wide">
            GLOBAL REACH
          </h4>

          <div className="space-y-5 text-sm text-slate-400 bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-brand-400 shrink-0" />
              <div>
                <p className="text-white font-medium mb-1">Email Us</p>
                <span>info@repligenai.net</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-brand-400 shrink-0" />
              <div>
                <p className="text-white font-medium mb-1">Headquarters</p>
                <span>8101 College Blvd.<br/>Overland Park, Kansas<br/>United States</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} RepligenAI Technologies Inc. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Security Operations
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
