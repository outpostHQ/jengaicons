import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.718 12.283 4.242 4.243-4.242 4.242M21.96 16.523h-10"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareRight;
