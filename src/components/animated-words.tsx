"use client";

import { useEffect, useState, memo } from "react";

interface AnimatedWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

const AnimatedWordsComponent = ({
  words,
  interval = 3000,
  className = "",
}: AnimatedWordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      <span
        key={currentIndex}
        className="inline-block text-foreground font-semibold whitespace-nowrap"
        style={{
          animation: "slideUpIn 0.6s ease-out forwards",
        }}
      >
        {words[currentIndex]}
      </span>
      <style jsx>{`
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  );
};

export const AnimatedWords = memo(AnimatedWordsComponent, (prevProps, nextProps) => {
  return (
    prevProps.interval === nextProps.interval &&
    prevProps.className === nextProps.className &&
    prevProps.words.length === nextProps.words.length &&
    prevProps.words.every((word, idx) => word === nextProps.words[idx])
  );
});
