import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BabyRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 28.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z"
      />
      <path
        fill={color || "#000000"}
        d="M11.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.317 21.5a6.004 6.004 0 0 1-6.634 0"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M14.944 4.744c-.711 1.43-1.17 2.506-1.53 3.643-.456 1.435.701 2.826 2.207 2.826v0A2.379 2.379 0 0 0 18 8.834v-.268"
      />
    </svg>
  );
});

BabyRegular.displayName = "BabyRegular";

export default BabyRegular;
