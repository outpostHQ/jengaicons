import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsDownUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.765 4.283v24M25.2 28.283v-24M20.931 8.603l4.218-4.268 4.217 4.268M5.497 23.963l4.217 4.268 4.217-4.268"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsDownUp;
