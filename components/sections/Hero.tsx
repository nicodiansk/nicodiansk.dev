// ABOUTME: Hero section with cyberpunk terminal boot sequence (5-stage loading animation)
// ABOUTME: Features typewriter effect, progress bars, glitch text, and smooth fade-in reveal

'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import aboutDataRaw from '@/data/about.json';
import { AboutData } from '@/types/data';
import GlitchText from '@/components/effects/GlitchText';

const aboutData = aboutDataRaw as AboutData;

export default function Hero() {
  const { t } = useLanguage();
  const [bootStage, setBootStage] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const stages = [
      { delay: 500, duration: 1000 },  // Stage 0: initializing
      { delay: 1500, duration: 800 },  // Stage 1: loading LLM
      { delay: 2300, duration: 800 },  // Stage 2: connecting vector db
      { delay: 3100, duration: 800 },  // Stage 3: initializing neural net
      { delay: 3900, duration: 500 },  // Stage 4: system online
    ];

    const timers = stages.map((stage, index) => {
      return setTimeout(() => {
        setBootStage(index + 1);
        if (index === stages.length - 1) {
          setTimeout(() => setShowContent(true), 500);
        }
      }, stage.delay);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Terminal boot sequence */}
        <div className="max-w-3xl mx-auto">
          {!showContent && (
            <div className="font-mono text-sm space-y-2 mb-12">
              {bootStage >= 1 && (
                <div className="text-cyber-cyan animate-flicker">
                  {t.hero.boot.initializing}
                </div>
              )}
              {bootStage >= 2 && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{t.hero.boot.loading_llm}</span>
                  <span className="text-cyber-lime">[████████] {t.hero.boot.complete}</span>
                </div>
              )}
              {bootStage >= 3 && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{t.hero.boot.connecting_vector}</span>
                  <span className="text-cyber-lime">[████████] {t.hero.boot.complete}</span>
                </div>
              )}
              {bootStage >= 4 && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{t.hero.boot.initializing_neural}</span>
                  <span className="text-cyber-lime">[████████] {t.hero.boot.complete}</span>
                </div>
              )}
              {bootStage >= 5 && (
                <div className="text-cyber-lime text-lg font-bold mt-4 animate-neon-glow">
                  {t.hero.boot.online}
                </div>
              )}
            </div>
          )}

          {/* Main hero content */}
          {showContent && (
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold">
                <GlitchText
                  text={aboutData.name.toUpperCase()}
                  className="text-cyber-cyan"
                  intensity="medium"
                />
              </h1>

              <div className="space-y-2 text-xl md:text-2xl">
                <p className="text-cyber-magenta">&gt;_ {t.hero.title}</p>
                <p className="text-cyber-lime">&gt;_ {t.hero.subtitle}</p>
                <p className="text-cyber-yellow">&gt;_ {t.hero.subtitle2}</p>
              </div>

              <div className="pt-8">
                <a
                  href="#projects"
                  className="inline-block px-8 py-3 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300 animate-neon-glow font-bold"
                >
                  {t.hero.cta}
                </a>
              </div>

              <div className="pt-12 text-gray-500 text-sm animate-bounce">
                ↓ {t.hero.scroll}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
