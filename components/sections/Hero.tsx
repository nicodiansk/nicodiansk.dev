// ABOUTME: Hero section with cyberpunk terminal boot sequence using Magic UI Terminal component
// ABOUTME: Features typewriter effects, animated progress bars, glitch text, and smooth fade-in reveal

'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Zap } from 'lucide-react';
import aboutDataRaw from '@/data/about.json';
import { AboutData } from '@/types/data';
import GlitchText from '@/components/effects/GlitchText';
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/ui/terminal';

const aboutData = aboutDataRaw as AboutData;

export default function Hero() {
  const { t } = useLanguage();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show hero content after terminal boot sequence completes (approximately 3 seconds)
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start">

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Terminal boot sequence */}
        <div className="max-w-3xl mx-auto">
          {!showContent && (
            <div className="flex justify-center mb-12">
              <Terminal className="w-full max-w-2xl">
                <TypingAnimation duration={20} className="text-cyber-cyan">
                  {t.hero.boot.initializing}
                </TypingAnimation>
                <AnimatedSpan className="text-gray-400">
                  {t.hero.boot.loading_llm} <span className="text-cyber-lime">[████████] {t.hero.boot.complete}</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-gray-400">
                  {t.hero.boot.connecting_vector} <span className="text-cyber-lime">[████████] {t.hero.boot.complete}</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-gray-400">
                  {t.hero.boot.initializing_neural} <span className="text-cyber-lime">[████████] {t.hero.boot.complete}</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-cyber-lime text-lg font-bold mt-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 fill-cyber-lime inline-block" />
                  {t.hero.boot.online}
                </AnimatedSpan>
              </Terminal>
            </div>
          )}

          {/* Main hero content */}
          {showContent && (
            <div className="text-center space-y-8 animate-fade-in">
              {/* Photo Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="w-full h-full rounded-full border-4 border-cyber-cyan bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Placeholder - Nicholas will add photo later */}
                    <div className="text-6xl text-gray-600">👤</div>
                  </div>
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-full border-4 border-cyber-cyan opacity-50 animate-pulse" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold">
                <GlitchText
                  text={aboutData.name.toUpperCase()}
                  className="text-cyber-cyan"
                  intensity="medium"
                />
              </h1>

              {/* Key Metrics */}
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="px-4 py-2 border border-cyber-magenta text-cyber-magenta rounded-md bg-cyber-magenta/10">
                  <span className="font-bold">Head of AI</span>
                </div>
                <div className="px-4 py-2 border border-cyber-lime text-cyber-lime rounded-md bg-cyber-lime/10">
                  <span className="font-bold">4+ Years GenAI</span>
                </div>
                <div className="px-4 py-2 border border-cyber-yellow text-cyber-yellow rounded-md bg-cyber-yellow/10">
                  <span className="font-bold">6 Production Systems</span>
                </div>
              </div>

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
