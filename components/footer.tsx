import { Github, Linkedin, Twitter } from "lucide-react";

const LOGO_SVG = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:36px"><defs><filter id="ng-footer" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="6" result="b1"/><feGaussianBlur stdDeviation="12" result="b2"/><feMerge><feMergeNode in="b2"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g stroke="#1E3D5A" stroke-width="0.7" fill="none" opacity="0.3"><polygon points="91,74.4 82,90 64,90 55,74.4 64,58.8 82,58.8"/><polygon points="118,58.8 109,74.4 91,74.4 82,58.8 91,43.2 109,43.2"/><polygon points="118,90 109,105.6 91,105.6 82,90 91,74.4 109,74.4"/><polygon points="118,121.2 109,136.8 91,136.8 82,121.2 91,105.6 109,105.6"/><polygon points="145,74.4 136,90 118,90 109,74.4 118,58.8 136,58.8"/><polygon points="145,105.6 136,121.2 118,121.2 109,105.6 118,90 136,90"/></g><polygon points="100,42 142,66 142,114 100,138 58,114 58,66" fill="#00C8FF" opacity="0.04"/><polygon points="100,42 142,66 142,114 100,138 58,114 58,66" stroke="#00E5FF" stroke-width="3" fill="none" filter="url(#ng-footer)"/></svg>`;

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Platform", href: "#platform" },
    { label: "How It Works", href: "#pipeline" },
    { label: "Modules", href: "#modules" },
  ],
  company: [
    { label: "Contact", href: "#contact" },
    { label: "Request Demo", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div dangerouslySetInnerHTML={{ __html: LOGO_SVG }} />
              <span className="text-xl font-bold text-white">
                NYX <span className="text-cyan-400">Core</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              The Financial Intelligence Platform. Transform raw accounting data
              into verified insights and executable decisions.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NYX Core. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
