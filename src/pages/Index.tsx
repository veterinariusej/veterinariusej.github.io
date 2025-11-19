import { Hero } from "@/components/Hero";
import { TargetAudience } from "@/components/TargetAudience";
import { Program } from "@/components/Program";
import { Differentials } from "@/components/Differentials";
import { Professor } from "@/components/Professor";
import { Certification } from "@/components/Certification";
import { Enrollment } from "@/components/Enrollment";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TargetAudience />
      <Program />
      <Differentials />
      <Professor />
      <Certification />
      <Enrollment />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
