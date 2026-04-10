"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Stethoscope,
  Target,
  Compass,
  LineChart,
  Activity,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

const pipelineStages = [
  {
    icon: Stethoscope,
    name: "DIAGNOSIS",
    description: "Analyze data health and identify anomalies",
    status: "active",
  },
  {
    icon: Target,
    name: "DECISION",
    description: "Generate actionable recommendations",
    status: "ready",
  },
  {
    icon: Compass,
    name: "STRATEGY",
    description: "Map strategic options and pathways",
    status: "ready",
  },
  {
    icon: LineChart,
    name: "SIMULATION",
    description: "Model outcomes and scenarios",
    status: "ready",
  },
  {
    icon: Activity,
    name: "MONITORING",
    description: "Track execution and drift",
    status: "ready",
  },
  {
    icon: GraduationCap,
    name: "LEARNING",
    description: "Calibrate models from feedback",
    status: "ready",
  },
  {
    icon: Lightbulb,
    name: "ANALOGY",
    description: "Apply patterns across contexts",
    status: "ready",
  },
];

export function Pipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref} id="pipeline">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-emerald-400 text-sm font-mono tracking-wider mb-4 block">
            INTELLIGENCE PIPELINE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Multi-Agent Reasoning Architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Seven specialized agents orchestrated in a continuous intelligence loop,
            each contributing unique capabilities to the decision-making process.
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute inset-0 h-full origin-left flow-line"
            />
          </div>

          {/* Pipeline Stages */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                <div className="glass-card p-4 rounded-xl text-center card-hover relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all ${
                      stage.status === "active"
                        ? "bg-cyan-500/20 glow-cyan"
                        : "bg-white/5 group-hover:bg-cyan-500/10"
                    }`}
                  >
                    <stage.icon
                      className={`w-6 h-6 ${
                        stage.status === "active"
                          ? "text-cyan-400"
                          : "text-muted-foreground group-hover:text-cyan-400"
                      } transition-colors`}
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-xs font-mono text-white mb-1 tracking-wider">
                    {stage.name}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">
                    {stage.description}
                  </p>

                  {/* Status Indicator */}
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        stage.status === "active"
                          ? "bg-cyan-400 animate-pulse"
                          : "bg-emerald-400/50"
                      }`}
                    />
                    <span className="text-[10px] text-muted-foreground uppercase">
                      {stage.status}
                    </span>
                  </div>
                </div>

                {/* Arrow (except last) */}
                {index < pipelineStages.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 translate-x-1/2 z-20">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="text-cyan-500/50"
                    >
                      <path
                        d="M6 4l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Execution Latency", value: "42ms" },
            { label: "Pipeline Depth", value: "4.2 levels" },
            { label: "Active Replicators", value: "3" },
            { label: "System Status", value: "NOMINAL" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 rounded-xl text-center">
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
