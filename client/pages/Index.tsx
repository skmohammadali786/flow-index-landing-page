import { HeroSection } from "@/components/sections/HeroSection";
import { CoreTrackingSection } from "@/components/sections/CoreTrackingSection";
import { HealthWellnessSection } from "@/components/sections/HealthWellnessSection";
import { SmartInsightsSection } from "@/components/sections/SmartInsightsSection";
import { CognitiveSection } from "@/components/sections/CognitiveSection";
import { ClinicalSection } from "@/components/sections/ClinicalSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Index() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <CoreTrackingSection />
      <HealthWellnessSection />
      <SmartInsightsSection />
      <CognitiveSection />
      <ClinicalSection />
      <PartnerSection />
      <PrivacySection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  );
}
