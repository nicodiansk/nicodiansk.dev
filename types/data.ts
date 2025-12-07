// ABOUTME: TypeScript type definitions for JSON data structures
// ABOUTME: Provides compile-time type safety for projects, skills, about, and translations data

export interface BilingualText {
  en: string;
  it: string;
}

export interface ProjectMetric {
  label: BilingualText;
  value: string;
  color: 'lime' | 'cyan' | 'yellow' | 'magenta';
}

export interface Project {
  id: string;
  status: 'LIVE' | 'DEV' | 'ARCHIVED';
  evolution?: BilingualText;
  title: BilingualText;
  description: BilingualText;
  longDescription: BilingualText;
  overview: BilingualText;
  challenge: BilingualText;
  solution: BilingualText;
  primaryTech: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  tags: string[];
  year: number;
  featured: boolean;
}

export interface ProjectsData {
  projects: Project[];
}

export interface Skill {
  name: string;
  level: number;
  details: BilingualText;
}

export interface SkillCategory {
  id: string;
  title: BilingualText;
  icon: string;
  color: 'cyan' | 'magenta' | 'lime' | 'yellow';
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Hobby {
  name: BilingualText;
  icon: string;
}

export interface Language {
  name: string;
  level: BilingualText;
  proficiency: number;
}

export interface Education {
  degree: BilingualText;
  institution: string;
  location: string;
  period: {
    start: string;
    end: string;
    display: BilingualText;
  };
  grade: BilingualText | null;
  thesis: {
    title: BilingualText;
    description: BilingualText;
  };
}

export interface WorkExperience {
  current: {
    company: string;
    role: BilingualText;
    location: string;
    period: {
      start: string;
      end: null;
      display: BilingualText;
    };
    team: string;
    projects: string;
    highlights: BilingualText[];
  };
}

export interface AboutData {
  name: string;
  bio: BilingualText;
  mission: BilingualText;
  location: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    email: string;
    linkedin: string;
    gitlab: string;
    github: string;
  };
  work: WorkExperience;
  education: Education[];
  hobbies: Hobby[];
  languages: Language[];
}

export interface TranslationSection {
  [key: string]: string | TranslationSection;
}

export interface Translations {
  en: TranslationSection;
  it: TranslationSection;
}
