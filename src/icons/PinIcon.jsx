import * as React from "react";

function SvgPinIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20.037 31.009"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <ellipse
        data-name="Ellipse 9"
        cx={7}
        cy={2.5}
        rx={7}
        ry={2.5}
        transform="translate(3.038 1)"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        data-name="Line 55"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5.1 5.509v12.708"
      />
      <path
        data-name="Line 56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M14.937 5.509v12.708"
      />
      <g data-name="Ellipse 10">
        <path
          data-name="Path 87"
          d="M14.938 15.6c2.468.731 4.1 2 4.1 3.437 0 2.264-4.037 4.1-9.019 4.1S1 21.302 1 19.037c0-1.44 1.632-2.706 4.1-3.437"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
      <path
        data-name="Path 87"
        d="M5.099 18.217s0 1.758 4.919 1.758 4.919-1.758 4.919-1.758"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.019 23.136v6.872"
      />
    </svg>
  );
}

export default SvgPinIcon;
