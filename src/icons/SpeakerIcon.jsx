import * as React from "react";

function SvgSpeakerIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 34.828 30.54"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="#1d1d1b"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path data-name="Line 145" d="M1 10.754v9.033" />
        <path data-name="Line 146" d="M5.542 10.754H1" />
        <path data-name="Line 147" d="M5.542 19.786H1" />
        <path data-name="Line 148" d="M18.016 1.4v27.74" />
        <path data-name="Line 149" d="M18.016 1.4L5.542 10.754" />
        <path data-name="Line 150" d="M18.016 29.14L5.542 19.786" />
        <path d="M21.97 10.751a8.784 8.784 0 010 9.036M25.808 6.417a17.21 17.21 0 010 17.7M30.307 2.563a24.7 24.7 0 010 25.415" />
      </g>
    </svg>
  );
}

export default SvgSpeakerIcon;
