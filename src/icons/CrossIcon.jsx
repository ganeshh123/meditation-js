import * as React from "react";

function SvgCrossIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 22.828 22.828"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path data-name="Line 55" d="M1.414 1.414l20 20" />
        <path data-name="Line 56" d="M21.414 1.414l-20 20" />
      </g>
    </svg>
  );
}

export default SvgCrossIcon;
