// ABOUTME: Text scrambling effect that randomly replaces characters before revealing final text
// ABOUTME: Creates cyberpunk hacker-style text decryption animation

'use client';

import { useState, useEffect, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  scrambleSpeed?: number;
  triggerOnView?: boolean;
}

const SCRAMBLE_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

export default function TextScramble({
  text,
  className = '',
  duration = 2000,
  scrambleSpeed = 50,
  triggerOnView = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggerOnView) {
      startScramble();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isScrambling) {
          startScramble();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView, isScrambling]);

  const startScramble = () => {
    setIsScrambling(true);
    const textLength = text.length;
    const scrambleIterations = duration / scrambleSpeed;
    let currentIteration = 0;

    const scrambleInterval = setInterval(() => {
      if (currentIteration >= scrambleIterations) {
        setDisplayText(text);
        setIsScrambling(false);
        clearInterval(scrambleInterval);
        return;
      }

      const progress = currentIteration / scrambleIterations;
      const revealedChars = Math.floor(textLength * progress);

      const newText = text
        .split('')
        .map((char, index) => {
          if (index < revealedChars) {
            return char;
          }
          if (char === ' ') return ' ';
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join('');

      setDisplayText(newText);
      currentIteration++;
    }, scrambleSpeed);

    return () => clearInterval(scrambleInterval);
  };

  return (
    <span ref={elementRef} className={className}>
      {displayText}
    </span>
  );
}
