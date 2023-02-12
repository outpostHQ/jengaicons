import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PillRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12.573 12.568 6.859 6.859M19.44 14.29l2.616-2.527"
      />
      <rect
        width="24.245"
        height="9.696"
        stroke={color || "#000000"}
        strokeWidth="2"
        rx="4.848"
        transform="scale(-1 1) rotate(45 -15.4 -23.523)"
      />
    </svg>
  );
});

PillRegular.displayName = "PillRegular";

export default PillRegular;
