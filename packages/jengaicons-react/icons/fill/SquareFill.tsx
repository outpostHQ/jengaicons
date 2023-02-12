import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SquareFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      <rect
        width="24"
        height="24"
        x="4.96"
        y="4.283"
        fill={color || "#000000"}
        rx="1"
      />
    </svg>
  );
});

SquareFill.displayName = "SquareFill";

export default SquareFill;
