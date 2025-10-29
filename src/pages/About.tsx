import { Target, Users, MessageSquare, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Speed with Rigor',
      description: 'Fast turnarounds without shortcuts. Every candidate is thoroughly vetted before reaching your desk.',
    },
    {
      icon: MessageSquare,
      title: 'Candor',
      description: 'Honest feedback, transparent processes, and clear communication at every step.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Building diverse teams that reflect the best of American tech talent.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About RepligenAi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transforming technical recruiting with AI-powered sourcing and expert human judgment
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-12 md:p-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              RepligenAi was founded on a simple belief: finding exceptional technical talent shouldn't take months, and it shouldn't require sacrificing quality for speed.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We combine cutting-edge AI technology with rigorous human screening to deliver shortlists of pre-vetted, senior-level candidates in 48 hours. Our focus is exclusively on the U.S. market, allowing us to deeply understand the unique needs of American tech companies and the regulatory landscape they navigate.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors"
                >
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-12 md:p-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 2023, RepligenAi emerged from firsthand experience with the frustrations of traditional tech recruiting. Our founding team spent years hiring engineers at high-growth startups and enterprise companies, watching talented candidates slip through inefficient processes while mediocre fits consumed weeks of interview time.
              </p>
              <p>
                We saw an opportunity: use AI to handle the repetitive work of sourcing and initial screening, but keep experienced technical professionals in the loop for judgment calls that matter. The result is a recruiting process that's both faster and more rigorous than traditional approaches.
              </p>
              <p>
                Today, we partner with companies across FinTech, HealthTech, and other innovation-driven industries, helping them build world-class technical teams without the usual headaches.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white">
              Join Our Mission
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always looking for talented recruiters, engineers, and operations professionals who share our vision for better technical recruiting.
          </p>
        </div>
      </div>
    </div>
  );
}
