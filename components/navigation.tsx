"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_SVG = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:36px"><defs><filter id="ng" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="6" result="b1"/><feGaussianBlur stdDeviation="12" result="b2"/><feMerge><feMergeNode in="b2"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g stroke="#1E3D5A" stroke-width="0.7" fill="none" opacity="0.3"><polygon points="91,74.4 82,90 64,90 55,74.4 64,58.8 82,58.8"><animate attributeName="stroke-opacity" values="0.3;0.12;0.3" dur="4s" repeatCount="indefinite"/></polygon><polygon points="118,58.8 109,74.4 91,74.4 82,58.8 91,43.2 109,43.2"><animate attributeName="stroke-opacity" values="0.3;0.12;0.3" dur="4s" begin="0.5s" repeatCount="indefinite"/></polygon><polygon points="118,90 109,105.6 91,105.6 82,90 91,74.4 109,74.4"><animate attributeName="stroke-opacity" values="0.3;0.12;0.3" dur="4s" begin="1s" repeatCount="indefinite"/></polygon><polygon points="118,121.2 109,136.8 91,136.8 82,121.2 91,105.6 109,105.6"><animate attributeName="stroke-opacity" values="0.3;0.12;0.3" dur="4s" begin="1.5s" repeatCount="indefinite"/></polygon><polygon points="145,74.4 136,90 118,90 109,74.4 118,58.8 136,58.8"><animate attributeName="stroke-opacity" values="0.3;0.12;0.3" dur="4s" begin="2s" repeatCount="indefinite"/></polygon><polygon points="145,105.6 136,121.2 118,121.2 109,105.6 118,90 136,90"><animate attributeName="stroke-opacity" values="0.3;0.12;0.3" dur="4s" begin="2.5s" repeatCount="indefinite"/></polygon></g><polygon points="100,42 142,66 142,114 100,138 58,114 58,66" fill="#00C8FF" opacity="0.04"/><polygon points="100,30 150,60 150,120 100,150 50,120 50,60" stroke="#00E5FF" stroke-width="1" fill="none" opacity="0"><animate attributeName="opacity" values="0;0.3;0" dur="3s" repeatCount="indefinite"/></polygon><polygon points="100,25 155,57.5 155,122.5 100,155 45,122.5 45,57.5" stroke="#00E5FF" stroke-width="0.5" fill="none" opacity="0"><animate attributeName="opacity" values="0;0.15;0" dur="3s" begin="0.5s" repeatCount="indefinite"/></polygon><polygon points="100,42 142,66 142,114 100,138 58,114 58,66" stroke="#00E5FF" stroke-width="3" fill="none" filter="url(#ng)"><animate attributeName="stroke-opacity" values="1;0.65;1" dur="3s" repeatCount="indefinite"/></polygon></svg>`;

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#platform", label: "Platform" },
  { href: "#pipeline", label: "How It Works" },
  { href: "#modules", label: "Modules" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative transition-transform group-hover:scale-110"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
          />
          <span className="text-xl font-bold text-white tracking-tight">
            NYX <span className="text-cyan-400">Core</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-background bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-center text-background bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
