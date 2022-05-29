import * as React from "react";

const SvgSolidGlassIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 60 60"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path data-name="Rectangle 110" fill="none" d="M0 0h60v60H0z" />
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
          d="M30.126 6v48"
        />
        <path
          data-name="Path 256"
          d="M42.311 12.906h-12.16v34.188h12.16a4.863 4.863 0 0 0 4.863-4.863V17.915a4.863 4.863 0 0 0-4.863-5.009Z"
          fill="none"
          strokeMiterlimit={10}
          opacity={0.95}
        />
        <path
          data-name="Line 169"
          fill="#1d1d1b"
          strokeLinejoin="round"
          d="M23.123 12.906h-4.571"
        />
        <path
          data-name="Path 257"
          d="M14.413 14.511a5.666 5.666 0 0 0-1.357 4.547"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          data-name="Line 170"
          fill="#1d1d1b"
          strokeLinejoin="round"
          d="M13.056 23.191v4.547"
        />
        <path
          data-name="Line 171"
          fill="#1d1d1b"
          strokeLinejoin="round"
          d="M13.056 32.31v4.547"
        />
        <path
          data-name="Path 258"
          d="M13.057 41.404a5.228 5.228 0 0 0 1.386 4.207"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          data-name="Line 172"
          fill="#1d1d1b"
          strokeLinejoin="round"
          d="M18.601 47.094h4.547"
        />
        <path
          data-name="Line 173"
          fill="#1d1d1b"
          strokeLinejoin="round"
          d="M27.695 47.094h2.432"
        />
        <path
          data-name="Line 174"
          fill="#1d1d1b"
          strokeLinejoin="round"
          d="M27.695 12.906h2.432"
        />
      </g>
    </g>
  </svg>
);

export default SvgSolidGlassIcon;
