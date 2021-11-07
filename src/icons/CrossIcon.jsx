import * as React from "react";

function SvgCrossIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={3}
      >
        <path d="M1 1l40 40M41 1L1 41" />
      </g>
    </svg>
  );
}

export default SvgCrossIcon;
