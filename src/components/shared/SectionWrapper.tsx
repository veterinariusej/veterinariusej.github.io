import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | '6xl';
  background?: 'default' | 'muted';
  withReveal?: boolean;
  containerClassName?: string;
}

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  "2xl": "max-w-6xl",
  "4xl": "max-w-7xl",
  "5xl": "max-w-[1440px]",
  "6xl": "max-w-[1536px]",
};

export const SectionWrapper = ({
  children,
  id,
  className,
  maxWidth = "5xl",
  background = "default",
  withReveal = false,
  containerClassName,
}: SectionWrapperProps) => {
  const { ref, isVisible } = useScrollReveal();
  
  const bgClass = background === "muted" ? "bg-muted/30" : "bg-background";
  
  return (
    <section 
      id={id}
      className={cn(
        "py-20",
        bgClass,
        className
      )}
    >
      <div className={cn("container mx-auto px-4", containerClassName)}>
        <div 
          ref={withReveal ? ref : undefined}
          className={cn(
            maxWidthClasses[maxWidth],
            "mx-auto",
            withReveal && "scroll-reveal",
            withReveal && isVisible && "visible"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
