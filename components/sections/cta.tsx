"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >

          <h2 className="text-3xl font-bold text-white mb-4">
            Request Demo
          </h2>

          <p className="text-gray-400 mb-8">
            Fill the form and we will contact you
          </p>

          <form
            action="https://formspree.io/f/meepyjjl"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* SUBJECT */}
            <input
              type="hidden"
              name="_subject"
              value="NYX Core - Demo Request"
            />

            {/* RESPONSE SETTINGS */}
            <input type="hidden" name="_captcha" value="false" />

            {/* მთავარი email (Formspree destination = dashboard email) */}
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-black border border-gray-700 text-white"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg"
            >
              Send <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  );
}
