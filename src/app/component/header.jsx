import React from "react";
import LogoBadge from "./logo-badge";

const Header = ({
  about,
  contact,
  project,
  skills,
  onSelectTab,
}) => {
  return (
    <div className="h-screen flex flex-none flex-col items-center justify-between px-9 text-[var(--muted)] xl:w-[120px] xl:px-0 max-xl:h-auto max-xl:w-full max-xl:flex-row max-xl:py-5 max-xl:mb-0 max-sm:mb-0 max-lg:mb-0 max-lg:px-0 max-sm:fixed max-sm:top-3 max-sm:left-1/2 max-sm:z-50 max-sm:!w-[92%] max-sm:-translate-x-1/2 max-sm:justify-center">
        <div className="max-sm:hidden">
          <LogoBadge size="sm" compact className="mx-auto" />
        </div>
    <main className=" flex items-center justify-center gap-5 max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-between max-sm:rounded-[28px] max-sm:border max-sm:border-[var(--border)] max-sm:bg-[var(--surface)]/86 max-sm:backdrop-blur-xl max-sm:shadow-[var(--shadow)] max-sm:py-3 max-sm:px-4">
      <div className="hidden max-sm:flex">
        <LogoBadge size="xs" compact />
      </div>
      <div className="flex flex-col max-xl:flex-row gap-12 max-sm:flex-1 max-sm:justify-between max-sm:gap-3 *:text-sm *:capitalize font-body *:cursor-pointer *:hover:underline *:tracking-wide *:hover:text-[var(--text)] max-sm:*:text-[12px] max-sm:*:tracking-[0.08em]">
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
    </main>
      <div className="border-2 border-[var(--border)] h-[150px] max-xl:h-0 max-xl:w-[150px] max-md:w-[50px] max-sm:hidden"></div>
    </div>
  );
};

export default Header;
