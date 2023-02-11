import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ColumnsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      <rect
        width="8"
        height="24"
        rx="1"
        transform="matrix(1 0 0 -1 6.96 28.283)"
        fill="#1C1B1F"
      />
      <rect
        width="8"
        height="24"
        rx="1"
        transform="matrix(1 0 0 -1 18.96 28.283)"
        fill="#1C1B1F"
      />
    </svg>
  );
});

ColumnsFill.displayName = "ColumnsFill";

export default ColumnsFill;
