import * as React from "react";

const SvgPlayIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 21.646 24.06"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M19.528 10.094 4.353 1.33A2.235 2.235 0 0 0 1 3.267v17.525a2.235 2.235 0 0 0 3.353 1.938l15.175-8.762a2.234 2.234 0 0 0 0-3.874Z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlayIcon;
