import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToEnroll = () => {
    const element = document.getElementById("inscricao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="bg-gradient-accent shadow-large border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3">
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToEnroll}
            className="flex-1"
          >
            Garantir minha vaga
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsDismissed(true)}
            className="text-accent-foreground hover:bg-accent-foreground/10 shrink-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
