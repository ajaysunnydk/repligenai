import { useState } from 'react';
import { MapPin, Clock, Briefcase, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import type { JobRole } from '../types';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [applicationId, setApplicationId] = useState('');

  const openRoles: JobRole[] = [
    {
      id: '1',
      title: 'Technical Recruiter - Data & AI',
      department: 'Recruiting',
      location: 'Remote (U.S.)',
      type: 'Full-time',
      description: 'Source and screen exceptional data engineers, ML engineers, and data scientists.',
    },
    {
      id: '2',
      title: 'Senior Technical Recruiter - Cloud & DevOps',
      department: 'Recruiting',
      location: 'Remote (U.S.)',
      type: 'Full-time',
      description: 'Build relationships with top-tier cloud and infrastructure talent.',
    },
    {
      id: '3',
      title: 'Recruiting Coordinator',
      department: 'Operations',
      location: 'Remote (U.S.)',
      type: 'Full-time',
      description: 'Support our recruiting team with scheduling and candidate communication.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/apply`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      form.reset();
      setSelectedRole(null);
      setApplicationId(result.applicationId);
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-2xl p-12">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Thank you for your interest in joining RepligenAi. We've received your application and will review it carefully.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
              Application ID: {applicationId}
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Help shape the future of technical recruiting. Work with cutting-edge technology and exceptional talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openRoles.map((role) => (
                <div
                  key={role.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-cyan-300 dark:hover:border-cyan-600 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {role.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {role.description}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedRole(role.id);
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                  >
                    Apply Now →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div id="application-form">
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Apply Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolioUrl"
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Role Applied For *
                </label>
                <select
                  name="roleApplied"
                  required
                  value={selectedRole || ''}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="">Select a position</option>
                  {openRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Location Preference
                </label>
                <input
                  type="text"
                  name="locationPreference"
                  placeholder="e.g., Remote, New York, etc."
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  U.S. Work Authorization
                </label>
                <select
                  name="workAuthorization"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="">Select status</option>
                  <option value="US Citizen">U.S. Citizen</option>
                  <option value="Green Card">Green Card Holder</option>
                  <option value="H1B">H-1B Visa</option>
                  <option value="EAD">EAD</option>
                  <option value="Require Sponsorship">Require Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Years of Experience
                </label>
                <input
                  type="number"
                  name="yearsExperience"
                  min="0"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Salary Expectations
                </label>
                <input
                  type="text"
                  name="salaryExpectations"
                  placeholder="e.g., $120k - $150k"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Availability Date
                </label>
                <input
                  type="date"
                  name="availabilityDate"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about yourself and why you're interested in RepligenAi..."
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Resume * (PDF, DOC, or DOCX - Max 10MB)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-50 dark:file:bg-cyan-900/30 file:text-cyan-600 dark:file:text-cyan-400 file:font-semibold hover:file:bg-cyan-100 dark:hover:file:bg-cyan-900/50"
                  />
                  <Upload className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-600"
                />
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  I consent to RepligenAi storing my information and contacting me about job opportunities. *
                </label>
              </div>

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
