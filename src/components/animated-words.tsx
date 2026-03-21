"use client";

import { useEffect, useState } from "react";

interface AnimatedWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function AnimatedWords({
  words,
  interval = 3000,
  className = "",
}: AnimatedWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, interval - 800); // Start exit animation 800ms before interval ends

    const nextTimer = setTimeout(() => {
      setIsExiting(false);
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(nextTimer);
    };
  }, [currentIndex, words, interval]);

  return (
    <div className={`relative inline-block align-baseline ${className}`}>
      <div
        key={currentIndex}
        className="text-foreground font-semibold whitespace-nowrap"
        style={{
          animation: isExiting
            ? "slideUpOut 0.8s ease-in forwards"
            : "slideUpIn 0.6s ease-out forwards",
        }}
      >
        {words[currentIndex]}
      </div>
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

        @keyframes slideUpOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-40px);
          }
        }
      `}</style>
    </div>
  );
}
