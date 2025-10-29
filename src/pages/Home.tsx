import { ArrowRight, Clock, Brain, Shield, MapPin, Database, BarChart3, Bot, Cloud, Server, Code, Briefcase, Lock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: Clock,
      title: '48-Hour Shortlists',
      description: 'Fast turnaround on qualified candidates without compromising quality',
    },
    {
      icon: Brain,
      title: 'AI-Assisted Sourcing',
      description: 'Smart algorithms identify top talent matched to your specific needs',
    },
    {
      icon: Shield,
      title: 'Senior Technical Screening',
      description: 'Expert engineers evaluate candidates with rigorous technical assessments',
    },
    {
      icon: MapPin,
      title: 'U.S. Focus',
      description: 'Specialized in U.S.-based talent for domestic companies',
    },
  ];

  const capabilities = [
    { icon: Database, title: 'Data Engineering', color: 'cyan' },
    { icon: BarChart3, title: 'Data Science', color: 'cyan' },
    { icon: Bot, title: 'Analytics', color: 'cyan' },
    { icon: Brain, title: 'AI/ML', color: 'cyan' },
    { icon: Server, title: 'MLOps', color: 'cyan' },
    { icon: Cloud, title: 'DevOps', color: 'cyan' },
    { icon: Cloud, title: 'AWS', color: 'cyan' },
    { icon: Cloud, title: 'Azure', color: 'cyan' },
    { icon: Cloud, title: 'GCP', color: 'cyan' },
    { icon: Code, title: 'Java', color: 'cyan' },
    { icon: Code, title: '.NET', color: 'cyan' },
    { icon: Briefcase, title: 'SAP', color: 'cyan' },
    { icon: Briefcase, title: 'ServiceNow', color: 'cyan' },
    { icon: Lock, title: 'Cybersecurity', color: 'cyan' },
  ];

  const process = [
    {
      number: '01',
      title: 'Discover',
      description: 'We learn about your team, culture, and exact technical requirements',
    },
    {
      number: '02',
      title: 'Source',
      description: 'AI-powered search combined with human insights finds the best matches',
    },
    {
      number: '03',
      title: 'Select',
      description: 'Senior engineers screen candidates before presenting your shortlist',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hire exceptional tech talent—without the noise
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              AI-assisted sourcing + rigorous human screening for U.S. companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Expert talent across modern tech stacks
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600 hover:shadow-md transition-all group"
                >
                  <Icon className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 mb-4 transition-colors" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Three simple steps to exceptional talent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {process.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-600 text-white rounded-full text-3xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-300 dark:bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to build your team?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss your hiring needs and find the right talent for your organization.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
