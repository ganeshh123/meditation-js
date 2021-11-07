import * as React from "react";

function SvgTimelineIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 43.182 4"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path
          data-name="Line 143"
          strokeWidth={2}
          opacity={0.6}
          d="M31.682 2h10.5"
        />
        <path data-name="Line 144" strokeWidth={4} d="M2 2h25.248" />
      </g>
    </svg>
  );
}

export default SvgTimelineIcon;
