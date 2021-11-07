import * as React from "react";

function SvgNoteOffIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 27.422 32.888"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <g data-name="Group 134">
          <path data-name="Line 161" d="M18.17 22.227l7.837-7.837" />
          <path data-name="Line 162" d="M26.007 22.227L18.17 14.39" />
        </g>
        <g transform="translate(-73.171 -450.807)">
          <circle
            data-name="Ellipse 17"
            cx={6.187}
            cy={6.187}
            r={6.187}
            transform="translate(74.171 470.32)"
          />
          <path data-name="Line 129" d="M86.546 452.197v24.526" />
          <path data-name="Line 130" d="M86.546 452.197l8.714 5.949" />
        </g>
      </g>
    </svg>
  );
}

export default SvgNoteOffIcon;
