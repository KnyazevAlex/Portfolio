import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Alex Kniaziev",
  initials: "AK",
  url: "https://dillion.io",
  location: "Indiana, USA",
  locationLink: "https://www.google.com/maps/place/indiana",
  description:
    "High School Athlete. Plan to become a fullstack software engineer, down the line.",
  summary:
    "I am a high school sophmore with a passion for software engineering, AI, web development and video editing. Over the past few years I was focused on refining my skills in web development, and I have built several projects using React, Next.js, Typescript, and PostgreSQL. I am also interested in AI and have been exploring various models and engineering approaches to help simplify complex problems. In addition to my technical skills, I am a swimmer and a powerlifter, and I believe that the discipline and dedication required for these sports have helped me develop a strong work ethic and a commitment to excellence in all areas of my life.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "alexkn044@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KnyazevAlex",
        icon: Icons.github,
        navbar: true,
      },

      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "https://linkedin.com/in/alex-kniaziev",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      X: {
        name: "X",
        url: "https://x.com/ST1LacKY",
        icon: Icons.x,

        navbar: true,
      },
   
      email: {
        name: "Send Email",
        url: "mailto:alexkn044@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "NewsLens",
      href: "https://news-lens-green.vercel.app/",
      dates: "August 2026 - October 2026",
      active: true,
      description:
        "NewsLens fetches news articles through a scraping pipeline, analyzes them with LLMs, generates summaries and estimated bias ratings, and discovers related articles using vector similarity search with PostgreSQL and pgvector.",
      technologies: [
        "Next.js",
        "Typescript",
        "Oxylabs",
        "Zod",
        "Gemeni",
        "GPT",
        "Supabase",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://news-lens-green.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/newslens.mp4",
    },
    {
      title: "FullStack Notebook",
      href: "https://fullstacknotes-4l6pb3zkf-alex-kniazievs-projects.vercel.app/home",
      dates: "June 2026 - July 2026",
      active: true,
      description:
        "My first big NextJs fulstack with a small custom auth system. It is a simple notebook app that allows users to create, edit, and delete notes. It also has a simple auth system that allows users to sign up, log in, and log out. It also features deboucning to make sure that your notes are saved to the database after a certain amount of time.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://news-lens-green.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/NotesApp_demo.mp4",
    },
    
  ],
 
} as const;
