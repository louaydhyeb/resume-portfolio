import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AndroidBackground } from './components/AndroidBackground';
import { ScrollProgress } from './components/ScrollProgress';
import './App.css';

function App() {
  return (
    <div className="app">
      <ScrollProgress />

      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-orb mesh-orb--1" />
        <div className="mesh-orb mesh-orb--2" />
        <div className="mesh-orb mesh-orb--3" />
        <div className="mesh-orb mesh-orb--4" />
      </div>
      <div className="grid-overlay" aria-hidden="true" />
      <AndroidBackground />

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
