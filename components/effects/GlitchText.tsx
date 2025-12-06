// ABOUTME: Glitch text effect with RGB split and random displacement (configurable intensity: low/medium/high)
// ABOUTME: Uses CSS-based animations for performance, triggers periodically based on intensity level

'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  animate?: boolean;
}

export default function GlitchText({
  text,
  className = '',
  intensity = 'medium',
  animate = true
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!animate) return;

    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    };

    const intervalDuration = intensity === 'high' ? 2000 : intensity === 'medium' ? 4000 : 6000;
    const interval = setInterval(triggerGlitch, intervalDuration);

    return () => clearInterval(interval);
  }, [animate, intensity]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className={`relative inline-block ${isGlitching ? 'animate-glitch' : ''}`}
        data-text={text}
      >
        {text}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 opacity-80 text-cyber-cyan animate-glitch-1"
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 opacity-80 text-cyber-magenta animate-glitch-2"
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
