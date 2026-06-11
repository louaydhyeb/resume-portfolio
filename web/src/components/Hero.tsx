import { motion } from 'framer-motion';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { profile } from '../data/cv';
import { KotlinTerminal } from './KotlinTerminal';
import { PhoneMockup } from './PhoneMockup';
import './Hero.css';

const floatingCards = [
  { icon: '⚡', title: 'Coroutines', sub: 'Async & Flow', delay: 0, pos: 'hero__floating-card--1' },
  { icon: '🏗️', title: 'MVVM', sub: 'Clean Architecture', delay: 0.2, pos: 'hero__floating-card--2' },
  { icon: '🎨', title: 'Compose', sub: 'Material 3 UI', delay: 0.4, pos: 'hero__floating-card--3' },
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="hero__badge-dot" />
          <span className="hero__badge-android">Android</span>
          Disponible pour de nouvelles opportunités
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="hero__greeting">Bonjour, je suis</span>
          <span className="hero__name">{profile.name}</span>
        </motion.h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {profile.title}
          <span className="hero__kotlin-tag">Kotlin</span>
        </motion.p>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <MapPin size={16} />
          <span>{profile.location}</span>
        </motion.div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <button className="hero__btn hero__btn--primary material-ripple" onClick={() => scrollTo('experience')}>
            Voir mon parcours
          </button>
          <button className="hero__btn hero__btn--secondary material-ripple" onClick={() => scrollTo('contact')}>
            <Download size={18} />
            Me contacter
          </button>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { value: '7+', label: 'Ans d\'expérience' },
            { value: '4', label: 'Entreprises majeures' },
            { value: 'OCP', label: 'Certifié Java SE 11' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="hero__stat"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 200 }}
            >
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <KotlinTerminal />
      </div>

      <div className="hero__visual">
        <PhoneMockup />

        {floatingCards.map((card) => (
          <motion.div
            key={card.title}
            className={`hero__floating-card ${card.pos}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.8 + card.delay, duration: 0.5 },
              scale: { delay: 0.8 + card.delay, duration: 0.5 },
              y: { delay: 1.2 + card.delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <span className="hero__card-icon">{card.icon}</span>
            <div>
              <strong>{card.title}</strong>
              <span>{card.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="hero__scroll"
        onClick={() => scrollTo('skills')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { delay: 1.5, duration: 2, repeat: Infinity },
        }}
        aria-label="Défiler vers le bas"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
