import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

import StartupLaunchOffer from "@/components/startup-mvp/StartupLaunchOffer";
import StartupMvpHero from "@/components/startup-mvp/StartupMvpHero";
import StartupProcess from "@/components/startup-mvp/StartupProcess";
import StartupRegistration from "@/components/startup-mvp/StartupRegistration";
import StartupTestimonials from "@/components/startup-mvp/StartupTestimonials";
import StartupWhyChoose from "@/components/startup-mvp/StartupWhyChoose";
import StartupFAQ from "@/components/startup-mvp/StartupFAQ";
import StartupCTA from "@/components/startup-mvp/StartupCTA";

export default function StartupMvpLaunchKitPage() {
  return (
    <>
      <Navbar />

      <main>
        <StartupMvpHero />

        <StartupLaunchOffer />

        <StartupRegistration />

        <StartupWhyChoose />

        <StartupProcess />

        <StartupTestimonials />

        <StartupFAQ />

        <StartupCTA />

        <Services excludeService="Startup/MVP Launch Kit" />
      </main>

      <Footer />
    </>
  );
}