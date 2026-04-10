"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Receipt,
  Building2,
  Wallet,
  Leaf,
  Database,
  Network,
  Settings,
} from "lucide-react";

const modules = [
  {
    id: "receivable",
    title: "Accounts Receivable",
    icon: TrendingUp,
    metrics: [
      { label: "Total Receivables", value: "$980.0K" },
      { label: "DSO", value: "26 days" },
      { label: "Collection Risk", value: "Low" },
    ],
    color: "cyan",
    span: "col-span-12 md:col-span-6 lg:col-span-3",
  },
  {
    id: "payable",
    title: "Accounts Payable",
    icon: Receipt,
    metrics: [
      { label: "Total Payables", value: "$720.0K" },
      { label: "DPO", value: "15 days" },
      { label: "Invoices", value: "5 pending" },
    ],
    color: "amber",
    span: "col-span-12 md:col-span-6 lg:col-span-3",
  },
  {
    id: "assets",
    title: "Fixed Assets",
    icon: Building2,
    metrics: [
      { label: "Total Assets", value: "--" },
      { label: "Depreciation", value: "0%" },
      { label: "Net Book Value", value: "$0" },
    ],
    color: "purple",
    span: "col-span-12 md:col-span-6 lg:col-span-3",
  },
  {
    id: "working",
    title: "Working Capital",
    icon: Wallet,
    metrics: [
      { label: "Net Working Capital", value: "--" },
      { label: "Cash Conversion", value: "0 days" },
      { label: "Net Position", value: "+$260.0K" },
    ],
    color: "emerald",
    span: "col-span-12 md:col-span-6 lg:col-span-3",
  },
  {
    id: "esg",
    title: "ESG & Sustainability",
    description: "Environmental, Social & Governance scoring with carbon footprint tracking",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/esg-Omhv9v16YxJ3GSLMetJArQQMOIXkyC.png",
    icon: Leaf,
    span: "col-span-12 lg:col-span-6",
  },
  {
    id: "ontology",
    title: "Financial Ontology",
    description: "Knowledge graph explorer with IFRS standards mapping and account relationships",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ontology-ZcsCgkxuQSMM2iA8AZyzBBUnaMXa57.png",
    icon: Network,
    span: "col-span-12 lg:col-span-6",
  },
  {
    id: "warehouse",
    title: "Data Warehouse",
    description: "Pre-built analytics with AI data agent for natural language queries",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/warehouse-1VBsakAXsBNnl3p0eWZWii3xq8JZG0.png",
    icon: Database,
    span: "col-span-12 lg:col-span-8",
  },
  {
    id: "system",
    title: "System Infrastructure",
    description: "Agent registry, knowledge graph stats, and LLM stack configuration",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/system-xV95jo6yT2iMGGsYrkHadS3ZuPZRpw.png",
    icon: Settings,
    span: "col-span-12 lg:col-span-4",
  },
];

const colorMap = {
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400",
  amber: "from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-400",
  purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
  emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
};

export function ModulesBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref} id="modules">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-wider mb-4 block">
            PLATFORM MODULES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Every Financial Dimension Covered
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Specialized modules for each area of financial operations, from
            sub-ledger analysis to ESG compliance.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className={`${module.span} glass-card rounded-xl overflow-hidden card-hover`}
            >
              {module.image ? (
                /* Large Module with Image */
                <div className="h-full">
                  <div className="p-4 flex items-center gap-3 border-b border-border">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <module.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {module.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-[16/9] lg:aspect-[2/1]">
                    <Image
                      src={module.image}
                      alt={module.title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                </div>
              ) : (
                /* Small Metric Module */
                <div
                  className={`h-full p-4 bg-gradient-to-br ${
                    colorMap[module.color as keyof typeof colorMap]
                  } border`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <module.icon className="w-4 h-4" />
                    <h3 className="text-sm font-semibold text-white">
                      {module.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {module.metrics?.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="text-white font-medium">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
