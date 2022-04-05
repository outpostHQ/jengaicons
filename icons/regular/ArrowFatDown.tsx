import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4 16 12 12 12-12h-6V5a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v11H4Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatDown;
