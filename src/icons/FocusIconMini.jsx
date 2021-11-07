import * as React from "react";

function SvgFocusIconMini({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 62.073 78.832"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <g strokeMiterlimit={10}>
          <path
            data-name="Path 117"
            d="M47.926 29.127l12.585 23.05a4.494 4.494 0 01-1.8 6.1L30.384 73.681a4.5 4.5 0 01-6.1-1.8l-21.267-39.1a4.5 4.5 0 011.8-6.1l28.328-15.408a4.492 4.492 0 016.094 1.8l1.349 2.6"
          />
          <path
            data-name="Path 118"
            d="M30.417 36.194l-9.986 5.375a2.135 2.135 0 01-2.9-.855l-3.888-7.144a2.138 2.138 0 01.857-2.9l16.728-9.1a2.136 2.136 0 012.9.857l1.7 3.157"
          />
          <path
            data-name="Path 119"
            d="M58.71 58.273L30.384 73.681a4.5 4.5 0 01-6.1-1.8l-21.267-39.1a4.449 4.449 0 01-.529-1.778 4.492 4.492 0 00-.82 5.368l21.269 39.1a4.492 4.492 0 006.094 1.8l28.333-15.409a4.494 4.494 0 002.328-4.318 4.426 4.426 0 01-.982.729z"
          />
          <path
            data-name="Path 120"
            d="M3.306 44.051c-1.064-1.863-.113-4.09 2.126-4.975"
          />
          <path
            data-name="Path 121"
            d="M8.796 39.066c-.4-.62-1.9-.615-3.364.009"
          />
          <path
            data-name="Path 122"
            d="M9.604 55.846c-1.064-1.863-.113-4.088 2.126-4.973"
          />
          <path
            data-name="Path 123"
            d="M15.094 50.861c-.4-.62-1.9-.615-3.364.012"
          />
          <path
            data-name="Path 124"
            d="M16.388 68.379c-1.064-1.865-.113-4.09 2.128-4.975"
          />
          <path
            data-name="Path 125"
            d="M21.881 63.392c-.4-.62-1.905-.613-3.364.012"
          />
          <path data-name="Line 109" d="M16.9 32.901l10.941-5.952" />
          <path data-name="Line 110" d="M18.122 35.148l8.707-4.736" />
          <path
            data-name="Path 126"
            d="M6.649 45.723a3.427 3.427 0 01-3.359-1.7"
          />
          <path
            data-name="Path 127"
            d="M12.942 57.514a3.433 3.433 0 01-3.359-1.7"
          />
          <path
            data-name="Path 128"
            d="M19.738 70.054a3.427 3.427 0 01-3.359-1.7"
          />
        </g>
        <g strokeLinejoin="round">
          <path data-name="Line 103" d="M45.473 12.114L32.065 39.341" />
          <path data-name="Line 104" d="M32.065 39.342l-.971 10.049" />
          <path data-name="Line 105" d="M38.467 42.495l-7.373 6.896" />
          <path
            data-name="Path 113"
            d="M51.875 15.267l-1.053 2.135-.769 1.561-8.594 17.452-1.287 2.614-1.706 3.465"
          />
          <path data-name="Line 106" d="M42.964 25.286l-7.698 15.632" />
          <path data-name="Line 107" d="M46.265 18.583l-1.859 3.774" />
          <path data-name="Line 108" d="M48.674 13.691L47.65 15.77" />
          <path
            data-name="Path 114"
            d="M31.311 47.17a1.113 1.113 0 001.414.7"
          />
          <path
            data-name="Path 115"
            d="M35.265 40.919a2.573 2.573 0 012.142-.312c.456.223.822.7.947 1.832"
          />
          <path
            data-name="Path 116"
            d="M32.122 39.369a2.573 2.573 0 012.142-.31c.453.223.82.7.944 1.832"
          />
          <path
            data-name="Rectangle 49"
            d="M46.515 9.142l7.082 3.487-1.302 2.644-7.082-3.487z"
          />
          <path
            data-name="Rectangle 51"
            d="M47.816 6.499l7.082 3.487-2.604 5.287-7.081-3.487z"
          />
          <path
            data-name="Rectangle 52"
            d="M51.157 1.574l5.608 2.762a.533.533 0 01.243.714L54.64 9.858h0l-6.564-3.232h0l2.368-4.809a.533.533 0 01.713-.243z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgFocusIconMini;
