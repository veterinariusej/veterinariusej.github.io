import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Briefcase } from "lucide-react";
import { ProfessorModal } from "./ProfessorModal";
import professorImage from "@/assets/dr-paulo-klaumann.jpg";

export const Professor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Professor Convidado</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dr. Paulo Roberto Klaumann
            </h2>
            <p className="text-muted-foreground text-lg">
              Referência nacional em Anestesiologia Veterinária
            </p>
          </div>

          <Card className="overflow-hidden shadow-large">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="space-y-6">
                <img 
                  src={professorImage} 
                  alt="Dr. Paulo Roberto Klaumann" 
                  className="w-full h-80 object-cover object-top rounded-lg shadow-medium"
                />
                <div className="text-center">
                  <ProfessorModal />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Formação</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Doutor em Ciências Veterinárias (UFPR)</li>
                      <li>• Mestre em Ciências Veterinárias (UFPR)</li>
                      <li>• Especialista em Anestesiologia Veterinária (PAV)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Experiência</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sócio-proprietário da PRK Anestesiologia Veterinária</li>
                      <li>• Responsável pelo Serviço de Anestesiologia do Hospital Veterinário Clinivet (Curitiba/PR) desde 1997</li>
                      <li>• Mais de 25 anos de prática clínica</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Publicações</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Autor do livro "Anestesia Locorregional em Pequenos Animais"</li>
                      <li>• Diversos capítulos em obras sobre anestesiologia veterinária</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="text-sm italic text-muted-foreground">
                    "Ter aula com o Dr. Paulo Klaumann é uma oportunidade de aprender diretamente com quem vive a prática da anestesia locorregional há décadas, aliando conhecimento científico sólido e experiência clínica."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
