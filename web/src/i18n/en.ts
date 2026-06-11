import type { Translation } from './types';

export const en: Translation = {
  meta: {
    title: 'Louay Dhyeb — Senior Android Developer',
    description: 'Louay Dhyeb — Senior Android Developer. 7+ years of experience. Online portfolio and CV.',
  },
  profile: {
    title: 'Senior Android Developer',
    tagline: '7+ years of experience · Kotlin · MVVM Architecture · Large-scale apps',
    footerRole: 'Senior Android Developer',
  },
  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    available: 'Open to new opportunities',
    greeting: 'Hi, I\'m',
    viewExperience: 'View my experience',
    contact: 'Get in touch',
    scrollLabel: 'Scroll down',
    stats: [
      { value: '7+', label: 'Years of experience' },
      { value: '4', label: 'Major companies' },
      { value: 'OCP', label: 'Java SE 11 Certified' },
    ],
    floatingCards: [
      { icon: '⚡', title: 'Coroutines', sub: 'Async & Flow' },
      { icon: '🏗️', title: 'MVVM', sub: 'Clean Architecture' },
      { icon: '🎨', title: 'Compose', sub: 'Material 3 UI' },
    ],
  },
  phone: {
    hello: 'Hello 👋',
    roleLabel: 'Role',
    role: 'Android Senior',
    years: 'yrs',
    expert: 'expert',
    clean: 'clean',
    building: 'Building APK…',
  },
  sections: {
    skills: { label: 'Expertise', title: 'Technical', highlight: 'skills' },
    experience: { label: 'Career', title: 'Professional', highlight: 'experience' },
    education: { label: 'Education', title: 'Academic', highlight: 'background' },
    contact: {
      label: 'Contact',
      title: 'Let\'s work',
      highlight: 'together',
      subtitle: 'Have an ambitious Android project? Let\'s discuss how I can contribute to your team.',
      send: 'Send a message',
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
      category: 'Databases',
      icon: '🗄️',
      items: ['MySQL', 'MongoDB', 'SQLite', 'Room', 'Neo4j'],
    },
    {
      category: 'DevOps & Tools',
      icon: '🔧',
      items: ['Git', 'GitLab CI/CD', 'Jenkins', 'Crashlytics', 'Jira', 'Gradle', 'OpenShift'],
    },
  ],
  experiences: [
    {
      period: 'Apr. 2023 — Present',
      role: 'Android Developer',
      company: 'Veolia',
      companyColor: '#e30613',
      logo: '/logos/veolia.svg',
      description:
        'Development and maintenance of Android applications for waste management and tracking in an industrial and regulatory context.',
      highlights: [
        'Design and development of Android features in Kotlin',
        'Architecture refactoring and modernization to MVVM and Jetpack components',
        'Progressive migration to reactive architecture (ViewModel, StateFlow, Coroutines)',
        'Data flow, UI state and event management',
        'REST API consumption and performance improvements',
        'Agile / Scrum methodology',
      ],
      tech: ['Kotlin', 'Coroutines', 'StateFlow', 'Room', 'Retrofit', 'RxJava', 'Gradle', 'Crashlytics', 'GitLab CI/CD', 'Jenkins'],
    },
    {
      period: 'Nov. 2022 — Mar. 2023',
      role: 'Android Developer',
      company: 'France TV',
      companyColor: '#0055a4',
      logo: '/logos/francetv.svg',
      description:
        'Development of the OKOO France TV app for video streaming aimed at children aged 3 to 12.',
      highlights: [
        'Scrum methodology adoption (planning, grooming, estimation)',
        'App design and development with Kotlin',
        'Back-end calls management with Coroutines and RxJava',
        'MVVM Clean architecture — support and maintenance',
      ],
      tech: ['Kotlin', 'Coroutines', 'RxJava', 'Retrofit', 'LiveData', 'Crashlytics', 'Jenkins'],
    },
    {
      period: 'Feb. 2022 — Nov. 2022',
      role: 'Android Developer',
      company: 'Deezer',
      companyColor: '#a238ff',
      logo: '/logos/deezer.png',
      description:
        'Development of the Deezer Wear OS app in collaboration with Google for the Pixel Watch launch.',
      highlights: [
        'Design and development with Kotlin and Jetpack Compose',
        'Back-end calls management with Coroutines',
        'MVVM Clean architecture — support and maintenance',
        'Direct collaboration with Google on Wear OS launch',
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'RxJava', 'Hilt', 'Moshi', 'Retrofit', 'Timber'],
    },
    {
      period: 'Feb. 2019 — Jan. 2022',
      role: 'Android Developer',
      company: 'Sofrecom',
      companyColor: '#ff6600',
      logo: '/logos/sofrecom.png',
      description: 'Multiple Android and backend projects within the Orange Group.',
      highlights: [
        'MyOrange — app evolution with MVVM architecture, multi-country deployment across Europe & MEA',
        'Orange Money & Nomad — Spring Boot REST APIs for online transactions and payments (Person Centric)',
        'Internal events app — team communication, REST services, SSIS integration',
        'JUnit & Mockito unit tests, micro-services architecture',
      ],
      tech: ['Kotlin', 'Java 8', 'Spring Boot', 'MongoDB', 'Neo4j', 'Swagger', 'Kodein', 'Moshi', 'Retrofit', 'OpenShift'],
    },
  ],
  education: [
    {
      year: '2019',
      title: 'Computer Engineering Degree',
      school: 'Higher Private School of Engineering and Technology — ESPRIT',
      location: 'Tunisia',
    },
  ],
  certifications: [
    {
      year: '2022',
      title: 'OCP Oracle Certified Professional',
      subtitle: 'Java SE 11 Developer',
    },
  ],
  navbar: { contact: 'Get in touch' },
};
