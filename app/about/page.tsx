import { AboutHero } from "@/features/about/components/AboutHero";
import { TheChallenge } from "@/features/about/components/TheChallenge";
import { OurApproach } from "@/features/about/components/OurApproach";
import { AllySection } from "@/features/about/components/AllySection";
import { TransparencyFramework } from "@/features/about/components/TransparencyFramework";
import { ClosingCTA } from "@/features/home/components/ClosingCTA";

export const metadata = {
  title: 'About Us | YEIB',
  description: 'Learn about the Youth Entrepreneurship Investment Bank (YEIB) and our mission to bridge the capital gap for young Nigerian founders.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <TheChallenge />
      <OurApproach />
      <AllySection />
      <TransparencyFramework />
      <ClosingCTA />
    </div>
  );
}
