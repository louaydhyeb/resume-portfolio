import type { Translation } from './types';

export const fr: Translation = {
  meta: {
    title: 'Louay Dhyeb — Développeur Android Senior',
    description: 'Louay Dhyeb — Développeur Android Senior. 7+ ans d\'expérience. Portfolio et CV en ligne.',
  },
  profile: {
    title: 'Développeur Android Senior',
    tagline: '7+ ans d\'expérience · Kotlin · Architecture MVVM · Apps à grande échelle',
    footerRole: 'Développeur Android Senior',
  },
  nav: [
    { id: 'hero', label: 'Accueil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'education', label: 'Formation' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    available: 'Disponible pour de nouvelles opportunités',
    greeting: 'Bonjour, je suis',
    viewExperience: 'Voir mon parcours',
    contact: 'Me contacter',
    scrollLabel: 'Défiler vers le bas',
    stats: [
      { value: '7+', label: 'Ans d\'expérience' },
      { value: '4', label: 'Entreprises majeures' },
      { value: 'OCP', label: 'Certifié Java SE 11' },
    ],
    floatingCards: [
      { icon: '⚡', title: 'Coroutines', sub: 'Async & Flow' },
      { icon: '🏗️', title: 'MVVM', sub: 'Clean Architecture' },
      { icon: '🎨', title: 'Compose', sub: 'Material 3 UI' },
    ],
  },
  phone: {
    hello: 'Bonjour 👋',
    roleLabel: 'Rôle',
    role: 'Android Senior',
    years: 'ans',
    expert: 'expert',
    clean: 'clean',
    building: 'Building APK…',
  },
  sections: {
    skills: { label: 'Expertise', title: 'Compétences', highlight: 'techniques' },
    experience: { label: 'Parcours', title: 'Expériences', highlight: 'professionnelles' },
    education: { label: 'Formation', title: 'Parcours', highlight: 'académique' },
    contact: {
      label: 'Contact',
      title: 'Travaillons',
      highlight: 'ensemble',
      subtitle: 'Vous avez un projet Android ambitieux ? Discutons de comment je peux contribuer à votre équipe.',
      send: 'Envoyer un message',
    },
  },
  skills: [
    {
      category: 'Mobile',
      icon: '📱',
      items: ['Kotlin', 'Java', 'Jetpack Compose', 'Wear OS', 'Room', 'MVVM', 'Coroutines', 'RxJava', 'StateFlow'],
    },
    {
      category: 'Backend & Web',
      icon: '⚡',
      items: ['Spring Boot', 'Node.js', 'Angular', 'REST APIs', 'Microservices', 'JWT'],
    },
    {
      category: 'Bases de données',
      icon: '🗄️',
      items: ['MySQL', 'MongoDB', 'SQLite', 'Room', 'Neo4j'],
    },
    {
      category: 'DevOps & Outils',
      icon: '🔧',
      items: ['Git', 'GitLab CI/CD', 'Jenkins', 'Crashlytics', 'Jira', 'Gradle', 'OpenShift'],
    },
  ],
  experiences: [
    {
      period: 'Avr. 2023 — Aujourd\'hui',
      role: 'Développeur Android',
      company: 'Veolia',
      companyColor: '#e30613',
      logo: '/logos/veolia.svg',
      description:
        'Développement et maintenance d\'applications Android liées à la gestion et au suivi des déchets, dans un contexte industriel et réglementaire.',
      highlights: [
        'Conception et développement de fonctionnalités Android en Kotlin',
        'Refonte et modernisation de l\'architecture vers MVVM et composants Jetpack',
        'Migration progressive vers une architecture réactive (ViewModel, StateFlow, Coroutines)',
        'Gestion des flux de données, états UI et événements',
        'Consommation d\'API REST et amélioration des performances',
        'Travail en méthodologie Agile / Scrum',
      ],
      tech: ['Kotlin', 'Coroutines', 'StateFlow', 'Room', 'Retrofit', 'RxJava', 'Gradle', 'Crashlytics', 'GitLab CI/CD', 'Jenkins'],
    },
    {
      period: 'Nov. 2022 — Mars 2023',
      role: 'Développeur Android',
      company: 'France TV',
      companyColor: '#0055a4',
      logo: '/logos/francetv.svg',
      description:
        'Développement de l\'application OKOO France TV destinée au streaming vidéo pour les enfants de 3 à 12 ans.',
      highlights: [
        'Adoption de la méthodologie Scrum (planning, grooming, estimation)',
        'Conception et développement de l\'application avec Kotlin',
        'Gestion des appels back-end avec Coroutines et RxJava',
        'Architecture MVVM Clean — support et maintenance',
      ],
      tech: ['Kotlin', 'Coroutines', 'RxJava', 'Retrofit', 'LiveData', 'Crashlytics', 'Jenkins'],
    },
    {
      period: 'Fév. 2022 — Nov. 2022',
      role: 'Développeur Android',
      company: 'Deezer',
      companyColor: '#a238ff',
      logo: '/logos/deezer.png',
      description:
        'Développement de l\'application Wear OS Deezer en collaboration avec Google pour le lancement sur la Watch Pixel.',
      highlights: [
        'Conception et développement avec Kotlin et Jetpack Compose',
        'Gestion des appels back-end avec Coroutines',
        'Architecture MVVM Clean — support et maintenance',
        'Collaboration directe avec Google sur le lancement Wear OS',
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'RxJava', 'Hilt', 'Moshi', 'Retrofit', 'Timber'],
    },
    {
      period: 'Fév. 2019 — Jan. 2022',
      role: 'Développeur Android',
      company: 'Sofrecom',
      companyColor: '#ff6600',
      logo: '/logos/sofrecom.png',
      description: 'Plusieurs projets Android et backend au sein du groupe Orange.',
      highlights: [
        'MyOrange — évolution de l\'app avec architecture MVVM, déploiement multi-pays Europe & MEA',
        'Orange Money & Nomad — APIs REST Spring Boot pour transactions et paiement en ligne (Person Centric)',
        'App événementielle interne — communication collaborateurs, REST services, intégration SSIS',
        'Tests unitaires JUnit & Mockito, architecture micro-services',
      ],
      tech: ['Kotlin', 'Java 8', 'Spring Boot', 'MongoDB', 'Neo4j', 'Swagger', 'Kodein', 'Moshi', 'Retrofit', 'OpenShift'],
    },
  ],
  education: [
    {
      year: '2019',
      title: "Diplôme d'Ingénieur en Informatique",
      school: 'École Supérieure Privée d\'Ingénierie et de Technologie — ESPRIT',
      location: 'Tunisie',
    },
  ],
  certifications: [
    {
      year: '2022',
      title: 'OCP Oracle Certified Professional',
      subtitle: 'Java SE 11 Developer',
    },
  ],
  navbar: { contact: 'Me contacter' },
};
