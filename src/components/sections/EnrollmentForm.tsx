import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Validação de CPF
const validarCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let digito1 = resto >= 10 ? 0 : resto;
  
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digito2 = resto >= 10 ? 0 : resto;
  
  return parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2;
};

const formSchema = z.object({
  nomeCompleto: z.string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  cpf: z.string()
    .refine((val) => validarCPF(val), "CPF inválido"),
  email: z.string()
    .email("Email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres"),
  telefone: z.string()
    .min(14, "Telefone inválido")
    .max(15, "Telefone inválido"),
  tipo: z.enum([
    "Estudante (Graduação em Medicina Veterinária)",
    "Pós-graduação Lato Sensu (Residência / Aprimoramento / Especialização)",
    "Pós-graduação Stricto Sensu (Mestrado / Doutorado)",
    "Médico-veterinário anestesiologista"
  ], {
    required_error: "Selecione uma opção",
  }),
  alunoUFV: z.enum(["Sim", "Não"], {
    required_error: "Selecione uma opção",
  }),
});

type FormData = z.infer<typeof formSchema>;

// URL do Google Apps Script configurada
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIigoVyCD8TaV6SGlAdfdtwCbmjbCqSerUNoL76QosKlZmSjrVj0tXffeR_-ZfZADEuA/exec";

export const EnrollmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").slice(0, 15);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Enviando dados:", data);

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Com no-cors, não conseguimos ler a resposta, mas se não houver erro, assumimos sucesso
      setIsSuccess(true);
      toast({
        title: "Inscrição Enviada!",
        description: "Sua inscrição foi registrada com sucesso. Entraremos em contato em breve.",
      });
      reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao Enviar",
        description: "Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inscricao" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Inscreva-se Agora
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo para garantir sua vaga
          </p>
        </div>

        <Card className="p-8 shadow-lg">
          {isSuccess ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Inscrição Confirmada!</h3>
              <p className="text-muted-foreground">
                Recebemos sua inscrição e entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="nomeCompleto">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nomeCompleto"
                  {...register("nomeCompleto")}
                  placeholder="Seu nome completo"
                  disabled={isSubmitting}
                />
                {errors.nomeCompleto && (
                  <p className="text-sm text-destructive">{errors.nomeCompleto.message}</p>
                )}
              </div>

              {/* CPF */}
              <div className="space-y-2">
                <Label htmlFor="cpf">
                  CPF <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="cpf"
                  {...register("cpf")}
                  placeholder="000.000.000-00"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    const formatted = formatCPF(e.target.value);
                    setValue("cpf", formatted);
                  }}
                  maxLength={14}
                />
                {errors.cpf && (
                  <p className="text-sm text-destructive">{errors.cpf.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="telefone">
                  Telefone/WhatsApp <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="telefone"
                  {...register("telefone")}
                  placeholder="(00) 00000-0000"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setValue("telefone", formatted);
                  }}
                  maxLength={15}
                />
                {errors.telefone && (
                  <p className="text-sm text-destructive">{errors.telefone.message}</p>
                )}
              </div>

              {/* Tipo */}
              <div className="space-y-3">
                <Label>
                  Você é: <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  onValueChange={(value) => setValue("tipo", value as FormData["tipo"])}
                  disabled={isSubmitting}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Estudante (Graduação em Medicina Veterinária)" id="estudante" />
                    <Label htmlFor="estudante" className="font-normal cursor-pointer">
                      Estudante (Graduação em Medicina Veterinária)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Pós-graduação Lato Sensu (Residência / Aprimoramento / Especialização)" id="lato-sensu" />
                    <Label htmlFor="lato-sensu" className="font-normal cursor-pointer">
                      Pós-graduação Lato Sensu (Residência / Aprimoramento / Especialização)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Pós-graduação Stricto Sensu (Mestrado / Doutorado)" id="stricto-sensu" />
                    <Label htmlFor="stricto-sensu" className="font-normal cursor-pointer">
                      Pós-graduação Stricto Sensu (Mestrado / Doutorado)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Médico-veterinário anestesiologista" id="anestesiologista" />
                    <Label htmlFor="anestesiologista" className="font-normal cursor-pointer">
                      Médico-veterinário anestesiologista
                    </Label>
                  </div>
                </RadioGroup>
                {errors.tipo && (
                  <p className="text-sm text-destructive">{errors.tipo.message}</p>
                )}
              </div>

              {/* Aluno UFV */}
              <div className="space-y-3">
                <Label>
                  É aluno da UFV? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  onValueChange={(value) => setValue("alunoUFV", value as "Sim" | "Não")}
                  disabled={isSubmitting}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sim" id="ufv-sim" />
                    <Label htmlFor="ufv-sim" className="font-normal cursor-pointer">
                      Sim
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Não" id="ufv-nao" />
                    <Label htmlFor="ufv-nao" className="font-normal cursor-pointer">
                      Não
                    </Label>
                  </div>
                </RadioGroup>
                {errors.alunoUFV && (
                  <p className="text-sm text-destructive">{errors.alunoUFV.message}</p>
                )}
              </div>

              {/* Botão Submit */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Inscrição"
                )}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};
