import { motion } from 'framer-motion';
import { skills } from '../data/cv';
import './Skills.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, rotateX: -8 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Expertise</p>
        <h2 className="section-title">
          Compétences <span>techniques</span>
        </h2>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {skills.map((group, index) => (
          <motion.article
            key={group.category}
            className={`skill-card ${index === 0 ? 'skill-card--mobile' : ''}`}
            variants={item}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="skill-card__glow" />
            <div className="skill-card__header">
              <motion.span
                className="skill-card__icon"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                {group.icon}
              </motion.span>
              <h3 className="skill-card__title">{group.category}</h3>
            </div>
            <div className="skill-card__tags">
              {group.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
