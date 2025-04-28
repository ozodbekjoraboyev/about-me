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
      items: ['Redux Toolkit', 'Zustand', 'Context API', 'React Query']
    },
    {
      name: 'UI Component Libraries',
      icon: Laptop,
      items: ['Ant Design', 'Shadcn/ui', 'Material UI', 'Chakra UI']
    },
    {
      name: 'Build Tools',
      icon: Cloud,
      items: ['Vite.js', 'Webpack', 'npm', 'Yarn', 'ESLint']
    },
    {
      name: 'Other Skills',
      icon: Database,
      items: ['Git', 'RESTful APIs', 'GraphQL', 'Firebase', 'Responsive Design']
    }
  ];