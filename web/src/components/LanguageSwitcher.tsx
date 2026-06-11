import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n';
import './LanguageSwitcher.css';

const langs: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-switcher__btn ${lang === code ? 'lang-switcher__btn--active' : ''}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
