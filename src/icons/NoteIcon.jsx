import * as React from "react";

const SvgNoteIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g transform="translate(-66.928 -448.415)" fill="none">
      <path data-name="Rectangle 116" d="M66.928 448.415h30v30h-30z" />
      <circle
        data-name="Ellipse 17"
        cx={4.552}
        cy={4.552}
        r={4.552}
        transform="translate(74.171 465.53)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        data-name="Line 129"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M83.275 452.197v16.704"
      />
      <path
        data-name="Line 130"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m83.275 452.197 6.41 4.376"
      />
    </g>
  </svg>
);

export default SvgNoteIcon;
