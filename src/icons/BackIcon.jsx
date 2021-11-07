import * as React from "react";

function SvgBackIcon({ title, titleId, ...props }) {
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
          d="M2.122 10.129l15.232-8.8a2.243 2.243 0 013.364 1.943v17.589a2.243 2.243 0 01-3.364 1.943l-15.232-8.8a2.241 2.241 0 010-3.875z"
        />
        <path
          data-name="Path 96"
          d="M23.445 7.65l10.94-6.316a2.243 2.243 0 013.364 1.943v17.589a2.243 2.243 0 01-3.364 1.943l-10.94-6.318"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default SvgBackIcon;
