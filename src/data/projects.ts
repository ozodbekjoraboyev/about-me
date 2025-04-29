export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "An admin panel to manage and control an online store.",
    image:
      "https://i.pinimg.com/736x/db/3d/b7/db3db7f590de99676bec7b3f36f20692.jpg",
    tags: ["Vite", "React", "TypeScript", "Ant Design", "Zustand"],
    demoUrl: "https://admin-page-alpha-one.vercel.app/",
    githubUrl: "https://github.com/ozodbekjoraboyev/admin_page",
  },
  {
    id: 2,
    title: "Online Store",
    description:
      "There is a bo'limlar for placing orders and using the user.",
    image:
      "https://i.pinimg.com/736x/54/e3/c0/54e3c0564bd1b64c82c5a482d6895d4c.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
    demoUrl: "http://ozod-shop.vercel.app/",
    githubUrl: "https://github.com/ozodbekjoraboyev/ozod_shop",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "There is a bo'limlar for placing orders and using the user.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTLToY628niVMOZFs2fToAwhCTY2kB4GeZw&s",
    tags: ["React", "Shadcn/ui", "Redux Toolkit", "TypeScript"],
    demoUrl: "https://texnomart-sivu.vercel.app/",
    githubUrl: "https://github.com/ozodbekjoraboyev/Texnomart-",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A beautiful weather application with 7-day forecasts, location-based services, and animated weather conditions.",
    image:
      "https://i.pinimg.com/736x/21/0c/22/210c22ae1d578cc50ad1b201fd7c9ef0.jpg",
    tags: ["Next.js", "tailwindcss", "ShadCN"],
    demoUrl: "https://about-me-theta-two.vercel.app/",
    githubUrl: "https://github.com/ozodbekjoraboyev/about-me",
  },
  // {
  //   id: 5,
  //   title: "Portfolio Website",
  //   description:
  //     "A modern portfolio website template for developers with customizable sections and animation effects.",
  //   image:
  //     "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   tags: ["Next.js", "Tailwind", "TypeScript"],
  //   demoUrl: "https://example.com/demo5",
  //   githubUrl: "https://github.com/ozodbekdev/portfolio",
  // },
  // {
  //   id: 6,
  //   title: "Recipe Finder App",
  //   description:
  //     "A recipe discovery application with search functionality, filtering options, and user collections.",
  //   image:
  //     "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   tags: ["React", "Tailwind", "Zustand"],
  //   demoUrl: "https://example.com/demo6",
  //   githubUrl: "https://github.com/ozodbekdev/recipe-finder",
  // },
];
