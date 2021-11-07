import * as React from "react";

function SvgPresetsIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 45.929 35.978"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        data-name="Group 27"
        transform="translate(1 1)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        opacity={0.8}
      >
        <path data-name="Line 126" d="M15.377 30.738h28.552" />
        <path data-name="Line 127" d="M15.377 16.989h28.552" />
        <path data-name="Line 128" d="M15.377 3.24h28.552" />
        <circle data-name="Ellipse 14" cx={3.24} cy={3.24} r={3.24} />
        <circle
          data-name="Ellipse 15"
          cx={3.24}
          cy={3.24}
          r={3.24}
          transform="translate(0 13.749)"
        />
        <circle
          data-name="Ellipse 16"
          cx={3.24}
          cy={3.24}
          r={3.24}
          transform="translate(0 27.498)"
        />
      </g>
    </svg>
  );
}

export default SvgPresetsIcon;
