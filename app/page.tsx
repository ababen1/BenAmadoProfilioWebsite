import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 px-4 text-center text-foreground/60 border-t border-foreground/10">
        <p>&copy; {new Date().getFullYear()} Ben Amado. All rights reserved.</p>
      </footer>
    </main>
  );
}

