import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsInLineVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26 16H6M16 19v8M11.757 23.243 16 19l4.243 4.243M11.757 8.757 16 13l4.243-4.243M16 5v8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsInLineVertical;
