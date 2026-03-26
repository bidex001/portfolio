import Image from "next/image";
import React from "react";

const sizeMap = {
  xs: {
    frame: "h-[56px] w-[56px] rounded-[18px] p-2",
    inner: "rounded-[14px]",
    image: "h-[34px] w-[34px]",
  },
  sm: {
    frame: "h-[78px] w-[78px] rounded-[24px] p-2.5",
    inner: "rounded-[18px]",
    image: "h-[48px] w-[48px]",
  },
  md: {
    frame: "h-[92px] w-[92px] rounded-[28px] p-3",
    inner: "rounded-[20px]",
    image: "h-[58px] w-[58px]",
  },
  lg: {
    frame: "h-[156px] w-[156px] rounded-[34px] p-4",
    inner: "rounded-[26px]",
    image: "h-[98px] w-[98px]",
  },
};

const LogoBadge = ({
  size = "md",
  className = "",
  caption,
  compact = false,
}) => {
  const styles = sizeMap[size] ?? sizeMap.md;

  return (
    <div className={`group relative ${className}`}>
      <div className="logo-glow-ring pointer-events-none absolute -inset-2 rounded-[34px] opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(124,58,237,0.30),rgba(59,130,246,0.22),rgba(14,165,233,0.18),rgba(124,58,237,0.30))] p-px">
        <div className="h-full w-full rounded-[inherit] bg-transparent" />
      </div>
      <div
        className={`relative flex items-center justify-center border border-[var(--border)] bg-[var(--surface)]/88 shadow-[var(--shadow)] backdrop-blur-xl ${styles.frame}`}
      >
        <div
          className={`relative flex h-full w-full items-center justify-center overflow-hidden border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,249,0.88))] dark:bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(30,41,59,0.88))] ${styles.inner}`}
        >
          <div className="logo-orbit logo-orbit-a" />
          <div className="logo-orbit logo-orbit-b" />
          <div className="logo-orbit logo-orbit-c" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(124,58,237,0.16),transparent_62%)]" />
          <Image
            src="/logo1.png"
            alt="Brand logo"
            width={160}
            height={160}
            priority={false}
            className={`relative z-10 object-contain dark:hidden ${styles.image}`}
          />
          <Image
            src="/logo2.png"
            alt="Brand logo"
            width={160}
            height={160}
            priority={false}
            className={`relative z-10 hidden object-contain dark:block ${styles.image}`}
          />
        </div>
      </div>
      {!compact && caption ? (
        <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          {caption}
        </p>
      ) : null}
    </div>
  );
};

export default LogoBadge;
