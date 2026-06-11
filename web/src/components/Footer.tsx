import { profile } from '../data/cv';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {profile.name} — Développeur Android Senior
      </p>
    </footer>
  );
}
