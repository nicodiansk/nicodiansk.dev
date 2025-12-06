// ABOUTME: Main portfolio page - single-page application
// ABOUTME: Renders all sections with cyberpunk styling

import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
