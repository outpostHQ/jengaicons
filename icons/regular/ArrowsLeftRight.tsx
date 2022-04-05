import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 24.354h24M28 8.97H4M8.293 4.779 4 8.971l4.293 4.191M23.707 20.162 28 24.354l-4.293 4.191"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsLeftRight;
