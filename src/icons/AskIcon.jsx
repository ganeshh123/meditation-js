import * as React from "react";

function SvgAskIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 35.519 27.486"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path data-name="Line 141" d="M4.458 20.072l-1.883 6.102" />
        <path data-name="Line 142" d="M9.545 23.196l-6.97 2.977" />
        <path
          data-name="Path 153"
          d="M4.457 20.073A9.839 9.839 0 011 12.858C1 6.309 8.5 1 17.76 1s16.76 5.309 16.76 11.858-7.5 11.858-16.76 11.858a22.278 22.278 0 01-8.215-1.519"
        />
      </g>
    </svg>
  );
}

export default SvgAskIcon;
