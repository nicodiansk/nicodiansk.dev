// ABOUTME: Main portfolio page - single-page scrollable application with Hero, Projects, Skills sections
// ABOUTME: Wrapped in error boundaries for graceful failure handling and cyberpunk styling

import { ErrorBoundary } from '@/components/providers/ErrorBoundary';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>
    </main>
  );
}
