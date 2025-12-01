import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { courseConfig } from "@/config/course-data";

export const TargetAudience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref} 
          className={`max-w-4xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Este curso é para você que...
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Desenvolvido para veterinários que buscam excelência no cuidado anestésico
          </p>

          <GlowCard className="p-8 shadow-large bg-card rounded-lg border">
            <div className="space-y-6">
              {courseConfig.targetAudience.map((point, index) => (
                <div key={index} className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-300 hover-shine">
                  <div className="bg-gradient-primary rounded-full p-2 shrink-0 shadow-medium group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed pt-1">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};
