import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiamondFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.395 17.334a1.487 1.487 0 0 1 0-2.102L15.91 4.718c.58-.58 1.522-.58 2.102 0l10.514 10.514c.58.58.58 1.522 0 2.102L18.01 27.848c-.58.58-1.522.58-2.102 0L5.395 17.334Z"
      />
    </svg>
  );
});

DiamondFill.displayName = "DiamondFill";

export default DiamondFill;
