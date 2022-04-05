import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16.081 20.526-4.242-4.243 4.242-4.243M22.081 20.526l-4.242-4.243 4.242-4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCaretDoubleLeft;
