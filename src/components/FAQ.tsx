import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Qual é a carga horária total do curso?",
      answer: "O curso tem carga horária de 16 horas, distribuídas em dois dias completos (28 e 29 de março de 2026), incluindo aulas teóricas e práticas.",
    },
    {
      question: "Preciso ter experiência prévia com anestesia locorregional?",
      answer: "Não é necessário. O curso foi desenvolvido tanto para quem está começando quanto para quem deseja aprimorar suas técnicas. A programação contempla desde fundamentos até práticas avançadas.",
    },
    {
      question: "O curso é voltado apenas para veterinários formados?",
      answer: "Não. O curso é aberto também para acadêmicos dos últimos períodos da graduação em Medicina Veterinária, que desejam se diferenciar já na saída da faculdade.",
    },
    {
      question: "Quantos alunos por turma?",
      answer: "Mantemos turmas reduzidas para garantir atendimento personalizado e qualidade no treinamento prático. O número exato de vagas será informado no ato da inscrição.",
    },
    {
      question: "Como funciona o parcelamento?",
      answer: "Oferecemos possibilidades de parcelamento do valor do curso. As condições específicas e número de parcelas serão informadas durante o processo de inscrição.",
    },
    {
      question: "Receberei material de apoio?",
      answer: "Sim! Todos os participantes recebem material de apoio completo, incluindo apostilas com o conteúdo teórico e protocolos práticos para consulta futura.",
    },
    {
      question: "Preciso levar algum equipamento?",
      answer: "Não é necessário. Todos os equipamentos, modelos e animais para prática serão fornecidos pela organização do curso.",
    },
    {
      question: "Como funciona a prática em animais vivos?",
      answer: "A prática será realizada durante procedimentos de castração programados, com supervisão direta do professor. Todos os protocolos de bem-estar animal e segurança anestésica são rigorosamente seguidos.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <HelpCircle className="w-4 h-4 mr-2" />
              Dúvidas Frequentes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas e Respostas
            </h2>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas sobre o curso
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 shadow-soft hover:shadow-medium transition-shadow border"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
