export type Lang = 'fr' | 'en';

export interface NavItem {
  id: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  companyColor: string;
  logo: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  year: string;
  title: string;
  school: string;
  location: string;
}

export interface CertificationItem {
  year: string;
  title: string;
  subtitle: string;
}

export interface Translation {
  meta: { title: string; description: string };
  profile: {
    title: string;
    tagline: string;
    footerRole: string;
  };
  nav: NavItem[];
  hero: {
    available: string;
    greeting: string;
    viewExperience: string;
    contact: string;
    scrollLabel: string;
    stats: { value: string; label: string }[];
    floatingCards: { icon: string; title: string; sub: string }[];
  };
  phone: {
    hello: string;
    roleLabel: string;
    role: string;
    years: string;
    expert: string;
    clean: string;
    building: string;
  };
  sections: {
    skills: { label: string; title: string; highlight: string };
    experience: { label: string; title: string; highlight: string };
    education: { label: string; title: string; highlight: string };
    contact: { label: string; title: string; highlight: string; subtitle: string; send: string };
  };
  skills: SkillGroup[];
  experiences: Experience[];
  education: EducationItem[];
  certifications: CertificationItem[];
  navbar: { contact: string };
}
