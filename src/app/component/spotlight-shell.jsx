import React from "react";
import Sparkles from "./sparkles";

const SpotlightShell = ({
  children,
  className = "",
  showSparkles = false,
  sparklesClassName = "",
}) => {
  return (
    <section
      className={`relative isolate overflow-hidden rounded-[34px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(124,58,237,0.10),rgba(255,255,255,0.88))] shadow-[var(--shadow)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="spotlight-float absolute -left-16 top-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.34),transparent_68%)] blur-3xl" />
        <div className="spotlight-float absolute right-[-8%] top-[12%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.20),transparent_70%)] blur-3xl [animation-delay:-3s]" />
        <div className="spotlight-float absolute bottom-[-18%] left-[35%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.16),transparent_68%)] blur-3xl [animation-delay:-6s]" />
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.15),rgba(248,250,252,0.82))]" />
        {showSparkles ? <Sparkles className={sparklesClassName} /> : null}
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SpotlightShell;
