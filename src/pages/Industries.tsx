import { Landmark, HeartPulse, ShoppingBag, Truck, Factory, Zap, Building2, TrendingUp } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Landmark,
      title: 'FinTech',
      description: 'Digital banking, payments, trading platforms, and financial infrastructure',
      specialties: ['Payment Processing', 'Risk Analytics', 'Blockchain', 'Trading Systems'],
    },
    {
      icon: HeartPulse,
      title: 'HealthTech',
      description: 'Healthcare platforms, medical devices, telemedicine, and health analytics',
      specialties: ['EHR Systems', 'Medical Imaging', 'Telehealth', 'HIPAA Compliance'],
    },
    {
      icon: ShoppingBag,
      title: 'Retail & eCommerce',
      description: 'Online marketplaces, inventory systems, and customer experience platforms',
      specialties: ['Personalization', 'Supply Chain', 'Customer Data', 'Order Management'],
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Supply chain optimization, fleet management, and warehouse automation',
      specialties: ['Route Optimization', 'Warehouse Management', 'IoT Tracking', 'Demand Forecasting'],
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial automation, predictive maintenance, and production optimization',
      specialties: ['IoT Sensors', 'Predictive Maintenance', 'Quality Control', 'Production Planning'],
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'Smart grid technology, renewable energy systems, and energy trading',
      specialties: ['Smart Grid', 'Energy Trading', 'Renewable Integration', 'Asset Management'],
    },
    {
      icon: Building2,
      title: 'Public Sector',
      description: 'Government services, civic technology, and public infrastructure',
      specialties: ['Citizen Services', 'Data Security', 'Infrastructure', 'Compliance'],
    },
    {
      icon: TrendingUp,
      title: 'Media & AdTech',
      description: 'Digital advertising, content delivery, and audience analytics',
      specialties: ['Ad Targeting', 'Content Delivery', 'Analytics', 'Audience Segmentation'],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deep technical expertise across the industries driving innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:border-cyan-300 dark:hover:border-cyan-600 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {industry.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Key Specialties
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industry-Specific Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our recruiters understand the unique technical requirements, compliance needs, and business challenges of each industry. We don't just match skills—we match context and experience.
          </p>
        </div>
      </div>
    </div>
  );
}
