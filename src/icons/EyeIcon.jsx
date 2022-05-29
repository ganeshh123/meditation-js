import * as React from "react";

const SvgEyeIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 60 60"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path data-name="Rectangle 114" d="M0 0h60v60H0z" />
      <g
        data-name="Group 272"
        transform="translate(-5089.5 160)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path
          data-name="Path 300"
          d="M5146.5-129.771s-11.01 19.016-27 19.016-27-19.016-27-19.016 11.01-19.016 27-19.016 27 19.016 27 19.016Z"
          strokeLinejoin="round"
        />
        <circle
          data-name="Ellipse 72"
          cx={12.075}
          cy={12.075}
          r={12.075}
          transform="translate(5107.5 -141.846)"
          strokeLinejoin="round"
        />
        <circle
          data-name="Ellipse 73"
          cx={4.385}
          cy={4.385}
          r={4.385}
          transform="translate(5115.5 -134.156)"
          strokeMiterlimit={10}
        />
      </g>
    </g>
  </svg>
);

export default SvgEyeIcon;
