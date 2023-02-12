import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiceSixFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 5.283a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-22Zm7.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-10.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-10.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

DiceSixFill.displayName = "DiceSixFill";

export default DiceSixFill;
