import { useState } from "react";
import {
  MapPin,
  Clock,
  Briefcase,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import type { JobRole } from "../types";

export default function Careers() {
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
      title: "Technical Recruiter – Data & AI",
      department: "Recruiting",
      location: "Remote (U.S.)",
      type: "Full-time",
      description:
        "Source and screen exceptional data engineers, ML engineers, and data scientists.",
    },
    {
      id: "2",
      title: "Senior Technical Recruiter – Cloud & DevOps",
      department: "Recruiting",
      location: "Remote (U.S.)",
      type: "Full-time",
      description:
        "Build relationships with top-tier cloud and infrastructure talent.",
    },
    {
      id: "3",
      title: "Recruiting Coordinator",
      department: "Operations",
      location: "Remote (U.S.)",
      type: "Full-time",
      description:
        "Support our recruiting team with scheduling and candidate communication.",
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
      <div className="bg-black text-white min-h-screen pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Application submitted
              </h2>
              <p className="text-neutral-400 mb-6">
                Thanks for your interest in RepligenAI. Our team will review your
                application carefully.
              </p>

              <p className="text-xs text-neutral-500 mb-8">
                Application ID: {applicationId}
              </p>

              <button
                onClick={() => setSubmitStatus("idle")}
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-medium hover:bg-neutral-200 transition"
              >
                Submit another application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- MAIN VIEW ---------------- */

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-40">
      {/* INTRO */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Build the future of hiring
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            Join a team focused on quality, clarity, and long-term impact —
            not volume recruiting.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mt-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* OPEN ROLES */}
          <div>
            <h2 className="text-3xl font-medium mb-10">Open roles</h2>
            <div className="space-y-6">
              {openRoles.map((role) => (
                <div
                  key={role.id}
                  className="relative rounded-2xl border border-neutral-800 bg-neutral-950 p-8 hover:border-neutral-600 transition"
                >
                  <h3 className="text-xl font-medium mb-3">{role.title}</h3>

                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400 mb-4">
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

                  <p className="text-neutral-400 mb-6">{role.description}</p>

                  <button
                    onClick={() => {
                      setSelectedRole(role.id);
                      document
                        .getElementById("application-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-white hover:underline"
                  >
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* APPLICATION FORM */}
          <div id="application-form">
            <h2 className="text-3xl font-medium mb-10">Apply</h2>

            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-10 space-y-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />

              <div className="relative z-10 space-y-6">
                <Input label="Full name *" name="fullName" required />
                <Input label="Email *" name="email" type="email" required />
                <Input label="Phone" name="phone" />
                <Input label="LinkedIn URL" name="linkedinUrl" />
                <Input label="Portfolio URL" name="portfolioUrl" />

                <Select
                  label="Role applied for *"
                  name="roleApplied"
                  value={selectedRole || ""}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                >
                  <option value="">Select a role</option>
                  {openRoles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title}
                    </option>
                  ))}
                </Select>

                <Input label="Location preference" name="locationPreference" />
                <Select label="U.S. work authorization" name="workAuthorization">
                  <option value="">Select status</option>
                  <option>U.S. Citizen</option>
                  <option>Green Card</option>
                  <option>H-1B</option>
                  <option>EAD</option>
                  <option>Require Sponsorship</option>
                </Select>

                <Input
                  label="Years of experience"
                  name="yearsExperience"
                  type="number"
                />

                <Input
                  label="Salary expectations"
                  name="salaryExpectations"
                />

                <Input
                  label="Availability date"
                  name="availabilityDate"
                  type="date"
                />

                <Textarea label="Message" name="message" />

                <FileInput />

                <label className="flex items-start gap-3 text-sm text-neutral-400">
                  <input type="checkbox" name="consent" required />
                  I consent to RepligenAI storing my information and contacting
                  me regarding opportunities.
                </label>

                {submitStatus === "error" && (
                  <div className="flex gap-3 p-4 border border-red-800 rounded-lg text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-white text-black px-6 py-4 text-sm font-medium hover:bg-neutral-200 transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    "Submit application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Input(props: any) {
  return (
    <div>
      <label className="block text-sm text-neutral-300 mb-2">
        {props.label}
      </label>
      <input
        {...props}
        className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-neutral-500 outline-none"
      />
    </div>
  );
}

function Textarea(props: any) {
  return (
    <div>
      <label className="block text-sm text-neutral-300 mb-2">
        {props.label}
      </label>
      <textarea
        {...props}
        rows={4}
        className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-neutral-500 outline-none resize-none"
      />
    </div>
  );
}

function Select(props: any) {
  return (
    <div>
      <label className="block text-sm text-neutral-300 mb-2">
        {props.label}
      </label>
      <select
        {...props}
        className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white focus:border-neutral-500 outline-none"
      >
        {props.children}
      </select>
    </div>
  );
}

function FileInput() {
  return (
    <div>
      <label className="block text-sm text-neutral-300 mb-2">
        Resume * (PDF, DOC, DOCX)
      </label>
      <div className="relative">
        <input
          type="file"
          name="resume"
          required
          className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white"
        />
        <Upload className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
      </div>
    </div>
  );
}
