import * as React from "react";

const SvgPauseIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 21.498 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M16.387 1h.725c1.87 0 3.388 1.825 3.388 4.076v13.848c0 2.251-1.518 4.076-3.389 4.076h-.724C14.516 23 13 21.175 13 18.924V5.076C13 2.825 14.516 1 16.387 1ZM4.387 1h.725C6.982 1 8.5 2.825 8.5 5.076v13.848C8.5 21.175 6.982 23 5.111 23h-.724C2.516 23 1 21.175 1 18.924V5.076C1 2.825 2.516 1 4.387 1Z" />
    </g>
  </svg>
);

export default SvgPauseIcon;
