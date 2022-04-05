import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLineUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.96 26.283h20M17.96 6.283h6v6M9.96 20.283l14-14"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowLineUpRight;
