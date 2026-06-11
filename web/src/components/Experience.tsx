import { useState, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase } from 'lucide-react';
import { experiences } from '../data/cv';
import { asset } from '../utils/asset';
import './Experience.css';

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Parcours</p>
        <h2 className="section-title">
          Expériences <span>professionnelles</span>
        </h2>
      </motion.div>

      <div className="timeline">
        <div className="timeline__line" />

        {experiences.map((exp, index) => {
          const isOpen = expanded === index;

          return (
            <motion.article
              key={exp.company}
              className={`timeline__item ${isOpen ? 'timeline__item--open' : ''}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className="timeline__dot"
                style={{ '--company-color': exp.companyColor } as CSSProperties}
              />

              <button
                className="timeline__header"
                onClick={() => setExpanded(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <div className="timeline__header-left">
                  <span
                    className="timeline__company-badge"
                    style={{ '--company-color': exp.companyColor } as CSSProperties}
                  >
                    <img
                      src={asset(exp.logo)}
                      alt={`Logo ${exp.company}`}
                      className="timeline__company-logo"
                      loading="lazy"
                    />
                  </span>
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">
                      <Briefcase size={14} />
                      {exp.company}
                      <span className="timeline__period">{exp.period}</span>
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`timeline__chevron ${isOpen ? 'timeline__chevron--open' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="timeline__body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="timeline__description">{exp.description}</p>

                    <ul className="timeline__highlights">
                      {exp.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>

                    <div className="timeline__tech">
                      {exp.tech.map((t) => (
                        <span key={t} className="timeline__tech-tag">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
