import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import vetWithPets from "@/assets/vet-with-pets.jpg";

export const FinalCTA = () => {
  const scrollToEnroll = () => {
    document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-large">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-64 md:h-auto">
                <img 
                  src={vetWithPets} 
                  alt="Veterinária com cães e gatos" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Sparkles className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para transformar sua prática clínica?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Se você deseja oferecer mais segurança, controle da dor e qualidade anestésica para seus pacientes, este curso foi feito para você.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="xl" 
                    variant="cta"
                    onClick={scrollToEnroll}
                    className="w-full"
                  >
                    Quero garantir minha vaga
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                    className="w-full"
                  >
                    <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
                      Tirar dúvidas pelo WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  Vagas limitadas • Inscrições abertas
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
