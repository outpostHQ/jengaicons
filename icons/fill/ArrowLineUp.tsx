import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLineUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.96 4.855h20M16.96 8.855v18.856M12.717 13.098l4.243-4.243 4.243 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowLineUp;
