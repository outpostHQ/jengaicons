import * as React from "react";
import { SVGProps } from "react";

const SvgArrowFatLinesDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4 16 12 12 12-12h-6v-4H10v4H4ZM22 4H10M22 8H10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowFatLinesDown;
