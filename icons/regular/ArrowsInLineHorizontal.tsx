import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsInLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.79 6v20M18.79 16h8M23.032 11.755l-4.243 4.243 4.243 4.243M8.547 11.755l4.242 4.243-4.481 3.99M12.79 15.998h-8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsInLineHorizontal;
