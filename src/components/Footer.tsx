import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-semibold">
            RepliGenAI
          </h3>

          <p className="mt-6 text-blue-300 leading-relaxed text-sm">
            Delivering intelligent software and AI-driven solutions
            that help organizations scale, innovate, and compete
            in a rapidly evolving digital world.
          </p>

          <div className="flex gap-4 mt-8">
            <a className="w-10 h-10 flex items-center justify-center bg-blue-800 hover:bg-blue-700 transition rounded">
              <Linkedin size={18} />
            </a>
            <a className="w-10 h-10 flex items-center justify-center bg-blue-800 hover:bg-blue-700 transition rounded">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-blue-300">
            <li>AI & Machine Learning Solutions</li>
            <li>Custom Software Development</li>
            <li>Cloud & DevOps Engineering</li>
            <li>Enterprise Modernization</li>
            <li>Data & Analytics Platforms</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Company
          </h4>
          <ul className="space-y-4 text-sm text-blue-300">
            <li>About Us</li>
            <li>Case Studies</li>
            <li>Careers</li>
            <li>Insights & Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Contact
          </h4>

          <div className="space-y-4 text-sm text-blue-300">

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1 text-blue-400" />
              <span>contact@repligenai.net</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-blue-400" />
              <span>Overland Park, Kansas</span>
            </div>

          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-400">
        <p>
          © {new Date().getFullYear()} RepliGenAI. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>

    </footer>
  );
}
