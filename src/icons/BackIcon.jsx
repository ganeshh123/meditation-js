import * as React from "react";

const SvgBackIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 39.392 24.06"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2}>
      <path
        data-name="Path 303"
        d="M2.118 10.094 17.294 1.33a2.234 2.234 0 0 1 3.351 1.934v17.528a2.234 2.234 0 0 1-3.351 1.938L2.118 13.965a2.234 2.234 0 0 1 0-3.871Z"
      />
      <path
        data-name="Path 304"
        d="m24.141 7.63 10.9-6.3a2.234 2.234 0 0 1 3.351 1.934v17.528a2.234 2.234 0 0 1-3.351 1.938l-10.9-6.295"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default SvgBackIcon;
