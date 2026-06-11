import { motion } from 'framer-motion';
import './AndroidBackground.css';

const snippets = [
  'suspend fun',
  'StateFlow',
  'ViewModel',
  'Composable',
  'Coroutines',
  '@Composable',
  'Flow<T>',
  'Jetpack',
  'MVVM',
  'Retrofit',
  'Room DB',
  'Hilt',
];

const brackets = ['{ }', '< >', '( )', '[ ]'];

export function AndroidBackground() {
  return (
    <div className="android-bg" aria-hidden="true">
      <motion.div
        className="android-bg__robot"
        animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 28c-4 0-7 3-7 7v18c0 4 3 7 7 7h3v8c0 2 2 4 4 4s4-2 4-4v-8h18v8c0 2 2 4 4 4s4-2 4-4v-8h3c4 0 7-3 7-7V35c0-4-3-7-7-7h-2l4-8H10l4 8h-2z"
            fill="currentColor"
            opacity="0.12"
          />
          <circle cx="22" cy="42" r="4" fill="#3DDC84" opacity="0.5" />
          <circle cx="42" cy="42" r="4" fill="#3DDC84" opacity="0.5" />
          <path d="M24 52h16v3a2 2 0 01-2 2H26a2 2 0 01-2-2v-3z" fill="#3DDC84" opacity="0.4" />
        </svg>
      </motion.div>

      {snippets.map((text, i) => (
        <span
          key={text}
          className="android-bg__snippet"
          style={{
            top: `${8 + (i * 7) % 80}%`,
            left: `${3 + (i * 13) % 88}%`,
            animationDelay: `${i * 0.7}s`,
            color: i % 3 === 0 ? 'var(--kotlin)' : i % 3 === 1 ? 'var(--accent)' : 'var(--accent-blue)',
          }}
        >
          {text}
        </span>
      ))}

      {brackets.map((text, i) => (
        <span
          key={text}
          className="android-bg__bracket"
          style={{
            top: `${15 + (i * 22) % 70}%`,
            right: `${5 + (i * 18) % 80}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        >
          {text}
        </span>
      ))}

      <div className="android-bg__grid-dots" />
    </div>
  );
}
