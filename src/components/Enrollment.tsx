import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import { CreditCard, Tag, AlertCircle, Sparkles } from "lucide-react";

export const Enrollment = () => {
  // Promotional deadline: December 15, 2025
  const promotionalDeadline = new Date("2025-12-15T23:59:59");

  return (
    <section id="enrollment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-accent" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2" />
              Oferta Especial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investimento no seu futuro
            </h2>
            <p className="text-muted-foreground text-lg">
              Garanta sua vaga com condição promocional até 15 de dezembro
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer targetDate={promotionalDeadline} />
          </div>

          {/* Pricing Card */}
          <Card className="p-8 shadow-large">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Tag className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Valor do Investimento</h3>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 inline-block mb-6">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-2xl md:text-3xl text-muted-foreground line-through">
                    R$ 2.199,90
                  </span>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  R$ 999,90
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CreditCard className="w-5 h-5" />
                  <span>Possibilidade de parcelamento</span>
                </div>
              </div>

              <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="font-semibold text-lg mb-2">Condição Promocional</p>
                    <p className="text-muted-foreground">
                      Desconto especial para inscrições realizadas até <span className="font-bold text-accent">15 de dezembro de 2025</span>
                    </p>
                  </div>
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
                className="w-full md:w-auto"
              >
                Garantir minha vaga agora
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Consulte condições de parcelamento no ato da inscrição
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
