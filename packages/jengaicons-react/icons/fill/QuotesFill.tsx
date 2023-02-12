import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const QuotesFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color } = props;

  return (
    <svg
      style={{ width: size || 32, height: size || 32 }}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={color || "#000000"}
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.96 8.13h9.5v9.5h-9.5z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M14.446 15.824v1.557c0 1.936 0 6.83-5.024 7.055"
      />
      <path
        fill={color || "#000000"}
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.46 8.13h9.5v9.5h-9.5z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M28.946 15.824v1.557c0 1.936 0 6.83-5.024 7.055"
      />
    </svg>
  );
});

QuotesFill.displayName = "QuotesFill";

export default QuotesFill;
