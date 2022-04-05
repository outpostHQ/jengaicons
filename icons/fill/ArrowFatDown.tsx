import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.96 16.283 12 12 12-12h-6v-11a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v11h-6Z"
      fill="#000"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatDown;
