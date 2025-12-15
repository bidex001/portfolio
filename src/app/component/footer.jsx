"use client"
import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
const Footer = ({ darkMode, onToggleDark }) => {
  const [view, setView] = useState(false)
  const handleThemeToggle = () => {
    if (onToggleDark) onToggleDark()
  }
  return (
    <div className=" h-screen justify-between items-center flex flex-col p-10 max-sm:px-3 text-[var(--text)] max-xl:flex-row max-xl:w-full max-xl:h-auto">
      <button
        onClick={handleThemeToggle}
        aria-pressed={!!darkMode}
        className=" w-[40px] h-[40px] flex bg-[var(--surface)] border border-[var(--border)] justify-center items-center text-lg rounded-full cursor-pointer hover:scale-110 active:scale-110 hover:bg-[var(--surface-2)] transition-colors duration-200 shadow-sm"
      >
        <FaRegMoon className={darkMode ? 'text-[var(--accent)]' : ''} />
      </button>

      <button
        onClick={() => {
          setView(!view)
        }}
        className=" w-[40px] h-[40px] flex bg-[var(--surface)] border border-[var(--border)] justify-center items-center text-lg rounded-full cursor-pointer hover:scale-110 active:scale-110 hover:bg-[var(--surface-2)] transition-colors duration-200 shadow-sm"
      >
        {view ? <FaXmark /> : <FaShareAlt />}
      </button>

      <div className={`fixed bottom-25 right-20 max-xl:flex-row max-xl:right-[150px] max-xl:bottom-10 max-lg:bottom-[40px] max-sm:bottom-[40px] max-sm:right-22 max-lg:right-30 flex flex-col  gap-4 justify-center items-center transition-all duration-300 ease-out ${view ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
        <a
          href="https://www.facebook.com/share/1CuYHmf1Jo/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-[40px] h-[40px] flex bg-[var(--surface)] border border-[var(--border)] justify-center items-center text-lg rounded-full cursor-pointer hover:scale-110 active:scale-110 hover:bg-[var(--surface-2)] transition-transform transition-colors duration-150 shadow-sm"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/adebayo58154136?s=21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="w-[40px] h-[40px] flex bg-[var(--surface)] border border-[var(--border)] justify-center items-center text-lg rounded-full cursor-pointer hover:scale-110 active:scale-110 hover:bg-[var(--surface-2)] transition-transform transition-colors duration-150 shadow-sm"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/adebayo-bidemi-a53539371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-[40px] h-[40px] flex bg-[var(--surface)] border border-[var(--border)] justify-center items-center text-lg rounded-full cursor-pointer hover:scale-110 active:scale-110 hover:bg-[var(--surface-2)] transition-transform transition-colors duration-150 shadow-sm"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/bidex001"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-[40px] h-[40px] flex bg-[var(--surface)] border border-[var(--border)] justify-center items-center text-lg rounded-full cursor-pointer hover:scale-110 active:scale-110 hover:bg-[var(--surface-2)] transition-transform transition-colors duration-150 shadow-sm"
        >
          <FaGithub />
        </a>
    </div>
    </div>
  );
};

export default Footer;
