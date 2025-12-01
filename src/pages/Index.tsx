import { 
  Hero, 
  TargetAudience, 
  Program, 
  Differentials, 
  Professor, 
  Certification, 
  EnrollmentForm, 
  FAQ, 
  FinalCTA 
} from "@/components/sections";
import { Footer, StickyMobileCTA } from "@/components/layout";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TargetAudience />
      <Program />
      <Differentials />
      <Professor />
      <Certification />
      <EnrollmentForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
