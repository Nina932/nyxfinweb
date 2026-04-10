import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { DashboardShowcase } from "@/components/sections/dashboard-showcase";
import { Pipeline } from "@/components/sections/pipeline";
import { ModulesBento } from "@/components/sections/modules-bento";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <DashboardShowcase />
      <Pipeline />
      <ModulesBento />
      <CTA />
      <Footer />
    </main>
  );
}
