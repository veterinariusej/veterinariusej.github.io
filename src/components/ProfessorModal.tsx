import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import professorImage from "@/assets/professor-teaching.jpg";

export const ProfessorModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          Ver currículo completo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Dr. Paulo Roberto Klaumann</DialogTitle>
          <DialogDescription>
            Currículo e Experiência Profissional
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div className="flex items-center gap-4">
            <img 
              src={professorImage} 
              alt="Dr. Paulo Roberto Klaumann" 
              className="w-32 h-32 rounded-lg object-cover shadow-medium"
            />
            <div>
              <h3 className="text-lg font-semibold">Professor Convidado</h3>
              <p className="text-muted-foreground">
                Referência nacional em Anestesiologia Veterinária
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Formação Acadêmica</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Médico-veterinário graduado pela Universidade Federal do Paraná (UFPR) – 1997</li>
                  <li>• Mestre em Ciências Veterinárias pela UFPR – 2007</li>
                  <li>• Especialização Lato Sensu em Anestesiologia Veterinária pela PAV – 2011</li>
                  <li>• Doutor em Ciências Veterinárias pela UFPR – 2017</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <Briefcase className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Experiência Profissional</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sócio-proprietário da PRK Anestesiologia Veterinária</li>
                  <li>• Responsável pelo Serviço de Anestesiologia e Controle da Dor do Hospital Veterinário Clinivet (Curitiba/PR) desde 1997</li>
                  <li>• Mais de 25 anos de experiência prática em anestesiologia veterinária</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <BookOpen className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Publicações e Contribuições</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <span className="font-medium">Autor do livro:</span> "Anestesia Locorregional em Pequenos Animais"</li>
                  <li>• Autor de diversos capítulos em obras sobre anestesiologia veterinária</li>
                  <li>• Referência nacional em técnicas de anestesia locorregional</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Reconhecimento</h4>
                <p className="text-sm text-muted-foreground">
                  Dr. Paulo Klaumann é amplamente reconhecido na comunidade veterinária brasileira como uma das maiores autoridades em anestesia locorregional para pequenos animais, combinando vasta experiência clínica com sólida produção científica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
