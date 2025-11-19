import { Card } from "@/components/ui/card";
import { Target, Microscope, Stethoscope, Award, Users, BookCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Differentials = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const differentials = [
    {
      icon: Target,
      title: "Foco em Pequenos Animais",
      description: "Curso 100% voltado para cães e gatos, com aplicação direta na rotina clínica e cirúrgica",
      color: "primary",
    },
    {
      icon: BookCheck,
      title: "Teoria + Prática Intensa",
      description: "Combinação de base teórica sólida com intenso treinamento prático hands-on",
      color: "secondary",
    },
    {
      icon: Microscope,
      title: "Ultrassonografia Guiada",
      description: "Uso de ultrassonografia e prática em modelos e animais vivos para máxima segurança",
      color: "accent",
    },
    {
      icon: Stethoscope,
      title: "Professor Renomado",
      description: "Aprendizado com autor de referência na área de anestesia locorregional",
      color: "primary",
    },
    {
      icon: Award,
      title: "Certificação UFV",
      description: "Certificado emitido pela UFV (RAEX), agregando peso acadêmico ao currículo",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Turma Reduzida",
      description: "Vagas limitadas para garantir atendimento personalizado e qualidade no treinamento",
      color: "accent",
    },
  ];

  const getGradientClass = (color: string) => {
    const gradients = {
      primary: "from-primary/10 to-primary/5",
      secondary: "from-secondary/10 to-secondary/5",
      accent: "from-accent/10 to-accent/5",
    };
    return gradients[color as keyof typeof gradients];
  };

  const getIconColor = (color: string) => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref} 
          className={`max-w-6xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que participar?
            </h2>
            <p className="text-muted-foreground text-lg">
              Diferenciais que fazem deste curso uma oportunidade única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-large transition-all duration-300 hover-lift hover-glow hover-shine group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getGradientClass(item.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${getIconColor(item.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
