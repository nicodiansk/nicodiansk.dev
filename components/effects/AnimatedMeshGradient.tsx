// ABOUTME: Subtle animated mesh gradient background for modern cyberpunk aesthetic
// ABOUTME: Uses CSS animations for smooth, flowing gradient orbs on dark backdrop

'use client';

export default function AnimatedMeshGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Gradient orb 1 - Cyan */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-mesh-1"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
        }}
      />

      {/* Gradient orb 2 - Magenta */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 animate-mesh-2"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%)',
          top: '50%',
          right: '10%',
        }}
      />

      {/* Gradient orb 3 - Lime */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 animate-mesh-3"
        style={{
          background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, transparent 70%)',
          bottom: '10%',
          left: '20%',
        }}
      />

      {/* Gradient orb 4 - Yellow */}
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-12 animate-mesh-4"
        style={{
          background: 'radial-gradient(circle, rgba(255, 232, 0, 0.25) 0%, transparent 70%)',
          top: '30%',
          right: '30%',
        }}
      />
    </div>
  );
}
