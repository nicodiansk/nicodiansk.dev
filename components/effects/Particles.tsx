// ABOUTME: Floating cyber debris particle system using TsParticles with mouse interaction
// ABOUTME: Creates animated particles with cyberpunk colors and interactive physics

'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

interface CyberParticlesProps {
  className?: string;
  particleCount?: number;
}

export default function CyberParticles({
  className = '',
  particleCount = 50,
}: CyberParticlesProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch((error) => {
        console.error('Failed to initialize particles engine:', error);
        // Silently fail - particles are decorative and non-essential
      });
  }, []);

  const options: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#00F0FF', '#FF00FF', '#39FF14', '#FFE800'],
      },
      links: {
        color: '#00F0FF',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: particleCount,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle', 'square'],
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="cyber-particles"
      options={options}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 2 }}
    />
  );
}
