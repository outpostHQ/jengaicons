import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DesktopFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M4.96 4.283a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11v2h-3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-3v-2h11a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-24Zm12 18h11v-4h-22v4h11Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

DesktopFill.displayName = "DesktopFill";

export default DesktopFill;
