import { Database, Brain, Cloud, Code, Briefcase, Lock, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Database,
      title: 'Data & AI',
      description: 'Build high-performance data platforms and intelligent systems',
      roles: [
        'Data Engineers',
        'Data Scientists',
        'ML Engineers',
        'Analytics Engineers',
        'MLOps Engineers',
      ],
      benefits: [
        'Expertise in modern data stacks (Snowflake, Databricks, dbt)',
        'End-to-end ML lifecycle management',
        'Real-time streaming and batch processing',
        'Advanced analytics and predictive modeling',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scale your infrastructure with expert cloud and platform engineers',
      roles: [
        'DevOps Engineers',
        'Cloud Architects',
        'SRE / Platform Engineers',
        'Infrastructure Engineers',
        'AWS / Azure / GCP Specialists',
      ],
      benefits: [
        'Multi-cloud and hybrid cloud expertise',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'CI/CD pipeline design and optimization',
        'Container orchestration (Kubernetes, ECS)',
      ],
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Build robust, scalable backend systems with enterprise-grade quality',
      roles: [
        'Java Developers',
        '.NET Engineers',
        'Backend Architects',
        'API Developers',
        'Microservices Engineers',
      ],
      benefits: [
        'Spring Boot, Java EE, .NET Core expertise',
        'Microservices and distributed systems',
        'RESTful and GraphQL API design',
        'Performance optimization and scalability',
      ],
    },
    {
      icon: Briefcase,
      title: 'Enterprise Platforms',
      description: 'Transform business operations with SAP and ServiceNow specialists',
      roles: [
        'SAP Consultants',
        'ServiceNow Developers',
        'ERP Architects',
        'Integration Specialists',
        'Implementation Managers',
      ],
      benefits: [
        'SAP S/4HANA, ECC, and BTP',
        'ServiceNow ITSM, ITOM, and custom apps',
        'System integration and data migration',
        'Change management and training',
      ],
    },
    {
      icon: Lock,
      title: 'Cybersecurity & QA',
      description: 'Secure your systems and ensure quality with expert security and QA talent',
      roles: [
        'Security Engineers',
        'QA Engineers',
        'Penetration Testers',
        'Compliance Specialists',
        'Test Automation Engineers',
      ],
      benefits: [
        'Application and infrastructure security',
        'Automated and manual testing',
        'Compliance frameworks (SOC 2, HIPAA, GDPR)',
        'Security audits and vulnerability assessments',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Specialized technical staffing across the most in-demand skills and platforms
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Example Roles
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {service.roles.map((role) => (
                        <span
                          key={role}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12 h-full min-h-[400px] flex items-center justify-center">
                    <Icon className="w-48 h-48 text-gray-300 dark:text-gray-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Don't see what you need?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We work across a wide range of technologies and specializations. Let's discuss your specific requirements.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
