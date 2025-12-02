import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-vet-surgery.jpg";
import logoUFV from "@/assets/logo-ufv.png";
import logoVeterinarius from "@/assets/logo-veterinarius-new.png";
import { useParallax } from "@/hooks/use-parallax";
import { GlowCard } from "@/components/ui/glow-card";
import { courseConfig } from "@/config/course-data";
import { scrollToEnroll, openWhatsApp } from "@/lib/navigation";

export const Hero = () => {
  const parallaxOffset = useParallax(0.5);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay and Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img 
          src={heroImage} 
          alt="Veterinary Surgery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero animate-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logos */}
          <div className="flex flex-col justify-center items-center gap-4 md:gap-5 mb-6 animate-fade-in animate-float">
            <img src={logoVeterinarius} alt="Veterinarius - Empresa Júnior" className="h-20 md:h-24 object-contain drop-shadow-lg hover-scale" />
            <img src={logoUFV} alt="UFV - Universidade Federal de Viçosa" className="h-10 md:h-12 object-contain drop-shadow-lg hover-scale" />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-medical-secondary text-white hover:bg-white hover:text-medical-secondary transition-all duration-300 backdrop-blur-sm border-2 border-medical-secondary hover-lift hover-shine">
              <Award className="w-4 h-4 mr-2" />
              Certificado UFV (RAEX)
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-medical-secondary text-white hover:bg-white hover:text-medical-secondary transition-all duration-300 backdrop-blur-sm border-2 border-medical-secondary hover-lift hover-shine animate-pulse-glow">
              <Users className="w-4 h-4 mr-2" />
              Vagas Limitadas
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            {courseConfig.subtitle.toUpperCase()}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
            CURSO PRESENCIAL
            <br />
            <span className="text-secondary">{courseConfig.name.split(' ').slice(0, 2).join(' ')}</span>
            {' '}
            {courseConfig.name.split(' ').slice(2).join(' ')}
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            {courseConfig.description}
          </p>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            <GlowCard className="bg-background/90 backdrop-blur-sm rounded-lg p-6 shadow-large">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Quando</p>
              <p className="text-muted-foreground">{courseConfig.dates.start} e {courseConfig.dates.end.split('/')[0]} de março de 2026</p>
            </GlowCard>
            <GlowCard className="bg-background/90 backdrop-blur-sm rounded-lg p-6 shadow-large">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Onde</p>
              <p className="text-muted-foreground">{courseConfig.location.name}</p>
            </GlowCard>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="xl" 
              variant="cta"
              onClick={scrollToEnroll}
              className="shadow-large hover-lift hover-shine"
            >
              Quero me inscrever
            </Button>
            <Button 
              size="xl" 
              variant="hero"
              onClick={() => window.open("https://chat.whatsapp.com/LWxBdthhmvb9jkc4WnjoWM", "_blank", "noopener noreferrer")}
              className="hover-lift"
            >
              Entrar na comunidade do WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
