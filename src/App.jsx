import { lazy, Suspense } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';

// Below-the-fold sections are split into separate chunks and loaded on demand.
const Projects = lazy(() => import('./components/Projects.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<p className="section" role="status">Loading…</p>}>
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Amruta Patil</footer>
    </>
  );
}
