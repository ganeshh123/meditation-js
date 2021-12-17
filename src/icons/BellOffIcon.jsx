import * as React from "react";

function SvgBellOffIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="bell_off_icon_svg__a">
          <path
            data-name="Rectangle 91"
            fill="none"
            stroke="#707070"
            strokeWidth={2}
            d="M-.378 0h32v32h-32z"
          />
        </clipPath>
      </defs>
      <g data-name="Group 180">
        <g
          data-name="Group 179"
          transform="translate(.378)"
          clipPath="url(#bell_off_icon_svg__a)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        >
          <path
            data-name="Path 283"
            d="M13.652 3.502a1.764 1.764 0 013.528 0"
            strokeLinejoin="round"
          />
          <path
            data-name="Path 284"
            d="M12.784 28.321a2.9 2.9 0 005.262 0"
            strokeLinejoin="round"
          />
          <path data-name="Line 179" d="M26.519 27.822L4.934 6.237" />
          <path
            data-name="Path 285"
            d="M23.772 25.18c-5.264 1.293-13.67 1.265-18.184-.389a1.808 1.808 0 01-1.053-2.424 5.551 5.551 0 01.938-1.509 2.687 2.687 0 00.635-1.8v-4.02a9.612 9.612 0 011.779-5.781"
            strokeLinejoin="round"
          />
          <path
            data-name="Path 286"
            d="M26.197 22.157a5.561 5.561 0 00-.837-1.293 2.715 2.715 0 01-.641-1.827v-3.6c0-5.841-3.729-9.7-9.3-9.7a10.007 10.007 0 00-4.6 1.047"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgBellOffIcon;
