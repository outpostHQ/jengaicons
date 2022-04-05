import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsInSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.386 19.858h6v6M4.96 28.283l8.426-8.425M20.386 6.857v6h6M28.811 4.432l-8.425 8.425"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsInSimple;
