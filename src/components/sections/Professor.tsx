import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Briefcase } from "lucide-react";
import { ProfessorModal } from "@/components/shared/ProfessorModal";
import { courseConfig } from "@/config/course-data";

export const Professor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Professor Convidado</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {courseConfig.professor.name}
            </h2>
            <p className="text-muted-foreground text-lg">
              {courseConfig.professor.title}
            </p>
          </div>

          <Card className="overflow-hidden shadow-large">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="space-y-6">
                <img 
                  src={courseConfig.professor.image} 
                  alt={courseConfig.professor.name}
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
                      {courseConfig.professor.qualifications.education.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Experiência</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {courseConfig.professor.qualifications.experience.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Publicações</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {courseConfig.professor.qualifications.publications.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="text-sm italic text-muted-foreground">
                    "{courseConfig.professor.quote}"
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
