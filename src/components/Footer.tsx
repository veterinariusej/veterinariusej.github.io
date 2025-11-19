import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Course Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Curso de Anestesia Locorregional
              </h3>
              <p className="text-background/80 mb-4">
                28 e 29 de março de 2026
                <br />
                Universidade Federal de Viçosa
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-3 text-background/80">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="https://wa.me/5531999999999" className="hover:text-background transition-colors">
                    (31) 99999-9999
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:contato@curso.ufv.br" className="hover:text-background transition-colors">
                    contato@curso.ufv.br
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Universidade Federal de Viçosa - MG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>© 2025 Curso de Anestesia Locorregional - UFV. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
