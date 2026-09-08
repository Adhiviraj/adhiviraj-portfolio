import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { HardwareProject } from "@/components/sections/HardwareProject";
import { SkillsInventory } from "@/components/sections/SkillsInventory";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <Hero />
        <SelectedProjects />
        <HardwareProject />
        <SkillsInventory />
        <CredibilitySection />
        <ContactCTA />
      </main>

      <SiteFooter />
    </>
  );
}
