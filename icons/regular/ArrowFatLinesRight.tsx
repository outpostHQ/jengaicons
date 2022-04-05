import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatLinesRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16 4 12 12-12 12v-6h-4V10h4V4ZM4 22V10M8 22V10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatLinesRight;
