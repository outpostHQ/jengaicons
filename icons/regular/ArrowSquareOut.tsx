import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26 17.5V26H6V6h8.5M20 6h6v6M18 14l8-8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareOut;
