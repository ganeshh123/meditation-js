import * as React from "react";

function SvgVideoOffIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 53 36"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none">
        <g
          data-name="video_off_icon"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            data-name="Path 146"
            d="M43.398 23.739l7.01 4.18V10.701l-7.044 4.2"
          />
          <path data-name="Line 140" d="M2 4.378l48.408 28.948" />
          <path
            data-name="Path 148"
            d="M38.435 26.166v2.868a3.07 3.07 0 01-3.061 3.061h-22.3a3.07 3.07 0 01-3.061-3.061V9.17"
          />
          <path
            data-name="Path 149"
            d="M15.115 6.525h20.258a3.07 3.07 0 013.061 3.061v10.883"
          />
        </g>
        <path d="M0 0h53v36H0z" />
      </g>
    </svg>
  );
}

export default SvgVideoOffIcon;
