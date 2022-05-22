import * as React from "react";

const SvgHyperlinkIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 15.754 15.755"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        data-name="Path 297"
        d="M12.258 6.926v6.606a1.723 1.723 0 0 1-1.723 1.726H2.223A1.723 1.723 0 0 1 .5 13.532V5.22a1.723 1.723 0 0 1 1.723-1.723h6.606"
      />
      <path data-name="Line 190" d="M7.455 8.299 15.047.707" />
      <path data-name="Line 191" d="M15.047 6.065V.707" />
      <path data-name="Line 192" d="M9.689.707h5.358" />
    </g>
  </svg>
);

export default SvgHyperlinkIcon;
