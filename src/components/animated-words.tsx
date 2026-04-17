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
  }, [interval, words.length]);

  useEffect(() => {
    // Reset animation state on mount
    setCurrentIndex(0);
    setIsExiting(false);
  }, []);

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      <span
        className="text-foreground font-semibold whitespace-nowrap"
        style={{
          animation: isExiting
            ? "slideUpOut 0.8s ease-in forwards"
            : "slideUpIn 0.6s ease-out forwards",
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
    </span>
  );
};

export const AnimatedWords = memo(AnimatedWordsComponent, (prevProps, nextProps) => {
  // Return true if props are equal (don't re-render), false to re-render
  return (
    prevProps.interval === nextProps.interval &&
    prevProps.className === nextProps.className &&
    prevProps.words.length === nextProps.words.length &&
    prevProps.words.every((word, idx) => word === nextProps.words[idx])
  );
});
