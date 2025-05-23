
export interface NavLink {
  href: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string[];
  logoUrl?: string; // Optional company logo
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
