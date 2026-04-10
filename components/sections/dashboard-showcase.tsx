"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const dashboards = [
  {
    id: "strategic",
    title: "Sovereign Strategic Dashboard",
    description:
      "Real-time KPIs, forensic integrity scores, and operational intelligence with geographic supply chain visualization.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard-main-1Mnybs14ly0ETZOsVCQvid0IjwO6Wq.png",
    features: ["Total Revenue Tracking", "Operating Margin", "EBITDA Efficiency", "Macro Pulse Monitoring"],
  },
  {
    id: "lineage",
    title: "Operational Data Lineage",
    description:
      "End-to-end financial traceability and provenance tracking from ERP source to consolidated statements.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-lineage-iDbEcu0EbJHDXGbnUf1ODiC3OYN4pP.png",
    features: ["Provenance Guard", "4.2 Level Depth", "Audit Readiness", "42ms Trace Latency"],
  },
  {
    id: "orchestrator",
    title: "Agent Workflow Orchestrator",
    description:
      "Multi-agent intelligence pipeline orchestrating diagnosis, decision, strategy, simulation, and learning phases.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orchestrator-jvY3TEc75nq5JgdsZHPSiLX5mugwL0.png",
    features: ["7-Stage Pipeline", "Composable Workflows", "Real-time Execution Log", "Matrix Population"],
  },
  {
    id: "subledger",
    title: "Sub-Ledger Analysis",
    description:
      "AR/AP aging distributions, concentration risk heatmaps, and working capital optimization insights.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sub-ledgeranalysis-Wrdy6M5ppCOUMuBfelXtLo3qTjF0qe.png",
    features: ["AR vs AP Aging", "Concentration Risk", "DSO/DPO Metrics", "Net Position Tracking"],
  },
];

export function DashboardShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("strategic");

  const activeDashboard = dashboards.find((d) => d.id === activeTab);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 radial-gradient opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-cyan-400 text-sm font-mono tracking-wider mb-4 block">
            COMMAND CENTER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligence at Your Fingertips
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every dashboard built for speed, clarity, and actionable insight. See the
            decision layer in action.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() => setActiveTab(dashboard.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === dashboard.id
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {dashboard.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </motion.div>

        {/* Dashboard Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-5 gap-8 items-start"
        >
          {/* Dashboard Image */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-xl overflow-hidden gradient-border glow-cyan">
              <Image
                src={activeDashboard?.image || dashboards[0].image}
                alt={activeDashboard?.title || "Dashboard"}
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform group">
                <Play className="w-6 h-6 text-cyan-400 ml-1 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Dashboard Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {activeDashboard?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeDashboard?.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <span className="text-xs text-cyan-400 font-mono">KEY CAPABILITIES</span>
              <div className="grid grid-cols-2 gap-3">
                {activeDashboard?.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Explore this dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
