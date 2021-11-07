import * as React from "react";

function SvgPauseIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20.112 21.591"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none">
        <path d="M4 0h.856a4 4 0 014 4v13.591a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" />
        <path
          d="M4 2c-1.103 0-2 .897-2 2v13.591c0 1.103.897 2 2 2h.856c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H4m0-2h.856a4 4 0 014 4v13.591a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z"
          fill="currentColor"
        />
        <g data-name="stop_icon">
          <path d="M15.256 0h.856a4 4 0 014 4v13.591a4 4 0 01-4 4h-.856a4 4 0 01-4-4V4a4 4 0 014-4z" />
          <path
            d="M15.256 2c-1.103 0-2 .897-2 2v13.591c0 1.103.897 2 2 2h.856c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-.856m0-2h.856a4 4 0 014 4v13.591a4 4 0 01-4 4h-.856a4 4 0 01-4-4V4a4 4 0 014-4z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPauseIcon;
