import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DoorFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.268 5.206a1 1 0 0 1 1 1V26.36h3.692a1 1 0 0 1 0 2h-24a1 1 0 1 1 0-2h3.692V6.206a1 1 0 0 1 1-1h14.616ZM20.19 17.668a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

DoorFill.displayName = "DoorFill";

export default DoorFill;
