"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Hexagonal teal logo SVG
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" fill="none" viewBox="0 0 48 46"><path fill="#00d4aa" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/></svg>`;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
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
          <div 
            className="relative w-10 h-10 transition-transform group-hover:scale-110"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
          />
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
