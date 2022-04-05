import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 16 16 4l12 12h-6v11a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V16H4Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatUp;
