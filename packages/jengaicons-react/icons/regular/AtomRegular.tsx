import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AtomRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.7 25.2c1.823-1.823-.595-7.195-5.4-12-4.805-4.805-10.177-7.223-12-5.4-1.823 1.822.595 7.195 5.4 12 4.805 4.805 10.177 7.222 12 5.4Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.3 19.8c4.805-4.805 7.223-10.178 5.4-12-1.823-1.823-7.195.595-12 5.4-4.805 4.805-7.223 10.177-5.4 12 1.823 1.822 7.195-.595 12-5.4Z"
      />
      <path
        fill={color || "#000000"}
        d="M15.998 17.773a1.273 1.273 0 1 0 0-2.546 1.273 1.273 0 0 0 0 2.546Z"
      />
    </svg>
  );
});

AtomRegular.displayName = "AtomRegular";

export default AtomRegular;
