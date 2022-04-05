import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLineRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27 6v20M18.757 11.753l4.242 4.242-4.242 4.243M23 15.995H5"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowLineRight;
