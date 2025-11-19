import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TargetAudience = () => {
  const points = [
    "É médico-veterinário formado e deseja aprimorar ou atualizar seus conhecimentos em anestesia locorregional",
    "É acadêmico dos últimos períodos da graduação em Medicina Veterinária e quer se diferenciar já na saída da faculdade",
    "Deseja aumentar a segurança anestésica, o controle da dor e a qualidade do atendimento a cães e gatos",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Este curso é para você que...
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Desenvolvido para veterinários que buscam excelência no cuidado anestésico
          </p>

          <Card className="p-8 shadow-large">
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                  <div className="bg-gradient-primary rounded-full p-2 shrink-0 shadow-medium">
                    <Check className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed pt-1">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
