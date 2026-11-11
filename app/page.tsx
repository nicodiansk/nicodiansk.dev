import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Pillars from '@/components/Pillars';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <Work />
        <Experience />
        <Stack />
        <About />
      </main>
      <Contact />
    </>
  );
}
