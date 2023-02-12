import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GhostRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.477 16a1.51 1.51 0 1 0 0-3.02 1.51 1.51 0 0 0 0 3.02ZM19.523 16a1.51 1.51 0 1 0 0-3.02 1.51 1.51 0 0 0 0 3.02Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M27.65 28V15.65C27.65 9.216 22.434 4 16 4S4.35 9.216 4.35 15.65V28l3.883-3.883L12.117 28 16 24.117 19.883 28l3.884-3.883L27.65 28Z"
      />
    </svg>
  );
});

GhostRegular.displayName = "GhostRegular";

export default GhostRegular;
