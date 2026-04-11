"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About" },
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
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                className="group-hover:animate-pulse-glow"
              />
              <polygon
                points="20,8 28,28 20,23 12,28"
                fill="url(#logoGradient)"
                className="transition-transform group-hover:scale-110 origin-center"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            NYX <span className="text-cyan-400">Core</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-sm text-muted-foreground hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#demo"
            className="px-4 py-2 text-sm font-medium text-background bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Request Demo
          </Link>
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#demo"
                className="px-4 py-2 text-sm font-medium text-center text-background bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
