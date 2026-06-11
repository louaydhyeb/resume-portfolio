import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { education, certifications } from '../data/cv';
import './Education.css';

export function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Formation</p>
        <h2 className="section-title">
          Parcours <span>académique</span>
        </h2>
      </motion.div>

      <div className="edu-grid">
        {education.map((edu) => (
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

        {certifications.map((cert) => (
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
