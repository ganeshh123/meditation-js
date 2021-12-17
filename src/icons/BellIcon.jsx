import * as React from "react";

function SvgBellIcon({ title, titleId, ...props }) {
  return (
    <svg
      data-name="Group 178"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="bell_icon_svg__a">
          <path
            data-name="Rectangle 90"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            d="M0 0h32v32H0z"
          />
        </clipPath>
      </defs>
      <g
        data-name="Group 177"
        clipPath="url(#bell_icon_svg__a)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          data-name="Path 280"
          d="M25.171 19.039v-3.6c0-5.841-3.729-9.707-9.3-9.707a8.874 8.874 0 00-9.308 9.306v4.02a2.687 2.687 0 01-.635 1.8 5.582 5.582 0 00-.938 1.509 1.809 1.809 0 001.053 2.426c4.964 1.817 14.628 1.672 19.652-.036a1.749 1.749 0 001.067-2.356 5.635 5.635 0 00-.946-1.537 2.715 2.715 0 01-.645-1.825z"
        />
        <path data-name="Path 281" d="M14.104 3.502a1.764 1.764 0 013.528 0" />
        <path data-name="Path 282" d="M13.235 28.321a2.9 2.9 0 005.262 0" />
      </g>
    </svg>
  );
}

export default SvgBellIcon;
