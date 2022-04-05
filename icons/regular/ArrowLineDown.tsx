import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLineDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 27.428h20M11.757 19.186 16 23.428l4.243-4.242M16 4.572v18.856"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowLineDown;
