import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MapPin,
  Clock,
  Briefcase,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  Terminal
} from "lucide-react";
import type { JobRole } from "../types";

export default function Careers({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [applicationId, setApplicationId] = useState("");

  const openRoles: JobRole[] = [
    {
      id: "1",
      title: "Senior Enterprise Architect",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-time",
      description:
        "Design scalable, fault-tolerant enterprise systems that serve as the backbone for Fortune 500 operations.",
    },
    {
      id: "2",
      title: "Platform Infrastructure Engineer",
      department: "DevOps",
      location: "Remote (Global)",
      type: "Full-time",
      description:
        "Build and govern CI/CD pipelines, Kubernetes clusters, and cloud-native architectures with structural rigor.",
    },
    {
      id: "3",
      title: "Technical Product Manager",
      department: "Product",
      location: "Remote (Global)",
      type: "Full-time",
      description:
        "Align engineering execution with long-term strategic goals for enterprise platform capabilities.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/apply`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      form.reset();
      setSelectedRole(null);
      setApplicationId(result.applicationId);
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- SUCCESS STATE ---------------- */

  if (submitStatus === "success") {
    return (
      <>
        <Navbar onNavigate={onNavigate} />
        <div className="bg-enterprise-dark min-h-screen pt-40 pb-32">
          <div className="max-w-3xl mx-auto px-6">
            <div className="relative rounded-3xl border border-brand-500/30 bg-enterprise-darker p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent pointer-events-none rounded-3xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full border border-brand-500/50 bg-brand-500/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-brand-400" />
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                  Application Received
                </h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Thank you for your interest in joining the core engineering group at RepligenAI. We will review your application with structural rigor.
                </p>

                <p className="text-xs text-brand-400 mb-10 tracking-widest uppercase bg-brand-500/10 inline-block px-4 py-2 rounded border border-brand-500/20">
                  Tracking ID: {applicationId}
                </p>

                <br/>

                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-brand-500 hover:bg-brand-400 text-enterprise-darker px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] flex items-center gap-3 mx-auto uppercase"
                >
                  Return to Open Roles
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer onNavigate={onNavigate} />
      </>
    );
  }

  /* ---------------- MAIN VIEW ---------------- */

  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="bg-enterprise-dark min-h-screen pt-32 pb-40">
        
        {/* INTRO */}
        <section className="px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10 pt-16">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase text-brand-400 tracking-[0.2em] mb-6 text-sm font-semibold flex justify-center items-center gap-2"
            >
              <Terminal size={16} /> Engineering Ecosystem
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8"
            >
              Join the Core <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Engineering Group</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed border-t border-white/10 pt-8"
            >
              We are seeking engineers, architects, and product builders who value long-term structural integrity over short-term hacks.
            </motion.p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mt-32 px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            {/* OPEN ROLES */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-display font-semibold text-white mb-10 flex items-center gap-4">
                Open Requisitions <span className="text-sm font-normal text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">{openRoles.length} Roles</span>
              </h2>
              <div className="space-y-6">
                {openRoles.map((role) => (
                  <div
                    key={role.id}
                    className="group relative rounded-2xl border border-white/5 bg-enterprise-darker p-8 hover:border-brand-500/30 transition duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                    <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors">{role.title}</h3>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6 bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-brand-500" />
                        {role.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-500" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-500" />
                        {role.type}
                      </span>
                    </div>

                    <p className="text-slate-400 mb-8 font-light leading-relaxed">{role.description}</p>

                    <button
                      onClick={() => {
                        setSelectedRole(role.id);
                        document
                          .getElementById("application-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm font-bold uppercase tracking-widest text-brand-400 hover:text-brand-300 flex items-center gap-2 transition-colors"
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* APPLICATION FORM */}
            <motion.div 
              id="application-form"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-display font-semibold text-white mb-10">Application Portal</h2>

              <form
                onSubmit={handleSubmit}
                className="relative rounded-3xl border border-white/10 bg-enterprise-darker p-10 space-y-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />

                <div className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Full Name *" name="fullName" required />
                    <Input label="Email *" name="email" type="email" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Phone" name="phone" />
                    <Input label="Location Preference" name="locationPreference" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="LinkedIn Profile URL" name="linkedinUrl" />
                    <Input label="GitHub/Portfolio URL" name="portfolioUrl" />
                  </div>

                  <div className="h-px bg-white/10 my-6"></div>

                  <Select
                    label="Select Requisition *"
                    name="roleApplied"
                    value={selectedRole || ""}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    required
                  >
                    <option value="" className="bg-enterprise-dark">Select a role</option>
                    {openRoles.map((r) => (
                      <option key={r.id} value={r.id} className="bg-enterprise-dark">
                        {r.title}
                      </option>
                    ))}
                  </Select>

                  <Select label="Work Authorization" name="workAuthorization">
                    <option value="" className="bg-enterprise-dark">Select status</option>
                    <option className="bg-enterprise-dark">U.S. Citizen</option>
                    <option className="bg-enterprise-dark">Green Card</option>
                    <option className="bg-enterprise-dark">H-1B</option>
                    <option className="bg-enterprise-dark">EAD</option>
                    <option className="bg-enterprise-dark">Require Sponsorship</option>
                  </Select>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Input
                      label="Years Experience"
                      name="yearsExperience"
                      type="number"
                    />
                    <Input
                      label="Expected Salary"
                      name="salaryExpectations"
                    />
                    <Input
                      label="Availability Date"
                      name="availabilityDate"
                      type="date"
                    />
                  </div>

                  <Textarea label="Cover Letter / Message" name="message" />

                  <FileInput />

                  <label className="flex items-start gap-3 text-sm text-slate-400 mt-6 bg-white/5 p-4 rounded-lg border border-white/5">
                    <input type="checkbox" name="consent" required className="mt-1 accent-brand-500" />
                    I consent to RepligenAI storing my engineering profile and contacting me regarding enterprise opportunities.
                  </label>

                  {submitStatus === "error" && (
                    <div className="flex gap-3 p-4 border border-red-800/50 bg-red-900/10 rounded-lg text-red-400 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-500 hover:bg-brand-400 text-enterprise-darker px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] flex items-center justify-center gap-2 uppercase mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      "Submit Profile"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Input(props: any) {
  return (
    <div>
      <label className="block text-sm text-slate-400 mb-2 font-medium">
        {props.label}
      </label>
      <input
        {...props}
        className="w-full bg-enterprise-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 outline-none transition-colors"
      />
    </div>
  );
}

function Textarea(props: any) {
  return (
    <div>
      <label className="block text-sm text-slate-400 mb-2 font-medium">
        {props.label}
      </label>
      <textarea
        {...props}
        rows={4}
        className="w-full bg-enterprise-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 outline-none resize-none transition-colors"
      />
    </div>
  );
}

function Select(props: any) {
  return (
    <div>
      <label className="block text-sm text-slate-400 mb-2 font-medium">
        {props.label}
      </label>
      <select
        {...props}
        className="w-full bg-enterprise-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-500 outline-none transition-colors appearance-none"
      >
        {props.children}
      </select>
    </div>
  );
}

function FileInput() {
  return (
    <div>
      <label className="block text-sm text-slate-400 mb-2 font-medium">
        Resume Document (PDF, DOCX) *
      </label>
      <div className="relative group">
        <input
          type="file"
          name="resume"
          required
          className="w-full bg-enterprise-dark border border-white/10 rounded-lg px-4 py-3 text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-500/10 file:text-brand-400 hover:file:bg-brand-500/20 cursor-pointer focus:border-brand-500 outline-none transition-colors"
        />
        <Upload className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none group-hover:text-brand-400 transition-colors" />
      </div>
    </div>
  );
}
