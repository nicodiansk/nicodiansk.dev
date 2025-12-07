// ABOUTME: Background effects orchestrator combining Matrix rain, scanlines, and CRT aesthetics
// ABOUTME: Manages all cyberpunk visual effects with performance-conscious rendering

'use client';

import dynamic from 'next/dynamic';
import Scanline from '@/components/effects/Scanline';

// Dynamically import heavy components for better initial load
const MatrixRain = dynamic(() => import('@/components/effects/MatrixRain'), {
  ssr: false,
  loading: () => null,
});

interface BackgroundEffectsProps {
  enableMatrixRain?: boolean;
  enableScanlines?: boolean;
  matrixDensity?: number;
  matrixSpeed?: number;
}

export default function BackgroundEffects({
  enableMatrixRain = true,
  enableScanlines = true,
  matrixDensity = 0.3,
  matrixSpeed = 2,
}: BackgroundEffectsProps) {
  return (
    <>
      {enableMatrixRain && (
        <MatrixRain
          density={matrixDensity}
          speed={matrixSpeed}
          color="#39FF14"
        />
      )}

      {enableScanlines && <Scanline opacity={0.08} animate={true} />}
    </>
  );
}
