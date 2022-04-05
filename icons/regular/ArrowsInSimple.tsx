import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsInSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.425 19.575h6v6M4 28l8.425-8.425M19.425 6.575v6h6M27.85 4.15l-8.425 8.425"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsInSimple;
