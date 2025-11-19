import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-accent rounded-xl p-6 shadow-large">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-accent-foreground" />
        <h3 className="text-xl font-bold text-accent-foreground">
          Oferta promocional termina em:
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Dias", value: timeLeft.days },
          { label: "Horas", value: timeLeft.hours },
          { label: "Min", value: timeLeft.minutes },
          { label: "Seg", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="bg-background/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-foreground">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-sm text-accent-foreground/80 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
