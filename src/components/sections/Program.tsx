import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GlowCard } from "@/components/ui/glow-card";
import { scheduleData } from "@/config/course-data";

export const Program = () => {
  const { ref, isVisible } = useScrollReveal();

  const getColorClass = (color: string) => {
    const colors = {
      primary: "text-primary bg-primary/10 border-primary/20",
      secondary: "text-secondary bg-secondary/10 border-secondary/20",
      accent: "text-accent bg-accent/10 border-accent/20",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref} 
          className={`max-w-5xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que você vai aprender
            </h2>
            <p className="text-muted-foreground text-lg">
              Programação completa organizada para máximo aproveitamento
            </p>
          </div>

          <div className="space-y-6">
            {scheduleData.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlowCard 
                  key={index} 
                  className="p-6 md:p-8 shadow-large bg-card rounded-lg border"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon & Date */}
                    <div className="flex flex-col items-center md:items-start gap-3 md:min-w-[200px]">
                      <div className={`p-4 rounded-xl border-2 ${getColorClass(item.color)}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="font-semibold">{item.day}</span>
                        </div>
                        <Badge variant="outline" className="mt-1">
                          {item.period}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-3">
                        <Badge className={getColorClass(item.color)} variant="secondary">
                          {item.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">▸</span>
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
