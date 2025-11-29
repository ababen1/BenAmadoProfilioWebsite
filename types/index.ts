export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
  location?: string;
}

