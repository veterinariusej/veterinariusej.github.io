import { useMouseGlow } from "@/hooks/use-mouse-glow";
import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

interface CustomCSSProperties extends CSSProperties {
  '--glow-x'?: string;
  '--glow-y'?: string;
}

export const GlowCard = ({ children, className }: GlowCardProps) => {
  const { ref, position } = useMouseGlow();

  return (
    <div
      ref={ref}
      className={cn("relative hover-lift hover-shine", className)}
      style={{
        '--glow-x': `${position.x}%`,
        '--glow-y': `${position.y}%`,
      } as CustomCSSProperties}
    >
      <div
        className="absolute pointer-events-none rounded-lg glow-effect"
        style={{
          width: '300px',
          height: '300px',
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at center, hsl(203 81% 21% / 0.5), hsl(203 81% 21% / 0.3) 40%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      {children}
    </div>
  );
};
