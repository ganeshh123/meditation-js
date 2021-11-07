import * as React from "react";

function SvgNoteIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 23.478 32.887"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        transform="translate(-73.171 -450.808)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <circle
          data-name="Ellipse 17"
          cx={6.187}
          cy={6.187}
          r={6.187}
          transform="translate(74.171 470.32)"
        />
        <path data-name="Line 129" d="M86.546 452.197v24.5" />
        <path data-name="Line 130" d="M86.546 452.197l8.714 5.949" />
      </g>
    </svg>
  );
}

export default SvgNoteIcon;
