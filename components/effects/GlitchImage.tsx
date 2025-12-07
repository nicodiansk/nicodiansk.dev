// ABOUTME: Glitch effect for images with RGB split and random displacement
// ABOUTME: Creates cyberpunk-style image distortion with configurable intensity

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GlitchImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  triggerOnHover?: boolean;
}

export default function GlitchImage({
  src,
  alt,
  width,
  height,
  className = '',
  intensity = 'medium',
  triggerOnHover = false,
}: GlitchImageProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (triggerOnHover) return;

    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 400);
    };

    const intervalDuration = intensity === 'high' ? 3000 : intensity === 'medium' ? 6000 : 10000;
    const interval = setInterval(triggerGlitch, intervalDuration);

    return () => clearInterval(interval);
  }, [intensity, triggerOnHover]);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => triggerOnHover && setIsGlitching(true)}
      onMouseLeave={() => triggerOnHover && setIsGlitching(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`relative ${isGlitching ? 'animate-glitch' : ''}`}
      />
      {isGlitching && (
        <>
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="absolute top-0 left-0 opacity-60 mix-blend-screen"
            style={{ filter: 'hue-rotate(90deg)' }}
            aria-hidden="true"
          />
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="absolute top-0 left-0 opacity-60 mix-blend-screen"
            style={{ filter: 'hue-rotate(270deg)' }}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}
