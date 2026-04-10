"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Network,
  Brain,
  GitBranch,
  Target,
  BarChart3,
  Shield,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Data Warehouse",
    description:
      "Unified financial data lake with intelligent schema detection and automatic normalization across ERP systems.",
    color: "cyan",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description:
      "710+ financial ontology nodes connecting accounts, ratios, standards, and business entities semantically.",
    color: "emerald",
  },
  {
    icon: Brain,
    title: "Vector Intelligence",
    description:
      "2,344+ embeddings in ChromaDB for semantic search, similarity matching, and contextual retrieval.",
    color: "cyan",
  },
  {
    icon: GitBranch,
    title: "Data Lineage",
    description:
      "End-to-end traceability from source ERP to final report with provenance verification and audit trails.",
    color: "emerald",
  },
  {
    icon: Target,
    title: "Decision Engine",
    description:
      "Causal inference and counterfactual reasoning to generate actionable recommendations with confidence scores.",
    color: "cyan",
  },
  {
    icon: BarChart3,
    title: "Analytics Center",
    description:
      "Pre-built financial analysis templates including waterfall charts, profitability matrices, and KPI dashboards.",
    color: "emerald",
  },
  {
    icon: Shield,
    title: "Compliance Audit",
    description:
      "IFRS/GAAP standard compliance checking with automated variance analysis and exception reporting.",
    color: "cyan",
  },
  {
    icon: Workflow,
    title: "Agent Orchestrator",
    description:
      "Multi-agent reasoning pipeline: Diagnosis → Decision → Strategy → Simulation → Monitoring → Learning.",
    color: "emerald",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-wider mb-4 block">
            PLATFORM CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Financial Intelligence Stack
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Eight interconnected modules working together to transform raw data
            into strategic decisions with full auditability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-card p-6 rounded-xl card-hover"
            >
              <div
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  feature.color === "cyan"
                    ? "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                    : "bg-emerald-500/10 group-hover:bg-emerald-500/20"
                } transition-colors`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.color === "cyan" ? "text-cyan-400" : "text-emerald-400"
                  }`}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
