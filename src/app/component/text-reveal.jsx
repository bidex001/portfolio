import React from "react";

const TextReveal = ({
  text,
  className = "",
  initialDelay = 0,
  delayStep = 35,
}) => {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden="true"
          className="text-reveal-char"
          style={{ animationDelay: `${initialDelay + index * delayStep}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default TextReveal;
