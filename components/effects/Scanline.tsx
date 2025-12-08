// ABOUTME: CRT scanline overlay effect for retro cyberpunk aesthetic
// ABOUTME: Creates horizontal scanlines with subtle animation to simulate old monitor displays

'use client';

interface ScanlineProps {
  className?: string;
  opacity?: number;
  animate?: boolean;
}

export default function Scanline({
  className = '',
  opacity = 0.1,
  animate = true,
}: ScanlineProps) {
  return (
    <>
      {/* Horizontal scanlines */}
      <div
        className={`fixed inset-0 pointer-events-none ${className}`}
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 1px,
            rgba(0, 0, 0, ${opacity}) 1px,
            rgba(0, 0, 0, ${opacity}) 2px
          )`,
          zIndex: 100,
        }}
      />

      {/* Animated scanline sweep */}
      {animate && (
        <div
          className="fixed inset-0 pointer-events-none animate-scanline"
          style={{
            background: 'linear-gradient(transparent 40%, rgba(0, 240, 255, 0.05) 50%, transparent 60%)',
            backgroundSize: '100% 200px',
            zIndex: 99,
          }}
        />
      )}

      {/* Vignette effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
          zIndex: 98,
        }}
      />
    </>
  );
}
