import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000"
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
      d="M4.96 4.283h24v24h-24z"
    />
    <path
      d="M20.495 13.819v6h-6M13.424 12.747l7.071 7.071"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareDownRight;
