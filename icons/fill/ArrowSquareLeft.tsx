import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000"
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
      d="M4.96 4.283h24v24h-24z"
    />
    <path
      d="m16.203 12.04-4.243 4.243 4.243 4.242M11.96 16.283h10"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareLeft;
