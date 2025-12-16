"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import Header from './component/header'
import Main from './component/main'
import Footer from './component/footer'

const Page = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [about, setAbout] = useState(true);
  const [contact, setContact] = useState(false);
  const [project, setProject] = useState(false);
  const [skills, setSkills] = useState(false);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const switchTab = (tab) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setLoading(true)
    timeoutRef.current = setTimeout(() => {
      setAbout(tab === 'about')
      setContact(tab === 'contact')
      setProject(tab === 'project')
      setSkills(tab === 'skills')
      setLoading(false)
      timeoutRef.current = null
    }, 3000)
  }

  return (
    <div className=' w-full h-full min-h-screen max-xl:flex-col  items-center flex bg-[var(--bg)] text-[var(--text)] justify-between transition-colors duration-300'>
      <Header about={about} contact={contact} project={project} skills={skills} onSelectTab={switchTab} />
      <Main about={about} contact={contact} project={project} skills={skills}/>
      <Footer darkMode={darkMode} onToggleDark={() => setDarkMode((prev) => !prev)} />
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]/80 backdrop-blur-sm">
          <div className="scale-110">
            <Image
              src="/logo1.png"
              alt="Loading logo"
              width={200}
              height={200}
              priority
              className="transform scale-110 animate-loader-scale"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
