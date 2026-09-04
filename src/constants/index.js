import {
  web,
  frontend,
  design,
  backend,
  fullStack,
  html,
  css,
  javascript,
  reactjs,
  mui,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  mongoose,
  git,
  github,
  bootstrap,
  c,
  cpp,
  restApi,
  python,
  typescript,
  nextjs,
  vscode,
  ChatGPT,
  chrome,
  mongodbCompass,
  postman,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullStack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Learning TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Matirial UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "REST APIs",
    icon: restApi,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHup",
    icon: github,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Learning Python",
    icon: python,
  },
];

const tools = [
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "ChatGPT",
    icon: ChatGPT,
  },
  {
    name: "Chrome",
    icon: chrome,
  },
  {
    name: "Mongodb Compass",
    icon: mongodbCompass,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Claude",
    icon: "https://cdn.simpleicons.org/claude",
  },
  {
    name: "Lovable",
    icon: "https://lovable.dev/favicon.ico",
  },
  {
    name: "Cursor",
    icon: "https://cdn.simpleicons.org/cursor",
  },
];

const experiences = [
  {
    title: "MERN Developer Intern",
    company_name: "CS Infotech, Chandigarh",
    icon: frontend,
    iconBg: "#383E56",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Built responsive web interfaces using React.js and modern JavaScript.",
      "Worked with Node.js, Express.js, and MongoDB to create API-driven features.",
      "Practiced component-based development and reusable UI patterns.",
      "Improved debugging, Git workflow, and full stack development fundamentals.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "IIT Jammu",
    icon: design,
    iconBg: "white",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed full stack features with React.js, Node.js, Express.js, and MongoDB.",
      "Created clean, responsive pages with attention to usability and performance.",
      "Integrated frontend views with backend APIs and handled data-driven workflows.",
      "Collaborated on project tasks while strengthening problem-solving and deployment awareness.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "Sortiq Solution Pvt Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2026 - Jul 2026",
    points: [
      "Worked on MERN stack application modules from UI implementation to backend integration.",
      "Built reusable React components and connected them with REST APIs.",
      "Handled MongoDB data models, API testing, and application debugging.",
      "Focused on delivering maintainable code and improving real-world project development skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sachin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Sachin does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sachin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AgriRent",
    description:
      "A web-based platform designed to help users rent agricultural equipment and connect with available resources in a simple, accessible way.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    alt: "AgriRent",
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "CMS",
    description:
      "A content management system for creating, organizing, updating, and managing website content through an easy-to-use admin workflow.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "CMS",

    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website built to showcase skills, internship experience, projects, and contact details with a modern responsive interface.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    alt: "Portfolio",
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "Todo App",
    description:
      "A task management application that allows users to add, update, complete, and organize daily tasks with a clean and responsive user experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
    alt: "Todo App",
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "Spotify Clone",
    description:
      "A frontend clone project focused on recreating real-world layouts, responsive design patterns, and interactive UI behavior with attention to detail.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=900&q=80",
    alt: "Spotify Clone",
    source_code_link: "#",
    live_link: "#",
  },
  // {
  //   name: "PG Management",
  //   description:
  //     "A comprehensive PG Management platform that allows Admin to manage people who are staying in their PG and provide them with the best possible service.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: 'https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/portfolio.png',
  //   source_code_link: "#",
  //   live_link: "http://3.82.129.40:8000/",
  // },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
