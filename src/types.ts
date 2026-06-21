export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags?: string[];
  colorTheme: 'cyan' | 'violet';
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
  colorTheme: 'cyan' | 'violet';
}

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  colorTheme: 'cyan' | 'violet';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  colorTheme: 'cyan' | 'violet';
}
