import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  MessageSquare,
  Phone
} from "lucide-react";

export default function Contact({ onNavigate }: { onNavigate: (page: string) => void }) {
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

    const form = e.currentTarget;
    const formData = new FormData(form);
    // You will need to add VITE_WEB3FORMS_ACCESS_KEY to your .env file
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "3bb6459f-b0e6-46e4-b528-2529ba83bbe9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Failed to transmit inquiry.");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
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
                  Transmission Successful
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                  Thank you for initiating contact. A RepligenAI engagement director will review your inquiry and respond shortly.
                </p>

                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-brand-500 hover:bg-brand-400 text-enterprise-darker px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] flex items-center gap-3 mx-auto uppercase"
                >
                  Initiate Another Request
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
              <MessageSquare size={16} /> Contact Us
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8"
            >
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed border-t border-white/10 pt-8"
            >
              We assist organizations in accelerating innovation by providing exceptional IT staffing and technology solutions tailored for the modern digital enterprise. Let us help you streamline your business communication and drive meaningful process improvements.
            </motion.p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mt-32 px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-20">
            {/* LEFT: CONTEXT */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-display font-semibold text-white mb-10">
                Contact Information
              </h2>

              <div className="space-y-8 text-slate-400">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-400" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white text-sm mb-1 font-medium tracking-wide">Our Office Address</p>
                    <p>8101 College Blvd. <br/> Overland Park, Kansas, USA</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-colors">
                    <Phone className="w-5 h-5 text-brand-400" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white text-sm mb-1 font-medium tracking-wide">Call Us Anytime</p>
                    <a
                      href="tel:+19134487265"
                      className="hover:text-brand-400 transition-colors"
                    >
                      +1 (913) 448-7265
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-colors">
                    <Mail className="w-5 h-5 text-brand-400" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white text-sm mb-1 font-medium tracking-wide">Send An Email</p>
                    <a
                      href="mailto:info@repligenai.net"
                      className="hover:text-brand-400 transition-colors"
                    >
                      info@repligenai.net
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-display font-semibold text-white mb-10">Secure Message Portal</h2>

              <form
                onSubmit={handleSubmit}
                className="relative rounded-3xl border border-white/10 bg-enterprise-darker p-10 lg:p-12 space-y-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />

                <div className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Primary Contact *" name="name" required />
                    <Input label="Organization *" name="company" required />
                  </div>
                  
                  <Input
                    label="Corporate Email *"
                    name="workEmail"
                    type="email"
                    required
                  />

                  <Select label="Inquiry Type *" name="inquiryType" required>
                    <option value="" className="bg-enterprise-dark">Select subject</option>
                    <option className="bg-enterprise-dark">Enterprise Platform Engineering</option>
                    <option className="bg-enterprise-dark">Cloud Infrastructure & DevOps</option>
                    <option className="bg-enterprise-dark">Data & Analytics Systems</option>
                    <option className="bg-enterprise-dark">Technical Audit & Advisory</option>
                    <option className="bg-enterprise-dark">Other</option>
                  </Select>

                  <Textarea
                    label="Project Specifications *"
                    name="message"
                    placeholder="Provide details regarding your technical requirements, architectural goals, and desired outcomes."
                    required
                  />

                  <label className="flex items-start gap-3 text-sm text-slate-400 bg-white/5 p-4 rounded-lg border border-white/5 mt-6">
                    <input type="checkbox" name="consent" required className="mt-1 accent-brand-500" />
                    I consent to RepligenAI processing this information for the purpose of enterprise technical consultation.
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
                    className="w-full bg-brand-500 hover:bg-brand-400 text-enterprise-darker px-8 py-5 text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] flex items-center justify-center gap-3 uppercase mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Transmit Inquiry
                        <ArrowRight size={18} />
                      </>
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
        rows={5}
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
