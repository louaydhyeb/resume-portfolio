/** Préfixe les chemins publics pour GitHub Pages (/resume-portfolio/...) */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}
