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
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasScrambledRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!triggerOnView) {
      startScramble();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasScrambledRef.current) {
          startScramble();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [triggerOnView, duration, scrambleSpeed, text]);

  const startScramble = () => {
    hasScrambledRef.current = true;
    const textLength = text.length;
    const scrambleIterations = duration / scrambleSpeed;
    let currentIteration = 0;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (currentIteration >= scrambleIterations) {
        setDisplayText(text);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
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
  };

  return (
    <span ref={elementRef} className={className}>
      {displayText}
    </span>
  );
}
