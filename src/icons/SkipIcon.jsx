import * as React from "react";

function SvgSkipIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 38.749 24.142"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path
          data-name="Path 95"
          d="M36.627 10.129l-15.232-8.8a2.243 2.243 0 00-3.364 1.943v17.589a2.243 2.243 0 003.364 1.943l15.232-8.8a2.241 2.241 0 000-3.875z"
        />
        <path
          data-name="Path 96"
          d="M15.304 7.65L4.364 1.334A2.243 2.243 0 001 3.277v17.589a2.243 2.243 0 003.364 1.943l10.94-6.316"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default SvgSkipIcon;
