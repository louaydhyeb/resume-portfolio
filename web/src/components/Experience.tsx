import { useRef, useState, type CSSProperties } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import { ChevronDown, Briefcase } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { asset } from '../utils/asset';
import type { Experience as ExperienceData } from '../i18n/types';
import './Experience.css';

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -72,
    scale: 0.94,
    filter: 'blur(10px)',
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const bodyListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const bodyItemVariants = {
  hidden: { opacity: 0, x: -16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.04,
      type: 'spring' as const,
      stiffness: 380,
      damping: 22,
    },
  }),
};

function TimelineItem({
  exp,
  index,
  isOpen,
  onToggle,
}: {
  exp: ExperienceData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: '-20% 0px -30% 0px', amount: 0.35 });

  return (
    <motion.article
      ref={ref}
      className={`timeline__item ${isOpen ? 'timeline__item--open' : ''} ${inView ? 'timeline__item--inview' : ''}`}
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px', amount: 0.2 }}
      style={{ '--company-color': exp.companyColor } as CSSProperties}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="timeline__dot"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 420, damping: 18, delay: index * 0.12 + 0.1 }}
      />

      <motion.div
        className="timeline__glow"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <button
        className="timeline__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="timeline__header-left">
          <motion.span
            className="timeline__company-badge"
            initial={{ rotate: -12, scale: 0.5, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 20,
              delay: index * 0.12 + 0.15,
            }}
            whileHover={{ scale: 1.08, rotate: 3 }}
          >
            <img
              src={asset(exp.logo)}
              alt={`Logo ${exp.company}`}
              className="timeline__company-logo"
              loading="lazy"
            />
          </motion.span>
          <div>
            <motion.h3
              className="timeline__role"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.2, duration: 0.4 }}
            >
              {exp.role}
            </motion.h3>
            <motion.p
              className="timeline__company"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.28, duration: 0.4 }}
            >
              <Briefcase size={14} />
              {exp.company}
              <span className="timeline__period">{exp.period}</span>
            </motion.p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown size={20} className="timeline__chevron" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="timeline__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="timeline__description"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.35 }}
            >
              {exp.description}
            </motion.p>

            <motion.ul
              className="timeline__highlights"
              variants={bodyListVariants}
              initial="hidden"
              animate="visible"
            >
              {exp.highlights.map((h) => (
                <motion.li key={h} variants={bodyItemVariants}>
                  {h}
                </motion.li>
              ))}
            </motion.ul>

            <div className="timeline__tech">
              {exp.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="timeline__tech-tag"
                  custom={i}
                  variants={techVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Experience() {
  const { t } = useLanguage();
  const section = t.sections.experience;
  const [expanded, setExpanded] = useState<number | null>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const lineProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="section">
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

      <div className="timeline" ref={timelineRef}>
        <div className="timeline__line timeline__line--track" />
        <motion.div
          className="timeline__line timeline__line--progress"
          style={{ scaleY: lineProgress, transformOrigin: 'top' }}
        />

        {t.experiences.map((exp, index) => (
          <TimelineItem
            key={exp.company}
            exp={exp}
            index={index}
            isOpen={expanded === index}
            onToggle={() => setExpanded(expanded === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
