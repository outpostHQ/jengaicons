import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLineDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.96 6.283h22M23.96 20.283v6h-6M9.96 12.283l14 14"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowLineDownRight;
