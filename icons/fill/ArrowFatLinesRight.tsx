import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatLinesRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16.96 4.283 12 12-12 12v-6h-4v-12h4v-6Z"
      fill="#000"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.96 22.283v-12M8.96 22.283v-12"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatLinesRight;
