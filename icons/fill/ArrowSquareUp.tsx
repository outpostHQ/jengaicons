import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.96 11.283v10M12.717 15.525l4.243-4.242 4.243 4.242"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareUp;
