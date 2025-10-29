import { Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', id: 'about' },
        { label: 'Careers', id: 'careers' },
        { label: 'Contact', id: 'contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Data & AI', id: 'services' },
        { label: 'Cloud & DevOps', id: 'services' },
        { label: 'Cybersecurity', id: 'services' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { label: 'FinTech', id: 'industries' },
        { label: 'HealthTech', id: 'industries' },
        { label: 'Retail', id: 'industries' },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
              RepligenAi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              AI-assisted tech staffing with rigorous human screening for U.S. companies.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="mailto:contact@repligenai.net"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>

          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} RepligenAi LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 text-center md:text-left">
            8101 College Blvd, Overland Park, KS 66210
          </p>
        </div>
      </div>
    </footer>
  );
}
