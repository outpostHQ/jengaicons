import * as React from "react";
import { SVGProps } from "react";

const SvgArrowSquareUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.464 12.464h-6v6M19.535 19.536l-7.07-7.072"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowSquareUpLeft;
