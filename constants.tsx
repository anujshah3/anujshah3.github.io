import React from 'react';
import { NavLink, ExperienceItem, ProjectItem, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const ABOUT_ME_PHOTO_URL = "/img/profile-cropped.jpg";

export const EMAIL_ADDRESS = "anujshah031198@gmail.com";

export const RESUME_URL = "https://drive.google.com/file/d/1CYzueDjAVyxKE34wGh3zzES9UNbxo961/view?usp=sharing";

// SVG Icons
export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className || "w-6 h-6"}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className || "w-6 h-6"}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-4 h-4 ml-1"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: `mailto:${EMAIL_ADDRESS}`, icon: <MailIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anujshah0311/', icon: <LinkedInIcon /> },
  { name: 'GitHub', url: 'https://github.com/anujshah3', icon: <GitHubIcon /> },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'docusign',
    date: 'Aug 2023 - Present',
    title: 'Software Engineer',
    company: 'DocuSign',
    description: [
      'Focus on enhancing and optimizing pipelines to streamline development processes.',
      'Implement efficient CI/CD workflows, guaranteeing developers receive prompt and dependable feedback.',
    ],
    logoUrl: '/img/docusign-logo.png',
  },
  {
    id: 'continental',
    date: 'May 2022 - May 2023',
    title: 'Software Engineering Intern',
    company: 'Continental',
    description: [
      'Developed a robust and scalable containerized service for automating testing of car modules.',
      'Achieved significant time and infrastructure savings by implementing a centralized ecosystem using low-latency instances.',
    ],
    logoUrl: '/img/continental-logo.jpg',
  },
  {
    id: 'verveware',
    date: 'Jun 2022 - Aug 2022',
    title: 'Software Development Engineer Intern',
    company: 'Verveware',
    description: [
      'Pioneered the development and deployment of a groundbreaking home care product, streamlining the whole process.',
      'Contributed to collaborative projects, developed interactive web apps, created engaging user experience, and optimized backend logic, leaving a lasting impact on the product and users experiences.',
    ],
    logoUrl: '/img/verveware-logo.png',
  },
  {
    id: 'niu',
    date: 'Mar 2022 - May 2022',
    title: 'Research Assistant',
    company: 'Northern Illinois University (NIU)',
    description: [
      'Worked with two professors and PhD students to engineer and improve major features of Dataflow Notebook extension.',
      'Contributed to an open-source project aimed at elevating reproducibility of past work on Jupyter Notebook.',
    ],
    logoUrl: '/img/NIU-logo.webp',
  },
  {
    id: 'cognoai',
    date: 'Aug 2020 - Jul 2021',
    title: 'Python Developer',
    company: 'Cogno AI',
    description: [
      'Delivered high-quality, robust production code for a diverse array of projects for clients such as ICICI Bank, ICICI Securities, Nippon India Mutual Fund, Prabhudas Lilladher, and UTI Mutual Fund.',
      'Pioneered innovative chatbot and live chat solutions that elevated customer engagement and empowered sustainable business models.',
    ],
    logoUrl: '/img/cognoai-logo.png',
  },
];

export const PROJECT_DATA: ProjectItem[] = [
  {
    id: 'project1',
    title: 'Few Shot Learning',
    description: 'Analyze IRS tax data and predict topics discussed using Few-Shot Learning techniques combined with Topic Modeling. Uncover trends, visualize topics over time, and enhance topic prediction for unexplored sections with this comprehensive repository.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'NLTK'],
    imageUrl: '/img/fsl.jpeg',
    //liveLink: '#',
    repoLink: 'https://github.com/anujshah3/Few-Shot-Learning-with-Topic-Modeling',
  },
  {
    id: 'project2',
    title: 'AddressTrail',
    description: 'Streamline address management with a unique ID system, simplifying updates for users and ensuring accurate data for organizations.',
    techStack: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
    imageUrl: '/img/address-trail.jpeg',
    // liveLink: '#',
		repoLink: 'https://github.com/anujshah3/AddressTrail',
  },
  {
    id: 'project3',
    title: 'AccuStay',
    description: 'Harnessing the power of machine learning, I developed predictive models for hotel booking cancellation, leveraging factors such as guest preferences, geographic location, hotel details, and many more factors. By deploying advanced models and tuning hyperparameters, I achieved an impressive accuracy, empowering hotels to optimize bookings and deliver exceptional guest experiences.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    imageUrl: '/img/accustay.jpeg',
    // liveLink: '#',
    // repoLink: '#',
  },
];

export const MORE_PROJECTS_LINK = "https://github.com/anujshah3?tab=repositories";
