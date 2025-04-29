import { 
    Code, Palette, Store, Database, Cloud, Laptop,
  } from 'lucide-react';
  
  export interface SkillCategory {
    name: string;
    icon: any;
    items: string[];
  }
  
  export const skills: SkillCategory[] = [
    {
      name: 'Frontend Basics',
      icon: Code,
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design']
    },
    {
      name: 'UI Frameworks',
      icon: Palette,
      items: ['React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'SCSS/Sass']
    },
    {
      name: 'State Management',
      icon: Store,
      items: ['Redux Toolkit', 'Zustand']
    },
    {
      name: 'UI Component Libraries',
      icon: Laptop,
      items: ['Ant Design', 'Shadcn/ui']
    },
    {
      name: 'Build Tools',
      icon: Cloud,
      items: ['Vite.js', 'npm', ]
    },
    {
      name: 'Other Skills',
      icon: Database,
      items: ['Git',  'Responsive Design']
    }
  ];