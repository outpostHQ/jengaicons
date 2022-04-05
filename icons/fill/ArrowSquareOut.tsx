import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.96 17.783v8.5h-20v-20h8.5M20.96 6.283h6v6M18.96 14.283l8-8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareOut;
