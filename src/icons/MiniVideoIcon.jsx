import * as React from "react";

const SvgMiniVideoIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path
        data-name="Path 155"
        d="M4.292 7.011h13.932a1.913 1.913 0 0 1 1.913 1.913v12.153a1.913 1.913 0 0 1-1.913 1.913H4.292a1.913 1.913 0 0 1-1.913-1.913V8.924a1.913 1.913 0 0 1 1.913-1.913Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <path
        data-name="Path 154"
        d="m23.24 17.768 4.38 2.612V9.621l-4.4 2.625"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path data-name="Rectangle 115" d="M0 0h30v30H0z" />
    </g>
  </svg>
);

export default SvgMiniVideoIcon;
