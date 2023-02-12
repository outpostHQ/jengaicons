import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WallFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 7.283h10v5h-11v-4a1 1 0 0 1 1-1Zm17 5h-5v-5h10a1 1 0 0 1 1 1v4h-6Zm1 2h5v4h-5v-4Zm-1.007 6h6.007v4a1 1 0 0 1-1 1h-10v-5h4.993Zm-.993-2v-4h-10v4h10Zm-6 2h-11v4a1 1 0 0 0 1 1h10v-5Zm-11-2h5v-4h-5v4Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

WallFill.displayName = "WallFill";

export default WallFill;
