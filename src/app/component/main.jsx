"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import axios from "axios";

const Main = ({about, contact, project, skills}) => {
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

  const profLetters = ["f", "u", "l", "l", "s", "t", "a", "c", "k"];
  const nameLetters = ["b", "a", "d", "d", "e", "s", "t"];

  useEffect(() => {
    const id = setInterval(() => setShowName((prev) => !prev), 3000);
    return () => clearInterval(id);
  }, []);

  const primaryTitle = showName ? "Adebayo Bidemi" : "Fullstack Developer";
  const highlightedRole = showName ? "Adebayo Bidemi" : "fullstack developer";
  const letterSet = showName ? nameLetters : profLetters;
  const badgeLabel = showName ? "BD" : "FS";

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
    link:"https://ecommerce-web-app-vert.vercel.app/index.html",
    code:"https://github.com/bidex001/Ecommerce-web-app"
  },
  {
    name:"mortgage calculator",
    description:"A mortgage calculator that helps users estimate their monthly mortgage payments based on loan amount, interest rate, and loan term. Built with React for the frontend.", 
    image:"/images/mortgage.png",
    tools:"next.js + tailwindcss + javascript",
    link:"https://mortgage-calc-main-5slg-git-main-adebayos-projects-41c56e43.verc",
    code:"https://github.com/bidex001/mortgage-calc-main"
  }
]


  return (
    <div className=" flex max-lg:px-6 max-lg:py-2  flex-1 overflow-hidden max-xl:w-full  justify-center items-center text-[var(--text)]">
      {about && (
        <div className=" w-[1000px] max-sm:w-full flex max-lg:flex-col-reverse items-center justify-between max-lg:gap-10">
          <div className=" w-[500px] max-lg:w-full max-lg:justify-center max-lg:items-center flex flex-col gap-10 max-lg:gap-5 p-4">
            <h1 className=" text-4xl max-sm:text-2xl  font-heading font-semibold flex flex-col gap-1 max-sm:items-start leading-tight">
              <span className=" text-[var(--muted)]  font-heading font-normal dance cursor-pointer">
                Hello, {`I'm`}
              </span>
              <span className=" text-[var(--accent)] dance cursor-pointer">
                {primaryTitle}
              </span>
            </h1>
            <p className=" text-sm font-body max-lg:w-[600px] max-sm:w-full max-sm:text-xs max-lg:text-center text-[var(--muted)]">
              I am a{" "}
              <span className=" text-[var(--text)] font-semibold tracking-wider">
                {highlightedRole}
              </span>{" "}
              I have a strong background in creating visually appealing and{" "}
              <span className=" text-[var(--text)] font-semibold tracking-wider">
                user-friendly web experiences.
              </span>{" "}
              I am motivated to find a role where I can challenge myself{" "}
              <span className=" text-[var(--text)] font-semibold tracking-wider">
                and provide value to website users.
              </span>{" "}
              I am excited to bring my knowledge and experience to a team and
              contribute to a {`company`}s success.
            </p>
           <a
            href="/Adebayo_Bidemi_Fullstack_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
              <div className="relative mt-0 *:cursor-pointer group">
              <div className=" w-[150px] h-[50px] border-2 border-[var(--border)] absolute font-body top-[9] left-[9] group-hover:top-0 group-hover:left-0 transition-all duration-700 z-0"></div>
              <button className="w-[150px] h-[50px] bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--accent-contrast)] capitalize cursor-pointer transition-colors duration-200 shadow-[var(--shadow)] relative z-50">
                view resume
              </button>
            </div>
           </a>
          </div>

          <div className="  w-[500px] max-lg:w-full  flex flex-col gap-7 items-center justify-center">
            <div className="relative w-full flex justify-center items-center">
              <div className=" w-[300px] h-[300px] border-2 border-[var(--border)] bg-[var(--surface)]"></div>
          <div className=" w-[300px] h-[300px] absolute p-5 top-[-15px] right-20 max-lg:right-53 max-md:right-45 max-sm:right-8 flex justify-center items-center bg-[var(--accent)] *:text-[var(--accent-contrast)] shadow-[0_24px_60px_rgba(124,58,237,0.35)]">
                <h1 className=" text-[190px] font-extrabold">{badgeLabel}</h1>
              </div>
            </div>
            <div className="flex gap-10 max-sm:gap-5  w-[500px] max-lg:w-full  flex-wrap justify-center items-center">
              {letterSet &&
                letterSet.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex px-5 py-3 max-sm:px-3 max-sm:py-2 justify-center items-center bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] shadow-sm"
                    >
                      <p className=" text-xl max-md:text-sm font-bold uppercase">{item}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {skills && (
        <div className=" w-[1000px] justify-center items-center flex max-lg:flex-col max-lg:gap-10">
          <div className=" w-[500px] max-sm:w-full flex flex-col gap-6">
            <div className=" flex flex-col gap-3 *:text-4xl *:font-bold *:max-sm:text-2xl">
              <h1 className="  text-gray-600 *:bounce "><span className="bounce">I</span> <span className="bounce">w</span><span className="bounce">o</span><span className="bounce">r</span><span className="bounce">k</span> <span className="bounce">m</span><span className="bounce">o</span><span className="bounce">s</span><span className="bounce">t</span><span className="bounce">l</span><span className="bounce">y</span> <span className="bounce">w</span><span className="bounce">i</span><span className="bounce">t</span><span className="bounce">h</span></h1>
              <h1 className="text-[var(--accent)]"><span className="bounce">F</span><span className="bounce">u</span><span className="bounce">l</span><span className="bounce">l</span><span className="bounce">s</span><span className="bounce">t</span><span className="bounce">a</span><span className="bounce">c</span><span className="bounce">k</span></h1>
              <h1 className="text-[var(--accent)]"><span className="bounce">T</span><span className="bounce">e</span><span className="bounce">c</span><span className="bounce">h</span><span className="bounce">n</span><span className="bounce">o</span><span className="bounce">l</span><span className="bounce">o</span><span className="bounce">g</span><span className="bounce">i</span><span className="bounce">e</span><span className="bounce">s</span></h1>
            </div>
                <p className=" text-sm">
                  <span className="text-gray-500">Here are some of the</span> tools <span className="text-gray-500">{"i've"} worked with over the years, for my</span> personal, professional <span className="text-gray-500">and</span> open source <span className="text-gray-500">projects</span>
                </p>
          <a
            href="/Adebayo_Bidemi_Fullstack_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
              <div className="relative mt-0 *:cursor-pointer group">
              <div className=" w-[150px] h-[50px] border-2 border-[var(--border)] absolute font-body top-[9] left-[9] group-hover:top-0 group-hover:left-0 transition-all duration-700 z-0"></div>
              <button className="w-[150px] h-[50px] bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--accent-contrast)] capitalize cursor-pointer transition-colors duration-200 shadow-[var(--shadow)] relative z-50">
                view resume
              </button>
            </div>
           </a>
          </div>

          <div className=" w-[350px] h-[500px] max-lg:w-[500px] max-sm:w-[350px] *:shrink-0  flex flex-wrap gap-5 justify-center items-center">
            {
              techStack.map((item, index) => {
                return(
                  <div key={index} className=" flex gap-2 w-[150px] h-[50px] p-2 items-center justify-center bg-white">
                    <Image src={item.image} alt="item" width={20} height={20}/>
                    <h1 className=" text-black text-xs font-bold">{item.name}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>
      )}

      {
        project &&(
          <div className=" w-[1000px] gap-10 flex max-lg:flex-col max-lg:w-full justify-center items-center">
            <div className=" w-[500px] max-sm:w-full flex flex-col gap-4">
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
              <p className=" p-text text-sm">
                In my leisure time, I enjoy <span>experimenting</span> with and building things that I find personally <span>interesting</span> or <span>useful</span>. A few examples of these projects can be found on my <span>GitHub page</span>, where you can also find other <span>miscellaneous creations</span> I have worked on.
              </p>
              
              <div className="relative mt-0 *:cursor-pointer group">
              <div className="w-[150px] h-[50px] border-2 border-[var(--border)] absolute font-body top-[9] left-[9] group-hover:top-0 group-hover:left-0 transition-all duration-700 z-0"></div>

              <a
              href="https://github.com/bidex001?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="w-[150px] h-[50px] bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--accent-contrast)] capitalize cursor-pointer transition-colors duration-200 shadow-[var(--shadow)] relative z-50">
              view github
              </button>
              </a>
              </div>

            </div>

            <div className=" w-[400px] max-sm:w-full flex flex-col gap-7 items-center h-[400px] overflow-y-scroll">
              {
                projectArray.map((item, index) => {
                  return(
                    <div key={index} className=" flex flex-col gap-2 mr-5">
                      <Image src={item.image} alt={item.name} width={400} height={200}/>
                      <h1 className=" text-xl font-sans-serif font-bold capitalize">{item.name}</h1>
                      <p className=" text-sm text-gray-600">{item.description}</p>
                      <p className=" text-sm italic text-gray-500">{item.tools}</p>
                      <div className=" flex gap-5">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center"><span className=" text-xs"><FaEye /></span>View</a>
                       <a href={item.code} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center "><span className=" text-xs"><FaGithub /></span>Code</a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }

      {
        contact && (
          <div className=" w-[1000px] max-lg:flex-col max-lg:w-full justify-center items-center flex gap-4 max-lg:gap-10">
            <div className=" w-[500px] max-sm:w-full flex flex-col gap-4">
              <h1 className=" text-4xl max-sm:text-2xl tracking-wider font-bold text-[var(--accent)]">Want to work with <br /> me?</h1>
              <h1 className="text-4xl font-bold">let`s Connect</h1>
              <p className=" text-sm text-[grey]">
                I am open to remote and onsite full-time, part-time, and contract frontend web development jobs.
              </p>
            </div>

            <div className=" w-[500px] max-sm:w-full justify-center items-center flex">
              <form 
              onSubmit={(e)=>{
                e.preventDefault()
                sendMail()
              }}
              className=" w-full h-fit flex gap-5 flex-col">
                <input type="text" placeholder=" enter your Name"
                value={data.name}
                onChange={(e)=>{
                  setData({...data,name:e.target.value})
                }}
                className=" text-sm border-3 border-[#000000c0] p-6 capitalize" />
                <input type="email"
                 placeholder=" enter your Email"
                 value={data.email}
                 onChange={(e)=>{
                  setData({...data,email:e.target.value})
                }}
                className=" text-sm border-3 border-[#000000c0] p-6 capitalize"  />
                <textarea
                  value={data.message}
                  onChange={(e)=>{
                    setData({...data,message:e.target.value})
                  }}
                className=" text-sm border-3 border-[#000000c0] p-3 capitalize h-[120px]" 
                 placeholder="Your Message"></textarea>
                  <div className="relative mt-0 *:cursor-pointer group">
              <div className=" w-full h-[50px] border-2 border-[var(--border)] absolute font-body top-[9] left-[9] group-hover:top-0 group-hover:left-0 transition-all duration-700 z-0"></div>
              <button className="w-full h-[50px] bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--accent-contrast)] uppercase font-bold tracking-widest cursor-pointer transition-colors duration-200 shadow-[var(--shadow)] relative z-50">
                connect
              </button>
             </div>
              </form>
            </div>
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
