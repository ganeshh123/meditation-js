import * as React from "react";

function SvgAboutIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 44 44"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        transform="translate(-28.045 -408.871)"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
      >
        <circle
          data-name="Ellipse 10"
          cx={21}
          cy={21}
          r={21}
          transform="translate(29.045 409.871)"
          strokeWidth={2}
        />
        <path
          data-name="Line 74"
          strokeLinecap="round"
          strokeWidth={2}
          d="M50.045 428.164v14.323"
        />
        <path
          data-name="Line 75"
          strokeLinecap="round"
          strokeWidth={3}
          d="M50.045 420.212h0"
        />
      </g>
    </svg>
  );
}

export default SvgAboutIcon;
