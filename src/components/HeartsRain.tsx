import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const HeartsRain = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const items = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 22,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 2.5,
    }));
    setHearts(items);
    const t = setTimeout(() => setHearts([]), 9000);
    return () => clearTimeout(t);
  }, []);

  if (!hearts.length) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          fill="currentColor"
          className="heart-fall"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default HeartsRain;
