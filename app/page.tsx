import StartupMvpHero from "@/components/startup-mvp/StartupMvpHero";
import StartupLaunchOffer from "@/components/startup-mvp/StartupLaunchOffer";
import StartupAdvancedGrowth from "@/components/startup-mvp/StartupAdvancedGrowth";
import StartupAiSolutions from "@/components/startup-mvp/StartupAiSolutions";
import StartupProcess from "@/components/startup-mvp/StartupProcess";
import StartupWhyChoose from "@/components/startup-mvp/StartupWhyChoose";
import StartupTestimonials from "@/components/startup-mvp/StartupTestimonials";
import StartupRegistration from "@/components/startup-mvp/StartupRegistration";
import StartupFAQ from "@/components/startup-mvp/StartupFAQ";
import StartupCTA from "@/components/startup-mvp/StartupCTA";

export default function Home() {
  return (
    <>
      <StartupMvpHero />
      <StartupLaunchOffer />
      <StartupAdvancedGrowth />
      <StartupAiSolutions />
      <StartupProcess />
      <StartupWhyChoose />
      <StartupTestimonials />
      <StartupRegistration />
      <StartupFAQ />
      <StartupCTA />
    </>
  );
}
