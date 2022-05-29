import * as React from "react";

const SvgHideTimeIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 60 60"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path data-name="Rectangle 111" d="M0 0h60v60H0z" />
      <g
        data-name="hide_time_icon"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path data-name="Line 193" d="m41.396 37.293-11.043-7.062" />
        <g data-name="Group 238">
          <path
            data-name="Path 299"
            d="M50.573 43.163A24 24 0 1 1 30.357 6.229"
          />
          <path data-name="Line 194" d="M30.354 30.229V13.063" />
          <path data-name="Line 195" d="M35.354 6.756h0" />
          <path data-name="Line 196" d="M40.164 8.326h0" />
          <path data-name="Line 197" d="M44.597 10.912h0" />
          <path data-name="Line 198" d="M48.382 14.387h0" />
          <path data-name="Line 199" d="M51.334 18.576h0" />
          <path data-name="Line 200" d="M53.345 23.339h0" />
          <path data-name="Line 201" d="M54.279 28.327h0" />
          <path data-name="Line 202" d="M54.134 33.475h0" />
          <path data-name="Line 203" d="M52.928 38.379h0" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgHideTimeIcon;
