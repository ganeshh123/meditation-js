import * as React from "react";

function SvgPlayIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20.111 21.591"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none">
        <path d="M18.067 7.307a4 4 0 010 6.978L5.956 21.078A4 4 0 010 17.589V4.006A4 4 0 015.956.517z" />
        <path
          d="M18.111 10.796c0-.352-.1-1.228-1.022-1.745L4.978 2.261c-.903-.505-1.692-.155-1.99.02C2.692 2.454 2 2.97 2 4.005v13.58c0 1.034.691 1.551.989 1.725.297.174 1.086.525 1.989.02l12.111-6.79c.923-.518 1.022-1.393 1.022-1.745m2 0a3.96 3.96 0 01-2.044 3.489l-12.111 6.79C3.289 22.569 0 20.642 0 17.585V4.007C0 .95 3.29-.978 5.956.517l12.111 6.79a3.96 3.96 0 012.044 3.489z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgPlayIcon;
