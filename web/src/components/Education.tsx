import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './Education.css';

export function Education() {
  const { t } = useLanguage();
  const section = t.sections.education;

  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">{section.label}</p>
        <h2 className="section-title">
          {section.title} <span>{section.highlight}</span>
        </h2>
      </motion.div>

      <div className="edu-grid">
        {t.education.map((edu) => (
          <motion.article
            key={edu.title}
            className="edu-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="edu-card__icon">
              <GraduationCap size={24} />
            </div>
            <span className="edu-card__year">{edu.year}</span>
            <h3 className="edu-card__title">{edu.title}</h3>
            <p className="edu-card__school">{edu.school}</p>
            <p className="edu-card__location">{edu.location}</p>
          </motion.article>
        ))}

        {t.certifications.map((cert) => (
          <motion.article
            key={cert.title}
            className="edu-card edu-card--cert"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="edu-card__icon edu-card__icon--cert">
              <Award size={24} />
            </div>
            <span className="edu-card__year">{cert.year}</span>
            <h3 className="edu-card__title">{cert.title}</h3>
            <p className="edu-card__school">{cert.subtitle}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
