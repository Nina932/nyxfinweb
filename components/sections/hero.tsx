"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Brain } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "99.9%", label: "Data Integrity", icon: Shield },
  { value: "<50ms", label: "Query Latency", icon: Zap },
  { value: "710+", label: "Knowledge Nodes", icon: Brain },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 radial-gradient" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full status-pulse" />
              <span className="text-sm text-muted-foreground">
                Financial Intelligence Platform
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">The Decision Layer</span>
              <br />
              <span className="text-gradient">for Financial Data</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Transform raw accounting data into verified insights and executable
              decisions using our hybrid symbolic-neural architecture. NYX Core
              doesn&apos;t just analyze — it understands, detects, simulates, and
              recommends.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#demo"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-background font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#video"
                className="group inline-flex items-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                <Play className="w-4 h-4" />
                Watch Overview
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden glow-cyan">
              {/* Video Container */}
              <div className="video-container aspect-video bg-card">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strategic-map-4gSu7AR3CTpvD1uVQ9NB0E0EexHsBj.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              
              {/* Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="glass px-3 py-1.5 rounded-lg">
                  <span className="text-xs text-emerald-400 font-mono">
                    LIVE_SYNC
                  </span>
                </div>
                <div className="glass px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">
                    12 Active Nodes
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-white">Forensic Integrity</span>
              </div>
              <div className="text-2xl font-bold text-emerald-400">94.2%</div>
              <div className="text-xs text-muted-foreground">+2.1% vs prior period</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 glass-card p-4 rounded-xl max-w-[180px]"
            >
              <div className="text-xs text-cyan-400 font-mono mb-1">REASONING HUB</div>
              <div className="text-sm text-white mb-2">Engine Synchronized</div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-xs text-muted-foreground">Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
