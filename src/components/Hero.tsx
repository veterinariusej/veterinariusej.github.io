import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-vet-surgery.jpg";
import logoUFV from "@/assets/logo-ufv.png";
import logoVeterinarius from "@/assets/logo-veterinarius.png";

export const Hero = () => {
  const scrollToEnroll = () => {
    document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Veterinary Surgery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logos */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mb-6 animate-fade-in">
            <img src={logoUFV} alt="UFV - Universidade Federal de Viçosa" className="h-10 md:h-12 object-contain drop-shadow-lg" />
            <img src={logoVeterinarius} alt="Veterinarius - Empresa Júnior" className="h-14 md:h-18 object-contain drop-shadow-lg" />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-medical-secondary text-white hover:bg-white hover:text-medical-secondary transition-all duration-300 backdrop-blur-sm border-2 border-medical-secondary">
              <Award className="w-4 h-4 mr-2" />
              Certificado UFV (RAEX)
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-medical-secondary text-white hover:bg-white hover:text-medical-secondary transition-all duration-300 backdrop-blur-sm border-2 border-medical-secondary">
              <Users className="w-4 h-4 mr-2" />
              Vagas Limitadas
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            CURSO PRESENCIAL
            <br />
            <span className="text-secondary">ANESTESIA LOCORREGIONAL</span>
            <br />
            EM CÃES E GATOS
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
            Hands on: bloqueios fundamentais
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Domine, na prática, as principais técnicas de anestesia locorregional em pequenos animais com um dos maiores nomes da anestesiologia veterinária do país.
          </p>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 shadow-large">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Quando</p>
              <p className="text-muted-foreground">28 e 29 de março de 2026</p>
            </div>
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 shadow-large">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Onde</p>
              <p className="text-muted-foreground">Universidade Federal de Viçosa</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="xl" 
              variant="cta"
              onClick={scrollToEnroll}
              className="shadow-large"
            >
              Quero me inscrever
            </Button>
            <Button 
              size="xl" 
              variant="hero"
              asChild
            >
              <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
