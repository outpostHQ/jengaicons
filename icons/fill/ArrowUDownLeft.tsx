import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.96 7.162h11a7 7 0 0 1 7 7v0a7.002 7.002 0 0 1-7 7h-17"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.203 16.919 4.96 21.162l4.243 4.242"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowUDownLeft;
