"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref} id="demo">
      {/* Background Effects */}
      <div className="absolute inset-0 radial-gradient" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center gradient-border">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-cyan-400">Early Access Available</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Ready to Transform Your
              <br />
              <span className="text-gradient">Financial Intelligence?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Join leading enterprises using NYX Core to turn raw accounting data
              into verified insights and executable decisions.
            </motion.p>

                        {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              action="https://formsubmit.co/connect@nyxcore.space"
              method="POST"
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            >
              <input
                type="hidden"
                name="_subject"
                value="NYX Core - Demo Request"
              />
              <input
                type="hidden"
                name="_cc"
                value="keshelavanina@gmail.com"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50"
                required
              />
              <button
                type="submit"
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-background font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                SOC 2 Compliant
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                GDPR Ready
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                On-premise Available
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
