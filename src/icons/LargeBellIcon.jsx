import * as React from "react";

const SvgLargeBellIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 60 60"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <clipPath id="large_bell_icon_svg__a">
        <path data-name="Rectangle 90" fill="none" d="M0 0h54.658v54.658H0z" />
      </clipPath>
    </defs>
    <path data-name="Rectangle 112" fill="none" d="M0 0h60v60H0z" />
    <path data-name="Rectangle 113" fill="none" d="M0 0h60v60H0z" />
    <g data-name="large_bell_icon">
      <g
        data-name="Group 177"
        clipPath="url(#large_bell_icon_svg__a)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(2.836 3.242)"
      >
        <path
          data-name="Path 280"
          d="M43.055 32.343v-6.119c0-9.925-6.336-16.494-15.809-16.494S11.43 16.298 11.43 25.543v6.831a4.566 4.566 0 0 1-1.079 3.069 9.485 9.485 0 0 0-1.594 2.565 3.074 3.074 0 0 0 1.79 4.122c8.436 3.087 24.855 2.841 33.392-.061a2.972 2.972 0 0 0 1.813-4 9.574 9.574 0 0 0-1.608-2.612 4.613 4.613 0 0 1-1.089-3.114Z"
        />
        <path data-name="Path 281" d="M24.249 5.952a3 3 0 0 1 6 0" />
        <path
          data-name="Path 282"
          d="M22.773 48.123a4.935 4.935 0 0 0 8.941 0"
        />
      </g>
    </g>
  </svg>
);

export default SvgLargeBellIcon;
