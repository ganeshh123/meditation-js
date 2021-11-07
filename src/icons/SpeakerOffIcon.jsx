import * as React from "react";

function SvgSpeakerOffIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 31.804 30.54"
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
        <path data-name="Line 145" d="M1 10.754v9.033" />
        <path data-name="Line 146" d="M5.542 10.754H1" />
        <path data-name="Line 147" d="M5.542 19.786H1" />
        <path data-name="Line 148" d="M18.016 1.4v27.74" />
        <path data-name="Line 149" d="M18.016 1.4L5.542 10.754" />
        <path data-name="Line 150" d="M18.016 29.14L5.542 19.786" />
        <g data-name="Group 133">
          <path data-name="Line 157" d="M23.239 18.846l7.152-7.152" />
          <path data-name="Line 158" d="M30.391 18.846l-7.152-7.152" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSpeakerOffIcon;