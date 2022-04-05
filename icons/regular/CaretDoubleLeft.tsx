import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.121 20.243 10.88 16l4.242-4.243M21.121 20.243 16.88 16l4.242-4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCaretDoubleLeft;
