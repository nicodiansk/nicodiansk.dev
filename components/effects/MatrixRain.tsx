// ABOUTME: Matrix rain effect with falling cyberpunk characters using Canvas API
// ABOUTME: Renders falling green code characters with configurable density and speed

'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
  density?: number; // 0.1 to 1.0
  speed?: number; // 1 to 10
  color?: string;
}

export default function MatrixRain({
  className = '',
  density = 0.5,
  speed = 3,
  color = '#39FF14', // cyber-lime
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Matrix characters - using code-related symbols and letters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    const fontSize = 16;

    let columns = 0;
    let drops: number[] = [];
    let activeIndices = new Set<number>();

    // Initialize or recalculate matrix parameters
    const initializeMatrix = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);

      // Adjust number of active columns based on density
      const activeColumns = Math.floor(columns * density);
      activeIndices = new Set<number>();

      // Randomly select which columns will be active
      while (activeIndices.size < activeColumns) {
        activeIndices.add(Math.floor(Math.random() * columns));
      }
    };

    initializeMatrix();
    window.addEventListener('resize', initializeMatrix);

    let animationId: number;
    let lastTime = 0;
    const frameDelay = 1000 / (30 / speed); // Adjust frame rate based on speed

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < frameDelay) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      lastTime = currentTime;

      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        // Skip inactive columns
        if (!activeIndices.has(i)) continue;

        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', initializeMatrix);
      cancelAnimationFrame(animationId);
    };
  }, [density, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none opacity-30 ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
