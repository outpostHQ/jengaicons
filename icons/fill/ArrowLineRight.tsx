import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLineRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.96 6.283v20M19.717 12.036l4.243 4.242-4.243 4.243M23.96 16.278h-18"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowLineRight;
