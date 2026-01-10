import { useState } from "react";
import {
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    e.currentTarget.reset();
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
                Message sent
              </h2>
              <p className="text-neutral-400 mb-10">
                Thanks for reaching out. Someone from our team will get back to
                you shortly.
              </p>

              <button
                onClick={() => setSubmitStatus("idle")}
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-medium hover:bg-neutral-200 transition"
              >
                Send another message
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
            Let’s talk
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            Whether you’re hiring one role or building an entire team, we’ll
            help you move forward with clarity.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mt-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* LEFT: CONTEXT */}
          <div>
            <h2 className="text-3xl font-medium mb-10">
              Start a conversation
            </h2>

            <div className="space-y-8 text-neutral-400">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 mt-1 text-neutral-300" />
                <div>
                  <p className="text-white text-sm mb-1">Email</p>
                  <a
                    href="mailto:contact@repligenai.net"
                    className="hover:text-white transition"
                  >
                    contact@repligenai.net
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 mt-1 text-neutral-300" />
                <div>
                  <p className="text-white text-sm mb-1">Office</p>
                  <p>Overland Park, Kansas</p>
                </div>
              </div>

              <div className="relative mt-12 rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-neutral-300" />
                    <p className="text-white font-medium">
                      Prefer a quick call?
                    </p>
                  </div>
                  <p className="text-sm text-neutral-400 mb-6">
                    Schedule a short intro to discuss your hiring needs and see
                    if we’re a fit.
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm hover:border-neutral-500 transition">
                    Schedule a call
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div>
            <h2 className="text-3xl font-medium mb-10">Send a message</h2>

            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-10 space-y-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />

              <div className="relative z-10 space-y-6">
                <Input label="Name *" name="name" required />
                <Input label="Company *" name="company" required />
                <Input
                  label="Work email *"
                  name="workEmail"
                  type="email"
                  required
                />
                <Input
                  label="Role / skills needed *"
                  name="roleNeeded"
                  placeholder="Senior Data Engineer, Cloud Architect…"
                  required
                />

                <Select label="Timeline *" name="timeline" required>
                  <option value="">Select timeline</option>
                  <option>Immediate (within 2 weeks)</option>
                  <option>1 month</option>
                  <option>2–3 months</option>
                  <option>Planning ahead (3+ months)</option>
                </Select>

                <Textarea
                  label="Message *"
                  name="message"
                  placeholder="Tell us about your team, goals, and any specifics that matter."
                  required
                />

                <label className="flex items-start gap-3 text-sm text-neutral-400">
                  <input type="checkbox" name="consent" required />
                  I consent to RepligenAI contacting me regarding this inquiry.
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
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={16} />
                    </>
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
        rows={5}
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
