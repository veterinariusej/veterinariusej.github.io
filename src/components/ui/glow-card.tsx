import { useMouseGlow } from "@/hooks/use-mouse-glow";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export const GlowCard = ({ children, className }: GlowCardProps) => {
  const { ref, position } = useMouseGlow();

  return (
    <div
      ref={ref}
      className={cn("relative hover-lift hover-shine", className)}
      style={{
        // @ts-ignore
        '--glow-x': `${position.x}%`,
        '--glow-y': `${position.y}%`,
      }}
    >
      <div
        className="absolute pointer-events-none rounded-lg glow-effect"
        style={{
          width: '300px',
          height: '300px',
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5), rgba(37, 99, 235, 0.3) 40%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      {children}
    </div>
  );
};
