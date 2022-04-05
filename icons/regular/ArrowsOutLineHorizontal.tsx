import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsOutLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 6v20M3.851 16h8M8.094 11.755 3.85 15.998l4.243 4.243M23.728 11.755l4.242 4.243-4.481 3.99M27.728 15.998h-8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsOutLineHorizontal;
