import * as React from "react";

function SvgSleepIconMini({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 66.838 67.37"
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
        <path
          d="M60.2 54.238A30.539 30.539 0 0135.452 5.756a30.566 30.566 0 1030.386 47.943 30.64 30.64 0 01-5.638.539z"
          strokeLinejoin="round"
        />
        <g data-name="Star 2" strokeMiterlimit={10}>
          <path data-name="Line 111" d="M10.512 1.414l3.14 3.14" />
          <path data-name="Line 112" d="M10.512 4.554l3.14-3.14" />
        </g>
        <g data-name="Star 4" strokeMiterlimit={10}>
          <path data-name="Line 113" d="M61.399 24.705h4.44" />
          <path data-name="Line 114" d="M63.619 26.925v-4.44" />
        </g>
        <g data-name="Star 4" strokeMiterlimit={10}>
          <path data-name="Line 115" d="M1 55.949h4.44" />
          <path data-name="Line 116" d="M3.22 58.169v-4.44" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSleepIconMini;
