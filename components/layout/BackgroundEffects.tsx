// ABOUTME: Background effects orchestrator combining Matrix rain, scanlines, particles, and CRT aesthetics
// ABOUTME: Manages all cyberpunk visual effects with performance-conscious rendering

'use client';

import dynamic from 'next/dynamic';
import Scanline from '@/components/effects/Scanline';
import AnimatedMeshGradient from '@/components/effects/AnimatedMeshGradient';

// Dynamically import heavy components for better initial load
const MatrixRain = dynamic(() => import('@/components/effects/MatrixRain'), {
  ssr: false,
  loading: () => null,
});

const CyberParticles = dynamic(() => import('@/components/effects/Particles'), {
  ssr: false,
  loading: () => null,
});

interface BackgroundEffectsProps {
  enableMatrixRain?: boolean;
  enableScanlines?: boolean;
  enableParticles?: boolean;
  enableMeshGradient?: boolean;
  matrixDensity?: number;
  matrixSpeed?: number;
  particleCount?: number;
}

export default function BackgroundEffects({
  enableMatrixRain = true,
  enableScanlines = true,
  enableParticles = true,
  enableMeshGradient = false,
  matrixDensity = 0.3,
  matrixSpeed = 2,
  particleCount = 40,
}: BackgroundEffectsProps) {
  return (
    <>
      {enableMeshGradient && <AnimatedMeshGradient />}

      {enableMatrixRain && (
        <MatrixRain
          density={matrixDensity}
          speed={matrixSpeed}
          color="#39FF14"
        />
      )}

      {enableParticles && (
        <CyberParticles particleCount={particleCount} />
      )}

      {enableScanlines && <Scanline opacity={0.08} animate={true} />}
    </>
  );
}
