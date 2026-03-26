"use client"
import React, { useEffect, useRef, useState } from 'react'
import Header from './component/header'
import Main from './component/main'
import Footer from './component/footer'
import LogoBadge from './component/logo-badge'

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
    <div className='min-h-screen  bg-[var(--bg)] text-[var(--text)] transition-colors duration-300'>
      <div className='mx-auto flex h-screen w-full max-w-[1500px] items-stretch gap-4 overflow-hidden px-4 sm:px-6 lg:px-8 xl:gap-8 max-sm:px-3 max-xl:h-auto max-xl:min-h-screen max-xl:overflow-visible max-xl:flex-col'>
        <Header about={about} contact={contact} project={project} skills={skills} onSelectTab={switchTab} />
        <Main about={about} contact={contact} project={project} skills={skills} onSelectTab={switchTab} />
        <Footer darkMode={darkMode} onToggleDark={() => setDarkMode((prev) => !prev)} />
      </div>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-5">
            <div className="scale-110">
              <LogoBadge size="lg" caption="Bidex Studio" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">
              loading experience
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
