import { profile } from '../data/cv';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {profile.name} — {t.profile.footerRole}
      </p>
    </footer>
  );
}
