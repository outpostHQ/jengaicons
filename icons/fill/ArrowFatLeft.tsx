import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16.96 4.283-12 12 12 12v-6h11a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-11v-6Z"
      fill="#000"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatLeft;
