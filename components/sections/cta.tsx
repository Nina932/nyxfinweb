"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.interest) return;
    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setStatus("success");
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#0d1b2a] border border-border rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm";

  return (
    <section className="py-24 relative overflow-hidden" ref={ref} id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 radial-gradient" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400">Early Access Available</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance leading-tight">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ready to see NYX Core in action? Let&apos;s talk.
              </p>

              {/* Trust indicators */}
              <div className="space-y-4">
                {[
                  { label: "SOC 2 Type II Compliant", sub: "Enterprise-grade security" },
                  { label: "GDPR & IFRS Ready", sub: "Full regulatory alignment" },
                  { label: "On-premise or Cloud", sub: "Deploy your way" },
                  { label: "Dedicated Onboarding", sub: "White-glove implementation" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="glass-card rounded-2xl p-8 gradient-border">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Request Received</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thank you! Our team will reach out within one business day to schedule your demo.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", interest: "", message: "" }); }}
                      className="mt-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className={inputClass}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className={inputClass}
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label htmlFor="interest" className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Interest <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={form.interest}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="demo">Request Demo</option>
                        <option value="investment">Investment Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="enterprise">Enterprise License</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your use case or any questions you have..."
                        value={form.message}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-70 flex items-center justify-center gap-2 text-sm"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Demo
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
