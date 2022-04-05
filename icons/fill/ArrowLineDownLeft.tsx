import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLineDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.96 6.157h-20M9.96 20.409v6h6M23.96 12.409l-14 14"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowLineDownLeft;
