import React from "react";

const sparkles = [
  { top: "8%", left: "10%", size: 18, delay: "0s", duration: "5.8s", opacity: 0.95 },
  { top: "12%", left: "24%", size: 14, delay: "0.7s", duration: "6.4s", opacity: 0.82 },
  { top: "18%", left: "37%", size: 16, delay: "1.2s", duration: "7.1s", opacity: 0.88 },
  { top: "22%", left: "52%", size: 12, delay: "1.8s", duration: "5.5s", opacity: 0.76 },
  { top: "28%", left: "16%", size: 15, delay: "2.3s", duration: "6.7s", opacity: 0.84 },
  { top: "34%", left: "30%", size: 20, delay: "2.8s", duration: "7.3s", opacity: 0.96 },
  { top: "42%", left: "45%", size: 13, delay: "0.9s", duration: "5.9s", opacity: 0.74 },
  { top: "48%", left: "12%", size: 17, delay: "1.5s", duration: "6.2s", opacity: 0.86 },
  { top: "54%", left: "28%", size: 14, delay: "2.1s", duration: "7s", opacity: 0.78 },
  { top: "61%", left: "41%", size: 19, delay: "2.9s", duration: "6.5s", opacity: 0.92 },
  { top: "69%", left: "18%", size: 15, delay: "0.4s", duration: "5.7s", opacity: 0.82 },
  { top: "76%", left: "33%", size: 12, delay: "1.9s", duration: "6.1s", opacity: 0.7 },
];

const Sparkles = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(124,58,237,0.14),transparent_32%),radial-gradient(circle_at_32%_50%,rgba(14,165,233,0.12),transparent_30%)]" />
      {sparkles.map((sparkle, index) => (
        <span
          key={`${sparkle.top}-${sparkle.left}-${index}`}
          className="sparkle-particle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        >
          <span className="sparkle-aura" />
          <span className="sparkle-core" />
          <span className="sparkle-ray sparkle-ray-x" />
          <span className="sparkle-ray sparkle-ray-y" />
        </span>
      ))}
    </div>
  );
};

export default Sparkles;
