"use client"
import React, { useEffect, useState } from 'react'
import Header from './component/header'
import Main from './component/main'
import Footer from './component/footer'

const Page = () => {
  const [darkMode, setDarkMode] = useState(false)
   const [about, setAbout] = useState(true);
    const [contact, setContact] = useState(false);
    const [project, setProject] = useState(false);
    const [skills, setSkills] = useState(false);

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className=' w-full h-full min-h-screen max-xl:flex-col  items-center flex bg-[var(--bg)] text-[var(--text)] justify-between transition-colors duration-300'>
      <Header about={about} setAbout={setAbout} contact={contact} setContact={setContact} project={project} setProject={setProject} skills={skills} setSkills={setSkills} />
      <Main about={about} setAbout={setAbout} contact={contact} setContact={setContact} project={project} setProject={setProject} skills={skills} setSkills={setSkills}/>
      <Footer darkMode={darkMode} onToggleDark={() => setDarkMode((prev) => !prev)} />
    </div>
  )
}

export default Page
