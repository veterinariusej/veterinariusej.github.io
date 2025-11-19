import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2 } from "lucide-react";

export const Certification = () => {
  const benefits = [
    "Ideal para compor currículo profissional",
    "Comprova carga horária de atualização",
    "Fortalece atuação em anestesiologia veterinária",
    "Emitido por instituição de ensino reconhecida",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-primary" variant="secondary">
              <Award className="w-4 h-4 mr-2" />
              Certificação
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certificado UFV (RAEX)
            </h2>
            <p className="text-muted-foreground text-lg">
              Valorize seu currículo com certificação reconhecida
            </p>
          </div>

          <Card className="p-8 shadow-large">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-gradient-primary rounded-full p-8 shadow-large">
                <Award className="w-24 h-24 text-primary-foreground" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">
                  Certificação de Peso Acadêmico
                </h3>
                <p className="text-muted-foreground">
                  Ao concluir o curso, você receberá certificado emitido pela Universidade Federal de Viçosa através do Registro de Atividades de Extensão (RAEX).
                </p>
                
                <div className="space-y-3 pt-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
