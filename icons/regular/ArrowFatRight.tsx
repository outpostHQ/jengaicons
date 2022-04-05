import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16 4 12 12-12 12v-6H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h11V4Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatRight;
