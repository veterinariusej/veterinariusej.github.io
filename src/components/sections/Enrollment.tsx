import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Tag, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";

export const Enrollment = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="enrollment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref} 
          className={`max-w-4xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-accent" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2" />
              Primeiro Lote
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investimento no seu futuro
            </h2>
            <p className="text-muted-foreground text-lg">
              Garanta sua vaga no primeiro lote
            </p>
          </div>

          {/* Pricing Card */}
          <GlowCard className="p-8 shadow-large bg-card rounded-lg border">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Tag className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Valor do Investimento</h3>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 inline-block mb-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  R$ 1.000,00
                </div>
                <div className="text-lg font-medium text-accent mb-2">
                  Primeiro Lote
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CreditCard className="w-5 h-5" />
                  <span>Possibilidade de parcelamento</span>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Vagas limitadas</span> para manter a qualidade do treinamento prático e garantir atendimento personalizado.
                </p>
              </div>

              <Button 
                size="xl" 
                variant="cta"
                className="w-full md:w-auto hover-lift hover-shine animate-pulse-glow"
              >
                Garantir minha vaga agora
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Consulte condições de parcelamento no ato da inscrição
              </p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};
