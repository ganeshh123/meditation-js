import * as React from "react";

function SvgSolidGlassIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36.183 50"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g data-name="Layer 2">
        <g
          data-name="Layer 1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        >
          <path
            data-name="Line 168"
            fill="none"
            strokeMiterlimit={10}
            opacity={0.95}
            d="M18.135 1v48"
          />
          <path
            data-name="Path 256"
            d="M30.32 7.906H18.16v34.188h12.16a4.863 4.863 0 004.863-4.863V12.915a4.863 4.863 0 00-4.863-5.009z"
            fill="none"
            strokeMiterlimit={10}
            opacity={0.95}
          />
          <path
            data-name="Line 169"
            strokeLinejoin="round"
            d="M11.132 7.906H6.561"
          />
          <path
            data-name="Path 257"
            d="M2.422 9.511a5.666 5.666 0 00-1.357 4.547"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            data-name="Line 170"
            strokeLinejoin="round"
            d="M1.065 18.191v4.547"
          />
          <path
            data-name="Line 171"
            strokeLinejoin="round"
            d="M1.065 27.31v4.547"
          />
          <path
            data-name="Path 258"
            d="M1.066 36.404a5.228 5.228 0 001.386 4.207"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            data-name="Line 172"
            strokeLinejoin="round"
            d="M6.61 42.094h4.547"
          />
          <path
            data-name="Line 173"
            strokeLinejoin="round"
            d="M15.704 42.094h2.432"
          />
          <path
            data-name="Line 174"
            strokeLinejoin="round"
            d="M15.704 7.906h2.432"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgSolidGlassIcon;
