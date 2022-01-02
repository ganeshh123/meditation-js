import * as React from "react";

function SvgCrossIcon({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 23 23"
      data-name="Group 184"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path data-name="Line 182" d="M1.02 1.02l20.408 20.408" />
        <path data-name="Line 183" d="M21.428 1.02L1.02 21.428" />
      </g>
    </svg>
  );
}

export default SvgCrossIcon;
