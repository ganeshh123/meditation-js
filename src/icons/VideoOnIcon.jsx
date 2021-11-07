import * as React from "react";

function SvgVideoOnIcon({ title, titleId, ...props }) {
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
          data-name="video_on_icon"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        >
          <path
            data-name="Path 155"
            d="M13.063 6.509h22.306a3.063 3.063 0 013.063 3.063v19.457a3.063 3.063 0 01-3.063 3.063H13.063A3.063 3.063 0 0110 29.029V9.572a3.063 3.063 0 013.063-3.063z"
          />
          <path
            data-name="Path 154"
            d="M43.398 23.731l7.014 4.182V10.688l-7.047 4.2"
            strokeLinejoin="round"
          />
        </g>
        <path d="M0 0h53v36H0z" />
      </g>
    </svg>
  );
}

export default SvgVideoOnIcon;
