import * as React from "react";

function SvgLoadingIcon({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 100 100"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g data-name="Group 167" fill="none">
        <path data-name="Rectangle 89" d="M0 0h100v100H0z" />
        <g
          data-name="Ellipse 62"
          transform="translate(42.622 1.252)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={7.097} cy={7.097} r={7.097} stroke="none" />
          <circle cx={7.097} cy={7.097} r={6.097} />
        </g>
        <g
          data-name="Ellipse 63"
          transform="translate(66.744 8.807)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={7.514} cy={7.514} r={7.514} stroke="none" />
          <circle cx={7.514} cy={7.514} r={6.514} />
        </g>
        <g
          data-name="Ellipse 61"
          transform="translate(81.495 29.263)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={7.932} cy={7.932} r={7.932} stroke="none" />
          <circle cx={7.932} cy={7.932} r={6.932} />
        </g>
        <g
          data-name="Ellipse 60"
          transform="translate(81.074 54.645)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={8.349} cy={8.349} r={8.349} stroke="none" />
          <circle cx={8.349} cy={8.349} r={7.349} />
        </g>
        <g
          data-name="Ellipse 64"
          transform="translate(19.67 78.439)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={5.427} cy={5.427} r={5.427} stroke="none" />
          <circle cx={5.427} cy={5.427} r={4.427} />
        </g>
        <g
          data-name="Ellipse 66"
          transform="translate(4.175 57.15)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={5.844} cy={5.844} r={5.844} stroke="none" />
          <circle cx={5.844} cy={5.844} r={4.844} />
        </g>
        <g
          data-name="Ellipse 67"
          transform="translate(3.757 30.933)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={6.262} cy={6.262} r={6.262} stroke="none" />
          <circle cx={6.262} cy={6.262} r={5.262} />
        </g>
        <g
          data-name="Ellipse 65"
          transform="translate(18.505 9.642)"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={6.679} cy={6.679} r={6.679} stroke="none" />
          <circle cx={6.679} cy={6.679} r={5.679} />
        </g>
      </g>
    </svg>
  );
}

export default SvgLoadingIcon;
