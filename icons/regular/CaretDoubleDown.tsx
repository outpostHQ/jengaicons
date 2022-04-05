import * as React from "react";
import { SVGProps } from "react";

const SvgCaretDoubleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.243 16.879 16 21.12l-4.243-4.242M20.243 10.879 16 15.12l-4.243-4.242"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCaretDoubleDown;
