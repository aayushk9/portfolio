import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aayush Kokate",
  initials: "A",
  url: "https://dillion.io",
  location: "India",
  locationLink: "",
  description:
    "21 year old nice guy",
  summary: `long story short; full stack engineer, crypto guy.  

  i like to code, work at early stage startups, brew coffee and enjoy a good game of cricket.  
    
  if you'd like to connect over a chat, say hello on [x.com](https://x.com/ak1twt) or book a meeting with me [here](https://cal.com/aayushdev/chat?Iuser=aayushdev&duration=5).`,
        
  avatarUrl: "/img.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "NestJS",
    "Postgres",
    "Prisma",
    "Docker",
    "Tailwind CSS",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aayushk.dev@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aayushk9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aayushcodes/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ak1twt",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
    work: [
    {
      company: "Dawn Labs",
      href: "https://dawn.ai",
      badges: [],
      location: "New York, United States (Remote)",
      title: "IC Full Stack Engineer",
      logoUrl: "/dawnlogo.jpg",
      start: "May 2025",
      end: "June 2025",
      description: "The cursor for trading",
    },
  ],
  education: [
    {
      school: "Pune University",
      href: "https://www.linkedin.com/school/savitribai-phule-pune-university-sppu/",
      degree: "Bachelors of Engineering (Electronics)",
      logoUrl: "/unilogo.jpg",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "MAK3SPACE",
      href: "https://mak3space.vercel.app/",
      active: true,
      description:
        "Private spaces for couples & friends, mak3space makes it easy to stay accountable using solana and fiat",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Prisma",
        "Solana",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: "https://mak3space.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/make-your-space",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mak3space.png",
      video:
        "",
    },
    {
      title: "Batch0",
      href: "https://batch-0.vercel.app/",
      active: true,
      description:
        "Connect with early users for your startup, easiest way to collect and manage beta user requests for your startup",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://batch-0.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/zerobatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/batch0.png",
      video:
        "",
    },
    {
      title: "Wordbook",
      href: "https://wordbook-one.vercel.app/",
      active: true,
      description:
        "Learn a new word every day with context, examples and usecase. Build your vocabulary effortlessly with WordBook.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://wordbook-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/wordbook",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wordbook.png",
      video: "",
    },
    {
      title: "Human Kind",
      href: "https://humankind-space.vercel.app/",
      active: true,
      description:
        "Human connection has features such as dailylogs, gratitude, knowledge and zen",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://humankind-space.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aayushk9/humankind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/kind.png",
      video: "",
    },
  ],
} as const;
