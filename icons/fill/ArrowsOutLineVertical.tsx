import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsOutLineVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.96 16.283h-20M16.96 4.798v8M12.717 9.04l4.243-4.242 4.243 4.242M12.717 23.526l4.243 4.242 4.243-4.242M16.96 19.768v8"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsOutLineVertical;
