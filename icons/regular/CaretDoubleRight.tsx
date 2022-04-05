import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDoubleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.879 11.757 15.12 16l-4.242 4.243M16.879 11.757 21.12 16l-4.242 4.243"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCaretDoubleRight;
