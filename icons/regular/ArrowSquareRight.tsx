import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
      d="M4 4h24v24H4z"
    />
    <path
      d="M16.757 12 21 16.243l-4.243 4.242M21 16.24H11"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareRight;
