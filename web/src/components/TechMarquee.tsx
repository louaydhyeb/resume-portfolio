import type { CSSProperties } from 'react';
import './TechMarquee.css';

const techs = [
  { name: 'Kotlin', color: '#7F52FF' },
  { name: 'Jetpack Compose', color: '#3DDC84' },
  { name: 'Coroutines', color: '#00D4FF' },
  { name: 'MVVM', color: '#A855F7' },
  { name: 'Room', color: '#3DDC84' },
  { name: 'Retrofit', color: '#28C840' },
  { name: 'Hilt', color: '#E448FF' },
  { name: 'StateFlow', color: '#7F52FF' },
  { name: 'Wear OS', color: '#3DDC84' },
  { name: 'Gradle', color: '#00D4FF' },
  { name: 'Material 3', color: '#A855F7' },
  { name: 'RxJava', color: '#7F52FF' },
];

const items = [...techs, ...techs];

export function TechMarquee() {
  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee__fade tech-marquee__fade--left" />
      <div className="tech-marquee__fade tech-marquee__fade--right" />
      <div className="tech-marquee__track">
        {items.map((tech, i) => (
          <span
            key={`${tech.name}-${i}`}
            className="tech-marquee__item"
            style={{ '--chip-color': tech.color } as CSSProperties}
          >
            <span className="tech-marquee__dot" />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
