import * as React from "react";

function SvgCrossIcon({ title, titleId, ...props }) {
  return (
    <svg
      data-name="Group 184"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 23 23"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="cross_icon_svg__a">
          <path
            data-name="Rectangle 94"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            d="M0 0h23v23H0z"
          />
        </clipPath>
      </defs>
      <g
        data-name="Group 183"
        clipPath="url(#cross_icon_svg__a)"
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
