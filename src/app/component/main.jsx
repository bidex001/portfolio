"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import SpotlightShell from "./spotlight-shell";
import TextReveal from "./text-reveal";

const Main = ({about, contact, project, skills, onSelectTab}) => {
  const [showName, setShowName] = useState(true);
  const [success,setSuccess] = useState(false);
  const [data,setData] = useState({
    name:"",
    email:"",
    message:""
  });

  async function sendMail() {
    setSuccess(false);
    try {
      const res = await axios.post('/api/contact', data);
      console.log(res);
      setSuccess(true);
      setData({
        name:"",
        email:"",
        message:""
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const id = setInterval(() => setShowName((prev) => !prev), 3000);
    return () => clearInterval(id);
  }, []);

  const statusLabel = showName
    ? "Available for fullstack roles"
    : "Building fast, polished products";

 const techStack = [
  {
    id: 1,
    name: "HTML5",
    category: "Frontend",
    level: "Expert",
    description: "Semantic web structure and responsive layouts.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend",
    level: "Expert",
    description: "Modern CSS, flex/grid, animations, responsive UI.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Expert",
    description: "Core scripting for dynamic web applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    description: "Utility-first CSS framework for rapid UI development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 11,
    name: "python",
    category: "Backend",
    level: "Intermediate",
    description: "High-level, general-purpose programming language.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: 5,
    name: "React.js",
    category: "Frontend",
    level: "Expert",
    description: "Component-driven UI, SPA development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 6,
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    description: "SSR/SSG production-grade React framework.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  {
    id: 7,
    name: "React Native",
    category: "Mobile",
    level: "Advanced",
    description: "Cross-platform app development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 8,
    name: "Expo",
    category: "Mobile",
    level: "Advanced",
    description: "Fast mobile development + OTA updates.",
    image: "data:image/png;base64,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"
  },

  {
    id: 9,
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    description: "Server-side JavaScript runtime.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 10,
    name: "Express.js",
    category: "Backend",
    level: "Advanced",
    description: "Fast Node.js web framework.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  {
    id: 13,
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    description: "Document-based NoSQL database.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 23,
    name: "PostgreSQL",
    category: "Database",
    level: "Intermediate",
    description: "Relational database for structured data.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 15,
    name: "Git & GitHub",
    category: "DevOps",
    level: "Expert",
    description: "Version control & collaboration.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: 16,
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    description: "Containerization platform.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: 19,
    name: "Vercel",
    category: "Cloud",
    level: "Advanced",
    description: "Frontend cloud hosting.",
    image: "https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg",
  },
  {
    id: 22,
    name: "Postman",
    category: "Tools",
    level: "Advanced",
    description: "API testing & documentation.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

const projectArray = [
  {
    name:"movie app",
    description:"A movie browsing app using The Movie Database (TMDb) API to fetch and display movie data. Built with React for the frontend and Node.js with Express for the backend.",
    image:"/images/movie.png",
    tools:"next.js + tailwindcss + TMDB API + javascript",
    link:"https://movie-six-phi.vercel.app/",
    code:"https://github.com/bidex001/movie"
  },
  {
    name:"e-commerce site",
    description:"A full-featured e-commerce website with product listings, shopping cart, and checkout functionality. Built with Next.js for server-side rendering and MongoDB for the database.",
    image:"/images/full.png",
    tools:"next.js + mongodb + stripe + tailwindcss + javascript",
    link:"https://my-app-ecru-six-88.vercel.app/auth/login",
    code:"https://github.com/bidex001/my-app"
  },
  {
    name:"music player",
    description:"A web-based music player that allows users to play, pause, and skip tracks. Built with React for the frontend .",
    image:"/images/music.png",
    tools:"next.js + tailwindcss +javascript",
    link:"https://react-basic-pro-1.vercel.app/musicplayer",
    code:"https://github.com/bidex001/react-basic-pro-1"
  },
  {
    name:"a simple frontend ecommerce site",
    description:"A simple frontend e-commerce site built with React and Tailwind CSS. It features product listings, a shopping cart, and a checkout page.",
    image:"/images/ecommerce.png",
    tools:"next.js + tailwindcss + javascript",
    link:"https://ecommerce-web-app-vert.vercel.app/",
    code:"https://github.com/bidex001/Ecommerce-web-app"
  },
  {
    name:"mortgage calculator",
    description:"A mortgage calculator that helps users estimate their monthly mortgage payments based on loan amount, interest rate, and loan term. Built with React for the frontend.", 
    image:"/images/mortgage.png",
    tools:"next.js + tailwindcss + javascript",
    link:"https://mortgage-calc-main-5slg.vercel.app/",
    code:"https://github.com/bidex001/mortgage-calc-main"
  },
  {
    name:'space website',
    description:"A space-themed website that provides information about planets, stars, and other celestial bodies. Built with React for the frontend.",
    image:"/images/space.png",
    tools:"next.js + tailwindcss + javascript",
    link:"https://space-website-1xwe.vercel.app/",
    code:"https://github.com/bidex001/space-website"
  }
];

const techCategories = [...new Set(techStack.map((item) => item.category))];
const formFieldClassName =
  "w-full rounded-[22px] border border-[var(--border)] bg-[var(--surface)]/82 px-5 py-4 text-sm text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--muted)]/80 focus:border-[var(--accent)]/45 focus:bg-[var(--surface)] focus:ring-4 focus:ring-[color:rgba(124,58,237,0.12)]";


  return (
    <div className="flex h-full min-h-0 flex-1 justify-center overflow-y-auto overflow-x-hidden text-[var(--text)] max-xl:h-auto max-xl:min-h-screen max-xl:overflow-visible max-xl:w-full max-lg:py-2 max-sm:pt-20 max-sm:pb-24">
      {about && (
        <SpotlightShell className="w-full max-w-[1180px] px-6 py-8 sm:px-10 sm:py-12 max-sm:px-4 max-sm:py-5">
          <div className="flex h-full min-h-fit w-full items-center justify-between gap-12 max-lg:flex-col-reverse max-lg:items-start max-lg:justify-start max-lg:gap-10 max-sm:gap-6">
            <div className="flex w-full max-w-[560px] flex-col gap-6 max-sm:gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)] backdrop-blur">
                  Portfolio 2026
                </span>
                <span className="rounded-full border border-[color:rgba(124,58,237,0.18)] bg-[color:rgba(124,58,237,0.12)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  {statusLabel}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--muted)]">
                  Hello, I&apos;m
                </p>
                <h1 className="font-heading text-4xl font-semibold leading-[0.95] max-sm:text-3xl sm:text-5xl xl:text-6xl">
                  <TextReveal text="Adebayo Bidemi" className="block" />
                  <TextReveal
                    text="Fullstack Developer"
                    className="mt-3 block text-[var(--accent)]"
                    initialDelay={240}
                  />
                </h1>
              </div>

              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base max-sm:text-[15px] max-sm:leading-7">
                I build fast, polished web experiences with a strong focus on
                clean interfaces, smooth interactions, and production-ready
                frontend engineering. I&apos;m looking for work where I can ship
                useful products, solve real UI problems, and make the end-user
                experience feel sharp.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 max-sm:flex-col max-sm:items-stretch">
                <a
                  href="/Adebayo Bidemi cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold capitalize text-[var(--accent-contrast)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-strong)] max-sm:w-full"
                >
                  view resume
                </a>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab?.("project");
                  }}
                  className="inline-flex h-[52px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-6 text-sm font-semibold capitalize text-[var(--text)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] max-sm:w-full"
                >
                  see projects
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab?.("contact");
                  }}
                  className="inline-flex h-[52px] items-center justify-center rounded-full border border-transparent px-2 text-sm font-semibold capitalize text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)] max-sm:w-full"
                >
                  let&apos;s connect
                </button>
              </div>

              <div className="grid gap-4 pt-3 sm:grid-cols-2 max-sm:gap-3">
                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)]/75 p-4 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                    core stack
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[var(--text)]">
                    Next.js, React, Tailwind, Node.js
                  </p>
                </div>
                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)]/75 p-4 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                    workflow
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[var(--text)]">
                    Responsive UI, APIs, polished interactions
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex w-full max-w-[430px] justify-center self-center max-lg:max-w-[360px] max-sm:max-w-[300px]">
              <div className="absolute inset-0 scale-90 rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.34),transparent_70%)] blur-3xl" />
              <div className="relative w-full rounded-[34px] border border-[var(--border)] bg-[var(--surface)]/72 p-4 shadow-[var(--shadow)] backdrop-blur max-sm:rounded-[26px] max-sm:p-3">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/70 to-transparent" />
                <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)]">
                  <Image
                    src={"/bidex.jpg"}
                    alt="Adebayo Bidemi portrait"
                    width={480}
                    height={560}
                    className="h-[480px] w-full object-cover max-md:h-[360px] max-sm:h-[320px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(15,23,42,0.16)_100%)]" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4 rounded-[24px] border border-[var(--border)] bg-[var(--surface)]/85 p-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                      focus
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--text)]">
                      Crafting high-conviction UI with backend support
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:rgba(124,58,237,0.14)] text-sm font-bold tracking-[0.25em] text-[var(--accent)]">
                    FS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightShell>
      )}

      {skills && (
        <div className="flex w-full max-w-[1160px] flex-1 flex-col items-center justify-start gap-8 px-3 py-10 max-lg:w-full max-sm:px-2 max-sm:py-8">
          <SpotlightShell className="w-full px-6 py-8 sm:px-8 sm:py-10 max-sm:px-4 max-sm:py-5">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--muted)] backdrop-blur">
                    Skill stack
                  </span>
                  <span className="rounded-full border border-[color:rgba(124,58,237,0.18)] bg-[color:rgba(124,58,237,0.12)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    {techStack.length} technologies
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--muted)]">
                    Working toolkit
                  </p>
                  <h1 className="font-heading text-4xl font-semibold leading-[0.95] max-sm:text-3xl sm:text-5xl">
                    <TextReveal text="Fullstack technologies" className="block" />
                  </h1>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                  These are the tools I lean on to build frontend-heavy products,
                  API-connected applications, and complete end-to-end portfolio
                  work. The focus is practical: clean UI, maintainable code, and
                  reliable delivery.
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  {techCategories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)]/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] backdrop-blur"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="/Adebayo Bidemi cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[50px] items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold capitalize text-[var(--accent-contrast)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-strong)]"
                  >
                    view resume
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectTab?.("project");
                    }}
                    className="inline-flex h-[50px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/78 px-6 text-sm font-semibold capitalize text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:text-[var(--accent)]"
                  >
                    see projects
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)]/78 p-5 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                    frontend
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-[var(--text)]">
                    6+
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    React, Next.js, Tailwind CSS and the UI foundations I use most often.
                  </p>
                </div>
                <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)]/78 p-5 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                    backend
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-[var(--text)]">
                    APIs
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Node.js, Express, Python, databases, and end-to-end application flow.
                  </p>
                </div>
                <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)]/78 p-5 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                    delivery
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-[var(--text)]">
                    Ship
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Git, Docker, Vercel, and testing tools for production-ready workflow.
                  </p>
                </div>
              </div>
            </div>
          </SpotlightShell>

          <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4 max-sm:gap-4">
            {techStack.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.90))] p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[color:rgba(124,58,237,0.32)] hover:shadow-[0_22px_46px_rgba(124,58,237,0.15)] dark:bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(30,41,59,0.90))] max-sm:rounded-[22px] max-sm:p-4"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.16),transparent_60%)]" />
                  </div>
                  <div className="relative z-10 flex h-full flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[var(--border)] bg-[var(--surface)]/85">
                        <Image src={item.image} alt={item.name} width={44} height={44} className="h-11 w-11 object-contain" />
                      </div>
                      <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                        {item.level}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-lg font-bold text-[var(--text)]">{item.name}</h1>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {
        project &&(
          <div className="flex w-full max-w-[1160px] flex-1 flex-col items-center justify-start gap-10 px-3 py-10 max-lg:w-full max-lg:flex-col max-sm:px-2 max-sm:py-8">
            <div className="w-full rounded-[32px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(124,58,237,0.06),rgba(255,255,255,0.92))] p-6 shadow-[var(--shadow)] dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(124,58,237,0.10),rgba(17,24,39,0.90))] sm:p-8 max-sm:rounded-[24px] max-sm:p-4">
            <div className="w-full text-left flex flex-col gap-4">
              <h1 className="text-4xl max-sm:text-2xl font-semibold text-gray-600">
                {[
                  "I"," ","l","o","v","e"," ","w","o","r","k","i","n","g"," ","o","n"," "
                ].map((char, index) => (
                  <span key={index} className="bounce">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>

              <h1 className="text-4xl font-semibold text-[var(--accent)]">
                {["f","u","n"].map((char, i) => (
                  <span key={i} className="bounce">{char}</span>
                ))}

                {/* explicit space */}
                <span className="bounce">&nbsp;</span>

                {["p","r","o","j","e","c","t","s"].map((char, i) => (
                  <span key={`p-${i}`} className="bounce">{char}</span>
                ))}
              </h1>
              <p className=" p-text text-sm w-1/2 max-sm:w-full">
                In my leisure time, I enjoy <span>experimenting</span> with and building things that I find personally <span>interesting</span> or <span>useful</span>. A few examples of these projects can be found on my <span>GitHub page</span>, where you can also find other <span>miscellaneous creations</span> I have worked on.
              </p>
              
              <a
                href="https://github.com/bidex001?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] w-fit items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold capitalize text-[var(--accent-contrast)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-strong)]"
              >
                view github
              </a>

            </div>

            <div className="mt-8 grid w-full items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
              {
                projectArray.map((item, index) => {
                  return(
                    <div key={index} className="group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.90))] p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[color:rgba(124,58,237,0.32)] hover:shadow-[0_28px_60px_rgba(124,58,237,0.16)] dark:bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(30,41,59,0.90))]">
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),transparent_58%)]" />
                        <div className="absolute -right-8 top-10 h-28 w-28 rounded-full bg-[color:rgba(124,58,237,0.18)] blur-3xl" />
                      </div>
                      <div className="relative z-10 flex h-full flex-col gap-4">
                        <div className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)]/70">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={400}
                            height={220}
                            className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <h1 className="text-xl font-bold capitalize text-[var(--text)]">{item.name}</h1>
                          <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                            featured
                          </span>
                        </div>
                        <p className="line-clamp-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                        <p className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-3 text-xs italic text-[var(--muted)]">
                          {item.tools}
                        </p>
                        <div className="mt-auto flex gap-3 pt-2">
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-contrast)] transition-colors duration-300 hover:bg-[var(--accent-strong)]"><span className=" text-xs"><FaEye /></span>View</a>
                          <a href={item.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"><span className=" text-xs"><FaGithub /></span>Code</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            </div>
          </div>
        )
      }

      {
        contact && (
          <div className="flex w-full max-w-[1160px] flex-1 flex-col items-center justify-start gap-8 px-3 py-10 max-lg:w-full max-sm:px-2 max-sm:py-8">
            <SpotlightShell className="w-full px-6 py-8 sm:px-8 sm:py-10 max-sm:px-4 max-sm:py-5">
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--muted)] backdrop-blur">
                      Contact
                    </span>
                    <span className="rounded-full border border-[color:rgba(124,58,237,0.18)] bg-[color:rgba(124,58,237,0.12)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                      Open for work
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--muted)]">
                      Let&apos;s build
                    </p>
                    <h1 className="font-heading text-4xl font-semibold leading-[0.95] max-sm:text-3xl sm:text-5xl">
                      <TextReveal text="Let's connect and build something useful" className="block" />
                    </h1>
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    I&apos;m available for remote and onsite frontend or fullstack
                    work, contract projects, and product collaborations where
                    strong UI execution matters.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)]/78 p-5 backdrop-blur">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                        focus
                      </p>
                      <p className="mt-3 text-sm font-semibold text-[var(--text)]">
                        Frontend engineering, polished interactions, complete builds
                      </p>
                    </div>
                    <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)]/78 p-5 backdrop-blur">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                        work style
                      </p>
                      <p className="mt-3 text-sm font-semibold text-[var(--text)]">
                        Full-time, contract, freelance, and product partnerships
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectTab?.("project");
                    }}
                    className="inline-flex h-[50px] w-fit items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/78 px-6 text-sm font-semibold capitalize text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/45 hover:text-[var(--accent)]"
                  >
                    browse projects first
                  </button>
                </div>

                <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/84 p-5 shadow-[var(--shadow)] backdrop-blur sm:p-6 max-sm:rounded-[24px] max-sm:p-4">
                  <form
                    onSubmit={(e)=>{
                      e.preventDefault()
                      sendMail()
                    }}
                    className="flex h-fit flex-col gap-4"
                  >
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                        Your name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={(e)=>{
                          setData({...data,name:e.target.value})
                        }}
                        className={formFieldClassName}
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={(e)=>{
                          setData({...data,email:e.target.value})
                        }}
                        className={formFieldClassName}
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-message" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        value={data.message}
                        onChange={(e)=>{
                          setData({...data,message:e.target.value})
                        }}
                        className={`${formFieldClassName} min-h-[170px] resize-none`}
                        placeholder="Tell me about your project or role"
                      />
                    </div>
                    <button className="mt-2 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-contrast)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-strong)]">
                      connect
                    </button>
                  </form>
                </div>
              </div>
            </SpotlightShell>
          </div>
        )
      }

      {
        success && (
          <div className=" w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className=" w-[400px] shadow-lg h-[200px] bg-white flex flex-col justify-center items-center gap-5 p-5">
              <h1 className=" text-xl font-bold text-green-600">Message Sent Successfully!</h1>
              <p className=" text-sm text-gray-600 text-center">Thank you for reaching out. I will get back to you soon.</p>
              <button
              onClick={()=>{
                setSuccess(false)
              }}
              className=" px-8 text-xs py-2 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--accent-contrast)] uppercase font-bold tracking-widest cursor-pointer transition-colors duration-200 shadow-[var(--shadow)]"
              >
                Close
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Main;
