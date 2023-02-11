import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const QuotesFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4.96 8.13h9.5v9.5h-9.5z"
      />
      <path
        d="M14.446 15.824v1.557c0 1.936 0 6.83-5.024 7.055"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M19.46 8.13h9.5v9.5h-9.5z"
      />
      <path
        d="M28.946 15.824v1.557c0 1.936 0 6.83-5.024 7.055"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

QuotesFill.displayName = "QuotesFill";

export default QuotesFill;
