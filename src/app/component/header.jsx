import React from "react";

const Header = ({
  about,
  contact,
  project,
  skills,
  onSelectTab,
}) => {
  return (
    <div className="h-screen flex flex-col justify-between items-center px-9 text-[var(--muted)] max-xl:flex-row max-xl:h-auto max-xl:w-full max-xl:py-5 max-xl:mb-12 max-lg:mb-0 max-lg:px-0 max-sm:justify-center  ">
      <div className="border-2 border-[var(--border)] h-[150px] max-xl:h-0 max-xl:w-[150px] max-md:w-[50px] max-sm:hidden"></div>
      <div className="flex flex-col max-xl:flex-row gap-12 *:text-sm *:capitalize font-body *:cursor-pointer *:hover:underline *:tracking-wide *:hover:text-[var(--text)]">
        <p
          className={`vertical vertoppo ${about ? "text-[var(--text)] underline font-bold" : ""}`}
          onClick={() => {
            onSelectTab?.('about');
          }}
        >
          about
        </p>
        <p
          className={`vertical vertoppo ${contact ? "text-[var(--text)] underline font-bold" : ""}`}
          onClick={() => {
            onSelectTab?.('contact');
          }}
        >
          contact
        </p>
        <p
          className={`vertical vertoppo ${project ? "text-[var(--text)] underline font-bold" : ""}`}
          onClick={() => {
            onSelectTab?.('project');
          }}
        >
          {" "}
          project
        </p>
        <p
          className={`vertical vertoppo ${skills ? "text-[var(--text)] underline font-bold" : ""}`}
          onClick={() => {
            onSelectTab?.('skills');
          }}
        >
          skills
        </p>
      </div>
      <div className="border-2 border-[var(--border)] h-[150px] max-xl:h-0 max-xl:w-[150px] max-md:w-[50px] max-sm:hidden"></div>
    </div>
  );
};

export default Header;
