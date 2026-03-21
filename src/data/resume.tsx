import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikhil Garg",
  initials: "DV",
  url: "https://github.com/nikhil-rf",
  location: "Bathinda, India",
  locationLink: "",
  description:
    "Software Engineer turned Builder. I like working on something that people actually want 🤌. Open to remote opportunities.",
  summary:
    "At the core, I’m someone who loves building products from scratch and turning ideas into reality. Over the past few years, I’ve worked on multiple SaaS projects like Image Magic, Rekall, and InvoiceFlow, where I handled everything from architecture and APIs to clean UI/UX. My journey started with a deep interest in both software engineering and product building, and since then, I’ve been focused on creating apps that are not just functional but also impactful. Right now, I’m channeling my energy into building apps that can generate real revenue—bridging the gap between learning, experimentation, and financial independence. Beyond my own projects, I’m also open to remote opportunities, where I can contribute, learn, and collaborate on meaningful products with ambitious teams.",
  avatarUrl: "/me.jpg",
  skills: [
  "JavaScript",
  "TypeScript",
  "Python",
  "C/C++",
  "React.js",
  "Next.js",
  "Tailwind",
  "ShadCN",
  "GSAP",
  "Node.js",
  "Express.js",
  "WebSockets (Socket.io)",
  "MongoDB",
  "Mongoose",
  "Postgres",
  "Prisma ORM",
  "Clerk",
  "Neon",
  "Data Structures and Algorithm",
  "Git/GitHub",
  "Vercel",
  "Postman"
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "nikhilgarg5002@gmail.com",
    tel: "+917973957400",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nikhil-rf",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-garg-learner",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/NIKHIL_100x",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "nikhilgarg5002@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mittal Alliance Private Limited",
      href: "",
      badges: [],
      location: "Remote",
      title: "Associate Software Engineer Intern",
      logoUrl: "/MittalLogo.png",
      start: "April 2025",
      end: "June 2025",
      description:
        "Learned about the end-to-end architecture of large-scale projects, including production and testing environments and computer networks. Gained exposure to system design, scalability, fault tolerance, and deployment practices in distributed systems.",
    },
    
  ],
  education: [
    {
      school: " Baba Farid College of Engineering and Technology",
      href: "",
      degree: " Bachelor of Technology in Computer Science and Engineering (AI & ML)",
      logoUrl: "/college_logo.jpg",
      start: "2023",
      end: "2027",
    },
    
    
  ],
  projects: [
    {
  title: "Student Progress Management Application",
  // href: "https://ai-headshots-dt9y.vercel.app/",
  dates: "February 2025 - April 2025",
  active: false,
  description:
    "Application is a full-stack platform that tracks and visualizes student coding progress across LeetCode and CodeChef, enabling unified performance insights. It features scalable RESTful APIs and animated dashboards with authentication and modular state management — delivering a seamless experience for monitoring submissions, ratings, and problem-solving metrics across multiple platforms.",
  technologies: [
    "React",
    "TypeScript",
    "Gemini API",
    "Express.js",
    "MongoDB",
    "TailwindCSS",
    "Shadcn UI",
    "GSAP"
  ],
  links: [
    {
      type: "Live",
      href: "https://k72-ca-delta.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Github - Private Repo",
      href: "Private Repo",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "",
  video: "",
},

    {
      title: "K72.ca",
      href: "https://k72-ca-delta.vercel.app/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "K72.ca is a pixel-perfect recreation of an award-winning Canadian agency website. It features immersive scroll-based and hover animations with smooth scrolling, and seamless client-side transitions that preserve animation state across routes — faithfully capturing the original site's interactive and visual experience.",
      technologies: [
        "React",
        "Typescript",
        "Lenis",
        "GSAP",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://k72-ca-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nikhil-rf/K72.Ca",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Smart Farmer Platform",
      href: "https://smart-farmer-platform.vercel.app/",
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "Smart Farmer Platform is a comprehensive digital platform designed to empower farmers with modern agricultural solutions and real-time insights. It features a Farm Digital Twin for field visualization, crop growth simulation, irrigation prediction, and yield forecasting. The platform integrates IoT sensor monitoring with automated alerts, an AI-powered smart advisory system for personalized farming guidance, and live market intelligence with price alerts and nearby market information. It also includes a sustainability tracking module with carbon footprint monitoring, a green points system, and a community leaderboard — delivering a fully connected, data-driven farming experience from field to market.",
      technologies: [
        "NextJs",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://smart-farmer-platform.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nikhil-rf/Smart-Farmer-Platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Invoice Flow",
      href: "https://billmate-tau.vercel.app/",
      dates: "August 2025 - September 2025",
      active: true,
      description:
        "InvoiceFlow is a streamlined invoice management system built with Next.js and TypeScript, designed to help freelancers, entrepreneurs, and small businesses manage clients and invoices with ease—generating professional PDF invoices in under a minute. It uses a modern stack with Next.js + TypeScript on the frontend, styled via Tailwind CSS / CSS modules, and leverages Prisma for database interactions. PDF generation is handled using tools like react-pdf, jspdf, or server-side HTML-to-PDF rendering, while development utilities such as ESLint, PostCSS, and TypeScript configs ensure clean, maintainable, and production-ready code.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://billmate-tau.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    
  ],
  hackathons: [
    
  ]
} as const;
