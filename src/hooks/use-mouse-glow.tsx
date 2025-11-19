import { useEffect, useRef, useState } from "react";

export const useMouseGlow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    };

    element.addEventListener("mousemove", handleMouseMove);
    return () => element.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { ref, position };
};
