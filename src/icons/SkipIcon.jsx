import * as React from "react";

const SvgSkipIcon = ({ title, titleId, ...props }) => (
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
        d="M37.275 10.094 22.098 1.33a2.234 2.234 0 0 0-3.351 1.934v17.528a2.234 2.234 0 0 0 3.351 1.938l15.176-8.762a2.234 2.234 0 0 0 .001-3.874Z"
      />
      <path
        data-name="Path 304"
        d="m15.251 7.63-10.9-6.3A2.234 2.234 0 0 0 1 3.267v17.525a2.234 2.234 0 0 0 3.351 1.938l10.9-6.291"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default SvgSkipIcon;
