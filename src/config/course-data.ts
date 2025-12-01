import { BookOpen, FlaskConical, Heart } from "lucide-react";
import { CourseConfig } from "@/types/course";
import professorImage from "@/assets/dr-paulo-klaumann.jpg";

export const courseConfig: CourseConfig = {
  name: "Anestesia Locorregional em Cães e Gatos",
  subtitle: "Hands on: bloqueios fundamentais",
  description: "Domine, na prática, as principais técnicas de anestesia locorregional em pequenos animais com um dos maiores nomes da anestesiologia veterinária do país.",
  
  dates: {
    start: "28/03/2026",
    end: "29/03/2026",
    promotionDeadline: new Date("2025-12-15"),
  },
  
  location: {
    name: "Universidade Federal de Viçosa",
    city: "Viçosa",
    state: "MG",
  },
  
  contact: {
    whatsapp: "5531999999999",
    email: "contato@curso.ufv.br",
    phone: "(31) 99999-9999",
  },
  
  pricing: {
    original: 2199.90,
    promotional: 999.90,
  },
  
  professor: {
    name: "Dr. Paulo Roberto Klaumann",
    title: "Referência nacional em Anestesiologia Veterinária",
    description: "Ter aula com o Dr. Paulo Klaumann é uma oportunidade de aprender diretamente com quem vive a prática da anestesia locorregional há décadas, aliando conhecimento científico sólido e experiência clínica.",
    image: professorImage,
    qualifications: {
      education: [
        "Doutor em Ciências Veterinárias (UFPR)",
        "Mestre em Ciências Veterinárias (UFPR)",
        "Especialista em Anestesiologia Veterinária (PAV)",
      ],
      experience: [
        "Sócio-proprietário da PRK Anestesiologia Veterinária",
        "Responsável pelo Serviço de Anestesiologia do Hospital Veterinário Clinivet (Curitiba/PR) desde 1997",
        "Mais de 25 anos de prática clínica",
      ],
      publications: [
        "Autor do livro \"Anestesia Locorregional em Pequenos Animais\"",
        "Diversos capítulos em obras sobre anestesiologia veterinária",
      ],
    },
    quote: "Ter aula com o Dr. Paulo Klaumann é uma oportunidade de aprender diretamente com quem vive a prática da anestesia locorregional há décadas, aliando conhecimento científico sólido e experiência clínica.",
  },
  
  targetAudience: [
    "É médico-veterinário formado e deseja aprimorar ou atualizar seus conhecimentos em anestesia locorregional",
    "É acadêmico dos últimos períodos da graduação em Medicina Veterinária e quer se diferenciar já na saída da faculdade",
    "Deseja aumentar a segurança anestésica, o controle da dor e a qualidade do atendimento a cães e gatos",
  ],
  
  certificationBenefits: [
    "Ideal para compor currículo profissional",
    "Comprova carga horária de atualização",
    "Fortalece atuação em anestesiologia veterinária",
    "Emitido por instituição de ensino reconhecida",
  ],
};

export const scheduleData = [
  {
    day: courseConfig.dates.start,
    period: "Manhã",
    type: "Aula Teórica",
    icon: BookOpen,
    color: "primary" as const,
    title: "Fundamentos essenciais da anestesia regional",
    topics: [
      "Fundamentos da anestesia regional",
      "Bloqueios do membro torácico",
      "Bloqueios do membro pélvico",
      "Bloqueios de tórax",
      "Bloqueios de abdômen",
    ],
  },
  {
    day: courseConfig.dates.start,
    period: "Tarde",
    type: "Aula Prática",
    icon: FlaskConical,
    color: "secondary" as const,
    title: "Transformando teoria em habilidade manual",
    topics: [
      "Fundamentos de ultrassonografia para o anestesista",
      "Treinamento intensivo em modelos (cadáveres)",
      "Prática segura e guiada de bloqueios",
    ],
  },
  {
    day: courseConfig.dates.end,
    period: "Manhã",
    type: "Aula Prática em Animais Vivos",
    icon: Heart,
    color: "accent" as const,
    title: "Experiência real com acompanhamento próximo",
    topics: [
      "Prática de bloqueios em animais vivos durante procedimentos de castração",
      "Acompanhamento próximo do professor em cada etapa",
      "Segurança e aprendizado real garantidos",
    ],
  },
];

export const faqData = [
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
