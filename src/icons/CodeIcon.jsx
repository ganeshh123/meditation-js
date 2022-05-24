import * as React from "react";

const SvgCodeIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 38.53 30.738"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
      <path data-name="Line 213" d="M13.914 29.448 24.616 1.29" />
      <path data-name="Line 209" d="m1.414 15.492 8.702-8.702" />
      <path data-name="Line 214" d="m1.414 15.492 8.702 8.702" />
      <path data-name="Line 209" d="M37.116 15.492 28.414 6.79" />
      <path data-name="Line 214" d="m37.116 15.492-8.702 8.702" />
    </g>
  </svg>
);

export default SvgCodeIcon;
