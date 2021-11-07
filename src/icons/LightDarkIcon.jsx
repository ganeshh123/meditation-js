import * as React from "react";

function SvgLightDarkIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 41.056 50"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <path
          data-name="Line 63"
          strokeLinecap="round"
          strokeMiterlimit={10}
          d="M25.472 1v48"
        />
        <path
          data-name="Path 90"
          d="M25.476 39.531a14.583 14.583 0 110-29.166"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          data-name="Line 64"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1 24.949h5.202"
        />
        <path
          data-name="Line 65"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.236 3.755l2.601 4.505"
        />
        <path
          data-name="Line 66"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.278 37.185l4.505-2.601"
        />
        <path
          data-name="Line 67"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.659 41.741l-2.601 4.505"
        />
        <path
          data-name="Line 68"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.605 15.416L4.1 12.815"
        />
        <path
          data-name="Path 91"
          d="M25.473 39.582a14.583 14.583 0 000-29.166"
          strokeMiterlimit={10}
        />
        <path
          data-name="Line 69"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.353 25.073l8.462-2.692"
        />
        <path
          data-name="Line 70"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.327 30.2l8.526-2.712"
        />
        <path
          data-name="Line 71"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.356 35.311l4.734-1.506"
        />
        <path
          data-name="Line 72"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.364 19.951l6.373-2.027"
        />
        <path
          data-name="Line 73"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.355 14.835l1.596-.508"
        />
      </g>
    </svg>
  );
}

export default SvgLightDarkIcon;
