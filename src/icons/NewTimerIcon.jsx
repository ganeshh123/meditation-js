import * as React from "react";

function SvgNewTimerIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 51.929 45.975"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path
          data-name="Path 129"
          d="M38.377 38.69a21.986 21.986 0 116.6-15.7"
        />
        <path data-name="Line 122" d="M33.104 29.458l-10.117-6.47" />
        <path data-name="Line 123" d="M22.987 22.988V7.261" />
        <g data-name="Group 25">
          <path data-name="Line 124" d="M39.02 33.376h11.909" />
          <path data-name="Line 125" d="M44.975 39.33V27.421" />
        </g>
      </g>
    </svg>
  );
}

export default SvgNewTimerIcon;
