import * as React from "react";

function SvgStopIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21.712 21.712"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <rect width={21.712} height={21.712} rx={4} stroke="none" />
        <rect x={1} y={1} width={19.712} height={19.712} rx={3} />
      </g>
    </svg>
  );
}

export default SvgStopIcon;
