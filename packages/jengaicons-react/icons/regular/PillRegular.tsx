import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PillRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m12.573 12.568 6.859 6.859M19.44 14.29l2.616-2.527"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="24.245"
        height="9.696"
        rx="4.848"
        transform="scale(-1 1) rotate(45 -15.4 -23.523)"
        stroke="#1C1B1F"
        strokeWidth="2"
      />
    </svg>
  );
});

PillRegular.displayName = "PillRegular";

export default PillRegular;
